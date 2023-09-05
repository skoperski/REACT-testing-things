import { useState } from "react";

export const Article = ({ text, maxLength }) => {
  const [display, setDisplay] = useState(true);

  const toggleText = () => {
    setDisplay(!display);
  };

  return (
    <div>
      {display ? `${text.substr(0, maxLength).trim()} ...` : text}

      {display ? (
        <a onClick={toggleText}> read more</a>
      ) : (
        <a onClick={toggleText}> read less</a>
      )}
    </div>
  );
};
