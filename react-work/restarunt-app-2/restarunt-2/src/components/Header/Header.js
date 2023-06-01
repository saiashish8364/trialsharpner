import React, { useEffect, useState, useContext } from "react";
import classes from "./Header.module.css";
import mealsImage from "../HeaderImage/meals.jpg";
import CartContext from "../../Store/cart-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return Number(currNum) + Number(item.amount);
  }, 0);
  const [showCart, setShowCart] = useState(false);
  function showCartItem() {
    setShowCart(!showCart);
    props.onClickYourCart(!showCart);
  }
  useEffect(() => {
    setShowCart(false);
  }, [props.closeButton]);
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.head}>Restarunt Meals Menu</h1>
        <button onClick={showCartItem} className={classes.button}>
          Your Cart {numberOfCartItems}
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food." />
      </div>
    </>
  );
};
export default Header;
