import React, { useState } from "react";
import { Welcome } from "./Welcome";
import { data } from "./data/data";
import { NameInput } from "./NameInput";
import { Name } from "./Name";
import { Placeholder } from "./assets/Placeholder";
import { TodoInput } from "./TodoInput";
import { Article } from "./Article";
import { text } from "./data/text";
import { Users } from "./Users";

function App() {
  const [userName, setUserName] = useState("");
  const [todo, setTodo] = useState([]);

  const getValue = (value) => {
    setUserName(value);
  };

  const getListInput = (value) => {
    setTodo(value);
  };

  return (
    <>
      <Users />
      <Placeholder />
      <NameInput getValue={getValue} />
      <Name name={userName} />
      <Placeholder />
      <TodoInput getListInput={getListInput} />
      {todo.length === 0 && <h2>Your todo list is empty...</h2>}
      {todo.length > 0 && (
        <ul>
          {todo.map((item, idx) => {
            return (
              <li key={idx} className="listItem">
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <Placeholder />
      <Article text={text} maxLength={35} />
      <Placeholder />
      {data.map(({ name, secondName, job }, idx) => (
        <React.Fragment key={idx}>
          <Welcome name={name} secondName={secondName} job={job} />
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
