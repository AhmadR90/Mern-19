import React from "react";

const ProductCard = (props) => {
  return (
    <div className="flex-row p-4 bg-green-400 border-red-800 border-4 w-[600px] h-[400px] ">
      <img src={props.img} alt="" className="h-40 w-40" />
      <h1 className="font-bold">{props.title}</h1>
      <h3>{props.cat}</h3>
      <h2>{props.price}</h2>
      <p className="text-wrap">{props.des}</p>
      <p>{props.rate}</p> 
      <p>{props.count}</p>
      {/* <button className="bg-"
        onClick={() => {
          const updatedProduct = [
            // ...props.product.slice(0, props.id),
            ...props.product.pop(props.id)
            // ...props.product.slice(0,props.id + 1),
          ];
         props.setsProduct(updatedProduct);
        }}
      >
        Delete
      </button> */}
    </div>
  );
};

export default ProductCard;
