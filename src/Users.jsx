import axios from "axios";
import React, { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="listItem">
            {user.name} from {user.address.city}
          </li>
        ))}
      </ul>
      <div className="info">List from jsonplaceholderAPI</div>
    </>
  );
};
