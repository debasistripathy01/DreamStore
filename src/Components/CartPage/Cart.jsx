import React, { useEffect } from "react";
import { getdata } from "../../Redux/cart/actionCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { CartItem } from "./CartItem";

export const Cart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let data = useSelector((store) => store.CartReducer.cartData);
  let subtotal = 0;

  data.forEach((ele) => {
    if (ele.qty) {
      subtotal += ele.price * ele.qty;
    }
  });

  let continueShopping = () => {
    navigate("/");
  };
  if (data.length > 0) {
    console.log("🚩", data);
  }
  useEffect(() => {
    dispatch(getdata());
  }, []);

  return (
    <div className="cartMain">
      <h1 className="cart1">Your Cart</h1>
      <hr className="line"></hr>
      <div>
        {data.length > 0 && (
          <div className="main2">
            <div className="item">
              <div style={{ textAlign: "start" }}>Item</div>
              <div style={{ textAlign: "center" }}>Price</div>
              <div style={{ textAlign: "center" }}>Quantity</div>
              <div style={{ textAlign: "center" }}>Subtotal</div>
            </div>

            <hr className="line"></hr>
            {data.map((ele) => {
              return <CartItem key={ele.id} {...ele} />;
            })}
          </div>
        )}
      </div>
      <hr className="line"></hr>
      <div>Cart Subtotal:{subtotal.toFixed(2)} ₹</div>

      {data.length === 0 && (
        <div className="emptyCart">
          <h1>There are currently no items in your cart.</h1>
          <button className="continueShopping" onClick={continueShopping}>
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </div>
  );
};
