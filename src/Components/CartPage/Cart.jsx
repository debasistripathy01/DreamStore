import React, { useEffect, useRef, useState } from "react";
import { getdata } from "../../Redux/cart/actionCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./cart.css";
import { Navbar } from "../NavBar/Navbar";
import { Footer } from "../Footer/Footer";

export const Cart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let data = useSelector((store) => store.reducerCart.CartData);
  // let isLoading = useSelector((store) => store.CartReducer.isLoading);

  useEffect(()=>{
    console.log(data)
    dispatch(getdata())
  },[data])

const backtoHome = ()=>{
  navigate("/")
}
const checkout = ()=>{
  navigate("/checkout")
}
  return (
    <>
      <Navbar />
      <div className="cartMain">
        {/*🙋‍♂️ if cart is Empty 👇 */}

        {data.length === 0 && (
          <div className="emptyCart">
            <h1>There are currently no items in your cart.</h1>
            <button className="continueShopping" onClick={backtoHome}>
              CONTINUE SHOPPING
            </button>
          </div>
        )}

        {data.length > 0 && (
          <div>
            <h1 className="cart1">Your Cart</h1>
            <hr className="line"></hr>

            {/* 🙋‍♂️ Item ,Price ,Qty ,Title 👇*/}

            <div>
              {data.length > 0 && (
                <div className="main2">
                  {/* <GetCart/>  */}
                <div className="item">
                    <div
                      style={{
                        textAlign: "start",
                        fontWeight: 700,
                        fontSize: "17px",
                      }}
                    >
                      Item
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: "17px",
                      }}
                    >
                      Price
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: "17px",
                      }}
                    >
                      Quantity
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: "17px",
                      }}
                    >
                      Subtotal
                    </div> 
                   </div>

                  <hr className="line"></hr>
                  {data.map((ele) => {
                    return <CartItem key={ele.id} {...ele} />;
                  })}
                </div>
              )}
            </div>

            {/*🙋‍♂️ Cart  SubTotoal 👇 */}

            {data.length > 0 && (
              <div
                style={{
                  marginTop: "30px",
                  width: "700px",
                  height: "70px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <hr className="line"></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    fontSize: "22px",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div style={{ fontWeight: 900, width: "80%" }}>
                    Cart Subtotal:
                  </div>
                  <div style={{ fontWeight: 900 }}>
                     ₹
                  </div>
                </div>
                <hr className="line"></hr>
              </div>
            )}

            {/*🙋 Apply Coupon Code 👇 */}
            
          </div>
        )}

        
      </div>
      <div className="emptyCart">
        {
          data.length > 0  && <button className="continueShopping" onClick={checkout}>
          Checkout
        </button>
        }
        
        
      </div>
      <Footer />
    </>
  );
};
