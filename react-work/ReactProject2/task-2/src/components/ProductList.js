import React, { useEffect, useState } from "react";
import TotalValue from "./TotalValue";

function ProductList({ productList }) {
  const [productListState, setProductListState] = useState(productList);

  useEffect(() => {
    setProductListState(productList);
  }, [productList]);

  function handleDelete(orderID) {
    localStorage.removeItem(orderID);
    setProductListState(
      productListState.filter((item) => item.orderID !== orderID)
    );
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {productListState.map((item, index) => (
          <li key={index}>
            {item.price} - {item.description} - {item.orderID}{" "}
            <button onClick={() => handleDelete(item.orderID)}>
              Delete Product
            </button>
          </li>
        ))}
      </ul>
      <TotalValue productList={productListState} />
    </>
  );
}

export default ProductList;
