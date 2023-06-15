import { useContext, useState } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [close, setClose] = useState(false);
  function onClosebutton() {
    setClose(!close);
    props.sendCloseData(close);
  }
  const cartItemMinus = (event) => {
    cartCtx.removeItem(String(event.target.id));
  };
  const cartItemPlus = (event) => {
    let cartItem;
    cartCtx.items.forEach((item) => {
      if (Number(item.id) === Number(event.target.id)) {
        cartItem = item;
      }
    });
    cartCtx.addItem({
      id: cartItem.id,
      name: cartItem.name,
      amount: Number(1),
      price: Number(cartItem.price),
    });
  };
  const orderItems = () => {
    cartCtx.orderItems();
  };
  return (
    <Model>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            <span className={classes.name}>{item.name}</span>
            <span className={classes.cartPrice}>Rs.{item.price}</span>
            <span className={classes.cartAmount}>x{item.amount}</span>
            <button
              id={item.id}
              name={item.name}
              price={item.price}
              onClick={cartItemMinus}
              className={classes.btnm}
            >
              -
            </button>
            <button
              onClick={cartItemPlus}
              id={item.id}
              name={item.name}
              price={item.price}
              className={classes.btna}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <div>
        <span className={classes.amount}>Total Amount: </span>
        <span className={classes.price}>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button onClick={onClosebutton} className={classes.btn}>
          Close
        </button>
        <button className={classes.btn} onClick={orderItems}>
          Order
        </button>
      </div>
    </Model>
  );
};
export default Cart;
