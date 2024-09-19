import { useState } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { buyCake, refundCake } from "./redux/cake/cakeAction";

function App() {
 
  const dispatch = useDispatch();
  const abc = useSelector((x) => {
    return x;
  });

  return (
    <>
      <h1>No of Cakes:{abc.vanillaCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
      <button
        onClick={() => {
          dispatch(refundCake());
        }}
      >
        Refund Cake
      </button>

    </>
  );
}

export default App;
