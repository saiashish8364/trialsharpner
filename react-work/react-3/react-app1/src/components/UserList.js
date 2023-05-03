import React from "react";
function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id} id={user.id}>
          {
            <pre>
              <h2>
                {user.name} : {user.age}
              </h2>
            </pre>
          }
        </li>
      ))}
    </ul>
  );
}
export default UserList;
