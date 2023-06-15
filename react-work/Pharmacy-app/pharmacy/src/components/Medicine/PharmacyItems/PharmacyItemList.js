import PharmacyForm from "../PharmacyForm/PharmacyForm";
import classes from "./PharmacyItems.module.css";
const PharmacyItemList = (props) => {
  return props.items.map((item) => {
    return (
      <li key={item.id}>
        <h2 className={classes.name}>{item.name}</h2>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>Rs.{item.price}</div>
        <PharmacyForm content={item} />
      </li>
    );
  });
};
export default PharmacyItemList;
