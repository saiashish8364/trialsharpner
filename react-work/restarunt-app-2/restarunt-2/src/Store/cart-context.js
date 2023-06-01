import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {
    console.log("main");
  },
});
export default CartContext;
