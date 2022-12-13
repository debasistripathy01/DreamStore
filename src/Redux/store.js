import { cartProdCount, getCartProd } from "./actionType";

export const fetchCartData = (data) => {
   return {
    type: getCartProd,
    payload: data,
  };
};

export const cartProductCount = (data) => {
   return {
    type: cartProdCount,
    payload: data,
  };
};
