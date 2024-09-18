import React from 'react'
import { useNavigate } from 'react-router-dom'
const OrderSummary = () => {
    const navigate=useNavigate()
  return (
    <div>
      Order Confirmed!
      <button className="bg-black text-white rounded-lg" onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  )
}

export default OrderSummary
