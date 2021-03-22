import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import "./style.css";

// refer to style.css for better understanding undefined means change to default css h2 styling
const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div>
      <h2
        id="display"
        className={
          storedNumber && storedNumber.length > 12
            ? "long-main-display"
            : undefined
        }
      >
        {!number.length && !storedNumber ? "0" : number || storedNumber}
      </h2>
      <p
        className={
          storedNumber && storedNumber.length > 12
            ? "long-stored-display"
            : undefined
        }
      >
        {!storedNumber
          ? "Enter Some Numbers"
          : `${storedNumber} ${functionType} ${number}`}
      </p>
    </div>
  );
};

export default Display;
