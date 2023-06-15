import Header from "./components/Header/Header";
import MealItems from "./components/Meals/MealItems/MealItems";

import classes from "./App.module.css";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showCart, setCart] = useState(false);
  function onClickCart(state) {
    setCart(state);
  }
  function closeButtonData(state1) {
    setCart(state1);
  }

  return (
    <CartProvider>
      {showCart && <Cart sendCloseData={closeButtonData} />}
      <Header closeButton={showCart} onClickYourCart={onClickCart} />
      <div className={classes.mealsContainer}>
        <ul>
          <MealItems />
        </ul>
      </div>
    </CartProvider>
  );
}

export default App;
