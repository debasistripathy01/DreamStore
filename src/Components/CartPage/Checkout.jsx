import React, { useEffect, useState } from "react";
import "./Checkout.css";
import img from "./Capture.PNG";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../NavBar/Navbar";
import { Footer } from "../Footer/Footer";
export const Checkout = () => {
  let navigate = useNavigate();
  let order = () => {
    navigate("/");
    alert("Order Placed Success ");


  };
  const [data, setUserData] = useState([]);
  // let dispatch = useDispatch();
  // let navigate = useNavigate();
  const [qty, setQty] = useState(1)
  // const [total, setTotal ] = useState(0)
  const [dummy, setDummu] = useState(false)
  // let data = useSelector((store) => store.reducerCart.CartData);
  // let isLoading = useSelector((store) => store.CartReducer.isLoading);
  let total = 0
  for (let i = 0; i < data.length; i++) {
    // let newPrice = total +  
    total = total + data[i].price
    // console.log(newPrice, total)
  }

  useEffect(() => {
    setDummu(true)
    axios.get("https://server-dermstore.onrender.com/cart")
      .then((res) => setUserData(res.data))
      .catch((err) => {
        console.log(err)
      })
  }, [data.length, qty])
  return (
    <div>
      <Navbar />
      <div className="mainDiv">

        <div className="checkoutDiv">
          <h1 style={{ fontSize: "20px" }}>Orders</h1>
          {
            data.length > 0 && data.map((ele) => {
              return <div className="items">
                <div>
                  {ele.title}
                </div>
                <div>
                  <img src={ele.image} alt="" />
                  {/* {ele.image} */}
                </div>
                <div>
                  ${ele.price}
                </div>
              </div>
            })
          }
          <div className="total"> Total : ${total}</div>
        </div>
        <div>
          <div className="checkoutmain">
            <h1
              style={{
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Checkout as a guest
            </h1>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: 700,
                marginTop: "20px",
              }}
            >
              1. Email and delivery address
            </h2>
            <label>Email address</label>

            <br />
            <input></input>
            <p>We'll send the purchase receipt to this email.</p>

            <label>Country/Region</label>
            <br />

            <select className="sel">
              <option>India</option>
              <option>Canada</option>
              <option>United States</option>
            </select>

            <label>Full Name</label>

            <br />
            <input></input>

            <label>Address Search</label>

            <br />
            <input></input>

            <label>Contact Number</label>

            <br />
            <input></input>
          </div>
          <div className="payment">
            <h2
              style={{
                fontSize: "17px",
                fontWeight: 700,
                marginTop: "20px",
              }}
            >
              2. Select Payment Method
            </h2>
            <div className="credit">
              <h4 style={{ fontSize: "18px", fontWeight: 700 }}>
                credit/debit Card
              </h4>
              <img src={img} />
              <lable>Card Number</lable>
              <input />
              <lable>Name on card</lable>
              <input />
              <lable>Expiry Date</lable>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <select className="sel">
                  <option>Month</option>

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>

                <select className="sel">
                  <option>Year</option>

                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                </select>
              </div>
              <lable>Security Code (CV2)</lable>
              <br></br>
              <input style={{ width: "40%" }} />
            </div>
          </div>
          <div className="SubmitBtn">

            <button className="submitBtn" onClick={order}>
              SUBMIT MY ORDER
            </button>
          </div>
        </div>

      </div>
      <Footer/>
    </div>

  );
};
