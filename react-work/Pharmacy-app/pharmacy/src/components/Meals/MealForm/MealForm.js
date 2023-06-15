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
    //const reset = props.content.id;
    if (enteredAmount > 0) {
      cartCtx.addItem({
        id: props.content.id,
        name: props.content.name,
        amount: enteredAmount,
        price: props.content.price,
      });
    } else {
      return;
    }
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
        <button id={props.id} type="submit">
          +Add
        </button>
      </form>
    </div>
  );
};
export default MealForm;
