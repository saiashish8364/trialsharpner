import MealForm from "../MealForm/MealForm";
import classes from "./MealItems.module.css";

const items = [
  {
    id: "c1",
    name: "Biryani",
    description: "Fine Sndian Spices and Flavoured Basmathi Rice",
    price: Number(250),
  },
  {
    id: "c2",
    name: "Mutton Mandi",
    description: "Flavoured Arabian Styleed Rice and Spices",
    price: Number(400),
  },
  {
    id: "c3",
    name: "Chicken Noodles",
    description:
      "Chinese type generally made from hard wheat flours, characterized by bright creamy white or bright yellow color and firm texture.",
    price: Number(80),
  },
];

const MealItems = () => {
  return items.map((item) => {
    return (
      <li key={item.id}>
        <h2 className={classes.name}>{item.name}</h2>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>Rs.{item.price}</div>
        <MealForm id={item.id} name={item.name} price={item.price} />
      </li>
    );
  });
};
export default MealItems;
