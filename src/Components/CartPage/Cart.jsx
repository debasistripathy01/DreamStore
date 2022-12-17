import React, { useEffect } from "react";
import { getdata } from "../../Redux/cart/actionCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import "./cart.css";
import {Navbar} from "../NavBar/Navbar"
import { Footer } from "../Footer/Footer";

export const Cart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let data = useSelector((store) => store.CartReducer.cartData);
  let isLoading = useSelector((store) => store.CartReducer.isLoading);
  console.log(isLoading);
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

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          height: "100vh",
          background: "black",
          color: "red",
        }}
      >
        Loading .....
      </div>
    );
  }

  return (

    <>
    <Navbar/>
    <div className="cartMain">
      {/*🙋‍♂️ if cart is Empty 👇 */}

      {data.length === 0 && (
        <div className="emptyCart">
          <h1>There are currently no items in your cart.</h1>
          <button className="continueShopping" onClick={continueShopping}>
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
                <div style={{ fontWeight: 900 }}>{subtotal.toFixed(2)} ₹</div>
              </div>
              <hr className="line"></hr>
            </div>
          )}

          {/*🙋 Apply Coupon Code 👇 */}
          <div className="CoupenCodeMain">
            <input
              className="CoupenCodeInput"
              placeholder="Got a coupon code? Enter it here:"
            ></input>
            <button className="CoupenCodeBtn">ADD</button>
          </div>
        </div>
      )}

      {/*🙋 Santa annimation 👇 */}

      <div
        className="gliters"
        style={{
          marginTop: "150px",
          width: "750px",
          height: "450px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <img
            src="https://media.tenor.com/D_gQuXRVQ2wAAAAC/sports-sportsmanias.gif"
            width={"250px"}
            height="250px"
            alt="erroe"
          />
        </div>

        {/* <img src="https://media.tenor.com/YErtpshgj7UAAAAi/santa-dance-santa-floss.gif" width={"100%"} alt="erroe" /> */}

        {/* <img src="https://media.tenor.com/7WSqWwpUnJMAAAAi/santa-sleigh.gif" width={"100%"} alt="erroe" /> */}
        <h1
          style={{
            fontWeight: 800,
            fontSize: "25px",
            backgroundColor: "rgb(212,65,73)",
            color: "white",
          }}
        >
          Apply coupon Santa for 10% Discount
        </h1>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};
