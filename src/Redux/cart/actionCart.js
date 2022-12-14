// actionCart 
import {
    GET_CART_DATA_ERROR,
    GET_CART_DATA_REQUEST,
    GET_CART_DATA_SUCCESS,
  } from "./actionTypeCart";
  import axios from "axios";
  
  export const getCartDataRequest = (payload) => {
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
  
  export const getCartDataError = (payload) => {
    return {
      type: GET_CART_DATA_ERROR,
    };
  };
  
  //! GET-CART-DATA 👇🚩
  
  export const getdata = () => (dispatch) => {
    dispatch(getCartDataRequest());
    return axios
      .get("https://frightened-boot-dove.cyclic.app/SkinMedica")
      .then((res) => {
        dispatch(getCartDataSuccess(res.data));
      })
      .catch((e) => {
        dispatch(getCartDataError());
      });
  };

  
