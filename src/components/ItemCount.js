import React, { useState } from "react";
import Button from "../components/Button";
import '../App.css';

export default function ItemCount() {
  const [count, setCount] = useState(1);

  let incrementCount = () => {
    setCount(prev => prev + 1);
  };

  let decrementCount = () => {
    setCount(prev => prev  - 1);
  };

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>cantidad:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
};


