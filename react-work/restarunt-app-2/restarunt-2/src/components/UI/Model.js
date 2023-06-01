import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalRoot = document.getElementById("root-portal");
const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalRoot
      )}
    </>
  );
};
export default Model;
