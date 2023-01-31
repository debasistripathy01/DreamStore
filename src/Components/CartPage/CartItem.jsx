import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Deletdata, getdata, PluseCartdata } from "../../Redux/cart/actionCart";

const CartItem = ({ title, price, image, id ,deletecart}) => {
  let dispatch = useDispatch();
const [qty,setQty] = useState(1)
  // let handelMin = (id) => {};
  let fixqty = localStorage.setItem("qty", qty)

  // let handelPlus = (id, qty, opr) => {
  //   dispatch(PluseCartdata(id, qty, opr)).then((res) => {
  //     dispatch(getdata());
  //   });
  // };
 let ans =  localStorage.getItem("qty")

  useEffect(()=>{

  },[price,qty])
  

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
            <button
              className="plus_min"
              disabled={qty==1}
              onClick={() => setQty(prev => prev - 1)}
            >
              -
            </button>
            <p> {ans} </p>
            <button
              className="plus_min"
              onClick={() => setQty(prev => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="subTotal"> {price * qty} </div>
        <div className="del" onClick={() => deletecart(id)}>
          <MdDeleteOutline />
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
};

export default React.memo(CartItem);
