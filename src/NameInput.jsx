import { useState } from "react";

export const NameInput = ({ getValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    getValue(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={inputValue}
        onChange={handleInput}
      />
      <button type="button" onClick={handleClick}>
        send
      </button>
    </div>
  );
};
