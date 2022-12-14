import React, { useEffect } from "react";
import { getdata } from "../../Redux/cart/actionCart";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

export const Cart = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.CartReducer.cartData);

  if (data.length > 0) {
    console.log("🚩", data);
  }
  useEffect(() => {
    dispatch(getdata());
  }, []);

  return (
    <div>
      <h1 className="cart1">Your Cart</h1>
    </div>
  );
};
