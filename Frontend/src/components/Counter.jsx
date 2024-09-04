import React, { useEffect, useState } from "react";

const Counter = ({ itemName }) => {
  const [count, setCount] = useState(0);
  //This useEffect works when the app starts
  useEffect(() => {
    console.log("Renders when app starts");
  }, []);
  //this works when app first starts and then when some specific thing passed in the dependency array changes
  useEffect(() => {
    console.log("runs when some thing changes", count);
  }, [count]);

  //this works when anything in that component changes
  useEffect(() => {
    console.log("runs when some thing changes", count);
  });

  return (
    <div>
      <h1>{itemName}</h1>
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
