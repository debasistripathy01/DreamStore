import React from "react";
import "./Singleproducts.css";
import {BsStarFill} from "react-icons/bs"


export const Singleproducts = ({item}) => {
  const ra=Math.floor(item.rating.rate)
  return (
    <div className="singleprodbody">
      <img
        src={item.image}
        alt={item.title}
      />
      <h1 className="titlep">{item.title}</h1>
      <div className="ratinstar">

      { [...Array(ra)].map((elementInArray, index) => ( 
    <BsStarFill key={index}/>
))}
      </div>
     
      <h1>Rs:{item.price}₹</h1>
      <div className="addtocartbtn">ADD TO CART</div>
    </div>
  );
};
