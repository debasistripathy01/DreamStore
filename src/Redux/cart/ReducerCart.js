import {
    GET_CART_DATA_ERROR,
    GET_CART_DATA_REQUEST,
    GET_CART_DATA_SUCCESS,
  } from "./actionTypeCart";
  
  
  let initialCart = {
    isLoading: false,
    cartData: [],
    isError: false,
  };
  
  export const CartReducer = (state = initialCart, { type, payload }) => {
    switch (type) {
      case GET_CART_DATA_REQUEST: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case GET_CART_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          cartData: payload,
        };
      }
      case GET_CART_DATA_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  

//   just a