import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { productData } from "../data";
const Product = () => {
  const [product, setProduct] = useState([]);

  const [input, setInput] = useState([]);

  const fetchProducts = async () => {
    const items = await axios.get("https://fakestoreapi.com/products");

    setProduct(items.data);
    setInput(items.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const inputHandler = (e) => {
    const val = e.target.value;
    setInput(val);
    const searchedProducts = product.filter((item, index) => {
      if (item.title.toLowerCase().includes(val.toLowerCase())) {
        return true;
      }
    });
    setInput(searchedProducts);
  };

  return (
    <>
      <input placeholder="Enter the value" onChange={inputHandler} />
      <br />

      {input.map((item, index, arr) => {
        return (
          <>
            <ProductCard
              key={item.id}
              title={item.title}
              img={item.image}
              cat={item.category}
              price={item.price}
              des={item.description}
              rate={item.rating.rate}
              count={item.rating.count}
            />
          </>
        );
      })}
    </>
  );
};

export default Product;
