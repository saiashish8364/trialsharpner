import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const productsFromStorage = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const product = JSON.parse(localStorage.getItem(key));
      productsFromStorage.push(product);
    }

    setProductList(productsFromStorage);
  }, []);

  function addProducts(newProduct) {
    localStorage.setItem(newProduct.orderID, JSON.stringify(newProduct));
    setProductList((oldList) => [...oldList, newProduct]);
  }

  return (
    <main>
      <Form addProducts={addProducts} />
      <ProductList productList={productList} />
    </main>
  );
}

export default App;
