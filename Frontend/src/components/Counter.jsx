import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{props.itemName}</h1>
      <br />
      {count}
      <br />
      <button onClick={() => {
          setCount(count + 1);
        }} >increment </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
      <button onClick={()=>{
        const updateItem=[
        ...props.Items.slice(0,props.index),
        ...props.Items.slice(props.index+1)
        ]
        props.SetItems(updateItem)
      }}>Delete</button>
    </div>
  );
};

export default Counter;

// //This useEffect works when the app starts
// useEffect(() => {
//   console.log("Renders when app starts");
// }, []);
// //this works when app first starts and then when some specific thing passed in the dependency array changes
// useEffect(() => {
//   console.log("runs when some thing changes", count);
// }, [count]);

// //this works when anything in that component changes
// useEffect(() => {
//   console.log("runs when some thing changes", count);
// });
