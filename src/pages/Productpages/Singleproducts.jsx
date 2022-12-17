import React from "react";
import "./Singleproducts.css";
import {BsStarFill} from "react-icons/bs"
import axios from "axios";

export const Singleproducts = ({item}) => {
  const ra=Math.floor(item.rating.rate)

const addtocart=()=>{
 return axios 
.post(`https://frightened-boot-dove.cyclic.app/cartproduct`,item).then((r)=>{
  alert("Product added to cart")
}).then((e)=>{
    console.log(e)
})




}



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
      <div className="addtocartbtn" onClick={()=>addtocart()}>ADD TO CART</div>
    </div>
  );
};
