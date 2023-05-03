import "./App.css";
import UserForm from "./components/UserForm";
import { useState } from "react";
import UserList from "./components/UserList";
function App(props) {
  const [users, addUsers] = useState([]);
  const AddUserHandler = (data) => {
    addUsers((prevUsers) => {
      const updateUsers = [...prevUsers, data];

      return updateUsers;
    });
  };

  return (
    <div className="App">
      <section>
        <UserForm onAdduser={AddUserHandler}></UserForm>
      </section>
      <section>
        <pre>
          <h1>Name : Age</h1>
        </pre>
        <UserList users={users}></UserList>
      </section>
    </div>
  );
}
export default App;
