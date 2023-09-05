import { useState, useRef } from "react";

export const TodoInput = ({ getListInput }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.length === 0) {
      setErrorMsg("input empty");
    } else {
      getListInput((prevState) => [...prevState, inputValue]);
      setInputValue("");
      setErrorMsg("");
    }
    inputRef.current.focus();
  };

  const inputRef = useRef(null);

  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="what to do"
        value={inputValue}
        onChange={handleInput}
        ref={inputRef}
      />
      <button type="button" onClick={handleClick}>
        send
      </button>
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
    </div>
  );
};
