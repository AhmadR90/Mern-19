import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinkClick=({isActive})=>{
    return{
      fontWeight:isActive ?"bold":"normal",
      textDecoration:isActive? "none":"underline"
    }
  }
  return (
    <nav className="flex space-x-36 bg-gray-700 text-yellow-300"> 
      <NavLink style={navLinkClick} to="/home">Home</NavLink>
      <NavLink style={navLinkClick} to="/about">About</NavLink>
      <NavLink style={navLinkClick} to="/products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
