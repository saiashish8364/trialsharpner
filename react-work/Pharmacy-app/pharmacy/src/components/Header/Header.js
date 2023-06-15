import React, { useEffect, useState, useContext } from "react";
import classes from "./Header.module.css";
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
        <h1 className={classes.head}>Pharmacy Menu</h1>
        <button onClick={showCartItem} className={classes.button}>
          Your Cart {numberOfCartItems}
        </button>
      </header>
    </>
  );
};
export default Header;
