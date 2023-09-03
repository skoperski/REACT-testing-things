import React from "react";
import { Stranger } from "./assets/Stranger";
import { Person } from "./assets/Person";

export const Name = ({ name }) => {
  if (name === "") {
    return <Stranger />;
  } else {
    return <Person name={name} />;
  }
};
