import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export const CartItem = ({ title, qty, price, image }) => {
    
  let handelDelet = () => {
    alert("chala");
  };

  return (
    <>
      <div className="item2">
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="img">
            <img src={image} alt="errer" width={"70px"} height={"70px"} />
          </div>
          <div className="title">
            <p>{title}</p>
            <p style={{ color: "green" }}>In Stock </p>
          </div>
        </div>
        <div className="price">{price} ₹</div>
        <div>
          <div className="qty">
            <button className="plus_min">-</button>
            <p> {qty} </p>
            <button className="plus_min">+</button>
          </div>
        </div>

        <div className="subTotal"> {price * qty} </div>
        <div className="del" onClick={handelDelet}>
          <MdDeleteOutline />
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
};
