import React, { useState } from "react";

function UserForm(props) {
  let data = [];
  let [userName, setUserName] = useState("");
  let [userAge, setUserAge] = useState("");
  const [validName, setValidName] = useState(false);
  const [validAge, setValidAge] = useState(false);
  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setValidName(true);
    }
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
    if (event.target.value.trim().length > 0) {
      setValidAge(true);
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!validName) {
      setValidName(false);
      setValidAge(false);
      setUserName("");
      setUserAge("");
      document.getElementById("age").value = null;
      return window.alert("Name Field cannot be empty!");
    }
    if (!validAge) {
      setValidName(false);
      setValidAge(false);
      setUserName("");
      setUserAge("");
      document.getElementById("name").value = "";
      return window.alert("Age Field cannot be empty!");
    }
    if (userAge < 1) {
      setValidName(false);
      setValidAge(false);
      setUserName("");
      setUserAge("");
      document.getElementById("name").value = "";
      document.getElementById("age").value = null;
      return window.alert("age should be >0");
    }
    //console.log(userName, userAge);
    if (validName === true && validAge === true) {
      data = { name: userName, age: userAge, id: Math.random().toString() };
      props.onAdduser(data);
      setUserName("");
      setUserAge("");
      setValidName(false);
      setValidAge(false);
      document.getElementById("name").value = "";
      document.getElementById("age").value = null;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>
          <h2>UserName</h2>
        </label>
        <input type="text" id="name" onChange={nameChangeHandler}></input>
        <label>
          <h2>Age(years)</h2>
        </label>
        <input type="number" id="age" onChange={ageChangeHandler}></input>
        <br />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}
export default UserForm;
