import React from "react";

function TotalValue(props) {
  const totalValue = props.productList.reduce(
    (currentItem, item) => parseInt(currentItem) + parseInt(item.price),
    0
  );
  return (
    <h2>
      Total Value Worth of Products:{" "}
      <span style={{ fontWeight: "normal" }}>
        Rs {totalValue > 0 && totalValue}
      </span>
    </h2>
  );
}

export default TotalValue;
