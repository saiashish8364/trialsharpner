import { useState } from "react";
import MealItemList from "./MealItemList";

const MealItems = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dolo",
      description: "For Fever and Body Pains",
      price: Number(30),
    },
    {
      id: 2,
      name: "Citrizine",
      description: "For Cold",
      price: Number(40),
    },
    {
      id: 3,
      name: "Pan-D",
      description: "For Gastric Trouble",
      price: Number(180),
    },
  ]);
  let name1;
  let description1;
  let price1;
  const nameChangeHandler = (event) => {
    name1 = event.target.value;
  };
  const descriptionChangeHandler = (event) => {
    description1 = event.target.value;
  };
  const priceChangeHandler = (event) => {
    price1 = event.target.value;
  };
  const mealSubmitHandler = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: Math.random(),
        name: name1,
        description: description1,
        price: Number(price1),
      },
    ]);
  };

  return (
    <>
      <div>
        <form>
          <label>Name:</label>
          <input id="name" onChange={nameChangeHandler}></input>
          <br />
          <label>Description:</label>
          <input id="description" onChange={descriptionChangeHandler}></input>
          <br />
          <label>Price:</label>
          <input id="price" type="number" onChange={priceChangeHandler}></input>
          <br />
          <button onClick={mealSubmitHandler}>Add Product</button>
        </form>
      </div>
      <MealItemList items={items} />
    </>
  );
};
export default MealItems;
