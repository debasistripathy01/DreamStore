import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Deletdata, getdata, PluseCartdata } from "../../Redux/cart/actionCart";

export const CartItem = ({ title, qty, price, image, id }) => {
  let dispatch = useDispatch();

  let handelMin = (id) => {};

  let handelPlus = (id, qty, opr) => {
    dispatch(PluseCartdata(id, qty, opr)).then((res) => {
      dispatch(getdata());
    });
  };
  let handelDelet = (id) => {
    dispatch(Deletdata(id)).then((res) => {
      dispatch(getdata());
    });
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
            <button
              className="plus_min"
              onClick={() => handelPlus(id, Number(qty), "-")}
            >
              -
            </button>
            <p> {qty} </p>
            <button
              className="plus_min"
              onClick={() => handelPlus(id, Number(qty), "+")}
            >
              +
            </button>
          </div>
        </div>

        <div className="subTotal"> {price * qty} </div>
        <div className="del" onClick={() => handelDelet(id)}>
          <MdDeleteOutline />
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
};
