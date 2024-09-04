import React from "react";
import { useState } from "react";
import Counter from "../components/Counter";
import Product from "./Product";
const Home = () => {
  const item = ["jeans", "jackets", "caps"];
  const [items, setItems] = useState(item);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    setItems([...item, input]);
  };

  return (
    <>
      {/* <Product/> */}
      <input
        value={input}
        onChange={inputHandler}
        placeholder="Enter the product name"
      />
      <button onClick={clickHandler}>Add</button>
      {items.map((item, index, arr) => {
        return (
          <Counter
            key={index}
            itemName={item}
            Items={items}
            SetItems={setItems}
            index={index}
            // delete={() => {
            //   const updateItem = {
            //     ...items.slice(0, index),
            //     ...items.slice(index + 1),
            //   };
            //   setItems(updateItem);
            // }}
          />
        );
      })}
      {/* <Counter itemName="Shoes"></Counter> */}
    </>
  );
};

export default Home;
