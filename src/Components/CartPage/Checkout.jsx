import React, { useState } from "react";
import "./Checkout.css";
import img from "./Capture.PNG";
import { useNavigate } from "react-router-dom";
export const Checkout = () => {
  let navigate = useNavigate();
  let order = () => {
    navigate("/");
    alert("Order Placed Success ");
  };
  return (
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
      <button className="submitBtn" onClick={order}>
        SUBMIT MY ORDER
      </button>
    </div>
  );
};
