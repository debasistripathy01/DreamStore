// actionCart
import {
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM__ERROR,
  GET_CART_DATA_ERROR,
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  PLUS_CART_ITEM_REQUEST,
  PLUS_CART_ITEM_SUCCESS,
  PLUS_CART_ITEM__ERROR,
  SETSUBTOTAL,
} from "./actionTypeCart";
import axios from "axios";

export const getCartDataRequest = () => {
  return {
    type: GET_CART_DATA_REQUEST,
  };
};

export const getCartDataSuccess = (payload) => {
  return {
    type: GET_CART_DATA_SUCCESS,
    payload: payload,
  };
};

export const getCartDataError = () => {
  return {
    type: GET_CART_DATA_ERROR,
  };
};

//! GET-CART-DATA 👇🚩

export const getdata = () => (dispatch) => {
  dispatch(getCartDataRequest());
  return axios
    .get("https://server-dermstore.onrender.com/skincare")
    .then((res) => {
      dispatch(getCartDataSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getCartDataError());
    });
};

//! DELETE-CART-ITEM 👇🚩

export const Deletdata = (id) => (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM_REQUEST });
  return axios
    .delete(`https://server-dermstore.onrender.com/skincare/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_CART_ITEM_SUCCESS });
    })
    .catch((e) => {
      dispatch({ type: DELETE_CART_ITEM__ERROR });
    });
};

//! Pluse-CART-ITEM 👇🚩

export const PluseCartdata = (id, qty, opr) => (dispatch) => {
  dispatch({ type: PLUS_CART_ITEM_REQUEST });
  return axios
    .patch(`https://server-dermstore.onrender.com/skincare/${id}`, {
      qty: opr == "+" ? qty + 1 : qty - 1,
    })
    .then((res) => {
      dispatch({ type: PLUS_CART_ITEM_SUCCESS });
    })
    .catch((e) => {
      dispatch({ type: PLUS_CART_ITEM__ERROR });
    });
};

