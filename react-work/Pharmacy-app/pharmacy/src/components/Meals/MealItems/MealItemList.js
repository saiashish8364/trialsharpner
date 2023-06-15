import MealForm from "../MealForm/MealForm";
import classes from "./MealItems.module.css";
const MealItemList = (props) => {
  return props.items.map((item) => {
    return (
      <li key={item.id}>
        <h2 className={classes.name}>{item.name}</h2>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>Rs.{item.price}</div>
        <MealForm content={item} />
      </li>
    );
  });
};
export default MealItemList;
