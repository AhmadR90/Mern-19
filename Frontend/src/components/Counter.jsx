import React, { useState } from "react";

const Counter = ({ itemName }) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      {itemName}
      <br />
      {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
