import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
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
      <input value={input}onChange={inputHandler} placeholder="Enter the product name" />
      <button onClick={clickHandler}>Add</button>
      {items.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
    </>
  );
};
export default App;
