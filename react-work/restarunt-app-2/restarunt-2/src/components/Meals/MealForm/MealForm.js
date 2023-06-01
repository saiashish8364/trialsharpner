import { useContext } from "react";
import classes from "./MealForm.module.css";
import CartContext from "../../../Store/cart-context";
const MealForm = (props) => {
  let enteredAmount = 0;
  const cartCtx = useContext(CartContext);
  const formChangeHandler = (event) => {
    enteredAmount = event.target.value;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAmount > 0) {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: enteredAmount,
        price: props.price,
      });
    } else {
      return;
    }
    document.getElementById(props.id).value = "";
  };
  return (
    <div className={classes.fromDiv}>
      <form onSubmit={submitHandler} className={classes.form}>
        <label className={classes.label}>Amount</label>
        <input
          onChange={formChangeHandler}
          id={props.id}
          className={classes.input}
          type="number"
        />
        <button type="submit">+Add</button>
      </form>
    </div>
  );
};
export default MealForm;
