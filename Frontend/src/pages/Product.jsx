import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"
const Product = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    const items = await axios.get("https://fakestoreapi.com/products");
    console.log(items.data);
    setProduct(items.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {product.map((item, index, arr) => {
        return <>
        <ProductCard title={item.title} img={item.image} cat={item.category} price={item.price} des={item.description} rate={item.rating.rate} count={item.rating.count}/>
          {/* <h1>{item.title}</h1>
          <img src={item.image} alt="" />
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.rating.rate}</p> */}
        
        </>;
      })}
    </>
  );
};

export default Product;
