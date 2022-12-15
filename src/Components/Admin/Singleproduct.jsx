import React from "react";
import "./SingleProduct.css";
import {FaStar} from "react-icons/fa"


export const Singleproduct = ({item} ) => {
    console.log(item)
  return (
    <div className="proddiva">
        <div className="imagena"> <img src={item.image} alt="gfdg" className="image"/></div>
        <div className="descprn"> 
        <h1>{item.title}</h1>
        <h2>{"Rs" +item.price+""}</h2>
        <p>Ratings: {item.rating.rate}</p>
        <div>
        <div>edit</div>
        <div>delet</div>
        </div>
       
        </div>
    </div>
  );
};
