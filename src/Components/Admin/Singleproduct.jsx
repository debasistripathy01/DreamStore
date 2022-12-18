import React from "react";
import "./SingleProduct.css";
import {FaStar} from "react-icons/fa"
import {AiFillDelete,AiOutlineExport} from "react-icons/ai"
import {BsStarFill} from "react-icons/bs"
import { Link,useNavigate } from "react-router-dom";
export const Singleproduct = ({item,onDelet} ) => {
  const ra=Math.floor(item.rating.rate)
  const navigate=useNavigate()
   
  return (
    <div className="proddiva">
        <div className="imagena"> <img src={item.image} alt="gfdg" className="image"/></div>
        <div className="descprn"> 
        <h1>{item.title}</h1>
        <h2>{"Rs" +item.price+""}</h2>
        <h5> { [...Array(ra)].map((elementInArray, index) => ( 
    <BsStarFill key={index}/>
))}</h5>
        <div>
          {/* <div onClick={()=>navigate(`edit/${item.id}`)}>edit <AiOutlineExport/></div> */}
        
        <div onClick={onDelet}>Delete <AiFillDelete/></div>
        </div>
       
        </div>
    </div>
  );
};
