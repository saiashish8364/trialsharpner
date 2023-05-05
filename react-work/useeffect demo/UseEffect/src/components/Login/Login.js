//import React, { useState, useEffect, useReducer } from "react";
import React, { useState, useReducer } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
const emailReducer = (state, action) => {
  if (action.type === "user-input") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "input-blur") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "user-password") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "input-password") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  //  const [enteredEmail, setEnteredEmail] = useState("");
  //  const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState("");
  const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [paswordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  // useEffect(() => {
  //   setFormIsValid(
  //     enteredEmail.includes("@") &&
  //       enteredPassword.trim().length > 6 &&
  //       enteredCollege.trim().length > 1
  //   );
  // }, [enteredEmail, enteredPassword, enteredCollege]);
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "user-input", val: event.target.value });
    setFormIsValid(
      event.target.value.includes("@") &&
        paswordState.isValid &&
        enteredCollege.trim().length > 1
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "user-password", val: event.target.value });
    setFormIsValid(
      emailState.isValid &&
        event.target.value.trim().length > 6 &&
        enteredCollege.trim().length > 1
    );
  };
  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "input-blur" });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "input-password" });
  };
  const validateCollegeHandler = () => {
    setCollegeNameIsValid(enteredCollege.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, paswordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            paswordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={paswordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeNameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
