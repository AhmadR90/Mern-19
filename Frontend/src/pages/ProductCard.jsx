import React from 'react'

const ProductCard = (props) => {
  return (
    <div className="flex flex-wrap bg-stone-600">
     
        <h1>{props.title}</h1>
        <img src={props.img} alt="" />
        <h3>{props.cat}</h3>
        <h2>{props.price}</h2>
        <p>{props.des}</p>
        <p>{props.rate}</p>
        <p>{props.count}</p>
    
    </div>
  )
}

export default ProductCard
