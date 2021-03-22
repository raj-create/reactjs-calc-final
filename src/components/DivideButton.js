import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
//handle function declared in number provider, states do math
// with number and stored number,, and after press equal to, just display final number andfunctype
const DivideButton = () => {
  const { handleFunction } = useContext(NumberContext);
  return (
    <button
      id="divide"
      type="button"
      className="btn btn-outline-info function"
      onClick={() => handleFunction("/")}
    >
      <i className="fas fa-divide" />
    </button>
  );
};

export default DivideButton;
