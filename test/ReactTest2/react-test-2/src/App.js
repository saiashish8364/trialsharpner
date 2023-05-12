import { useState } from "react";
import React from "react";
import InputForm from "./Components/InputForm";
function App() {
  const [productData, setProductData] = useState([]);

  const AddProduct = (data) => {
    setProductData([...productData, data]);
  };

  const productDeleteHandler = (itemId) => {
    setProductData((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== itemId.target.id
      );
      localStorage.removeItem(itemId.target.id);
      console.log(itemId);
      return updatedProducts;
    });
  };
  return (
    <>
      <InputForm onAddProduct={AddProduct} />
      <h1>Available Product Details:</h1>
      <h2>Food Products</h2>
      <ul>
        {productData.map((item) => {
          if (item.category === "Food") {
            return (
              <li key={item.id}>
                {item.category}-{item.name}-{item.price}
                <button id={item.id} onClick={productDeleteHandler}>
                  Delete
                </button>
              </li>
            );
          } else {
            return "";
          }
        })}
      </ul>
      <h2>Entertainment Products</h2>
      <ul>
        {productData.map((item) => {
          if (item.category === "Entertainment") {
            return (
              <li key={item.id}>
                {item.category}-{item.name}-{item.price}
                <button id={item.id} onClick={productDeleteHandler}>
                  Delete
                </button>
              </li>
            );
          } else {
            return "";
          }
        })}
      </ul>
      <h2>Sports Products</h2>
      <ul>
        {productData.map((item) => {
          if (item.category === "Sports") {
            return (
              <li key={item.id}>
                {item.category}-{item.name}-{item.price}
                <button id={item.id} onClick={productDeleteHandler}>
                  Delete
                </button>
              </li>
            );
          } else {
            return "";
          }
        })}
      </ul>
    </>
  );
}

export default App;
