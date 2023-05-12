import React, { useState } from "react";
function InputForm(props) {
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const productIdHandler = (event) => {
    setProductId(event.target.value);
  };
  const productPriceHandler = (event) => {
    setProductPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };
  const optionHandler = (event) => {
    setProductCategory(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const productInformation = {
      id: productId,
      price: productPrice,
      name: productName,
      category: productCategory,
    };
    localStorage.setItem(productId, JSON.stringify(productInformation));
    console.log("submited");
    props.onAddProduct(productInformation);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>ID:</label>
      <input type="number" onChange={productIdHandler}></input>
      <label>Price:</label>
      <input type="number" onChange={productPriceHandler}></input>
      <label>Name:</label>
      <input type="text" onChange={productNameHandler}></input>
      <label>Category:</label>
      <select onChange={optionHandler}>
        <option value="none">-Select-</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Sports">Sports</option>
      </select>
      <button>Add Product</button>
    </form>
  );
}
export default InputForm;
