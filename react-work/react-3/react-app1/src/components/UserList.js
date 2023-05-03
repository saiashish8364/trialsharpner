import React from "react";
import "./UserList.css";
function UserList(props) {
  return (
    <ul className="userdata">
      {props.users.map((user) => (
        <li key={user.id} id={user.id}>
          {
            <pre>
              <h2>
                {user.name}({user.age} years old)
              </h2>
            </pre>
          }
        </li>
      ))}
    </ul>
  );
}
export default UserList;
