import { useState } from "react";

import "./App.css";

import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const selector = useSelector((x) => {
    return x;
  });

  return (
    <>
      <h1>No of Cakes-{selector.totalCakes}</h1>
      <button>Buy Cake</button>
    </>
  );
}

export default App;
