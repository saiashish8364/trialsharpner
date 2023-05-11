import React from "react";
import { useState } from "react";

function Form(props) {
  const [productID, setProductID] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");

  function handleProductID(event) {
    setProductID(event.target.value);
  }

  function handleProductPrice(event) {
    setProductPrice(event.target.value);
  }

  function handleProductName(event) {
    setProductName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addProducts({
      price: productPrice,
      description: productName,
      orderID: productID,
    });

    setProductID("");
    setProductPrice("");
    setProductName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product-id">Product ID:</label>
      <input
        type="number"
        id="product-id"
        name="product-id"
        onChange={handleProductID}
        value={productID}
      />
      <label htmlFor="selling-price">Selling Price:</label>
      <input
        type="number"
        id="selling-price"
        name="selling-price"
        onChange={handleProductPrice}
        value={productPrice}
      />
      <label htmlFor="product-name">Product Name:</label>
      <input
        type="text"
        id="product-name"
        name="product-name"
        onChange={handleProductName}
        value={productName}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default Form;
