import { GET_PRODUCTS_DATA_REQUEST,GET_PRODUCTS_DATA_SUCCESS,GET_PRODUCTS_DATA_FAILURE } from "./actionType";
import { GET_SINGLE_PRODUCTS_DATA_REQUEST,GET_SINGLE_PRODUCTS_DATA_SUCCESS,GET_SINGLE_PRODUCTS_DATA_FAILURE } from "./actionType";
import { ADD_CART_DATA_REQUEST,ADD_CART_DATA_SUCCESS,ADD_CART_DATA_FAILURE,FETCH_CART_SUCCESS } from "./actionType";
import { DELETE_CART_DATA_REUEST,DELETE_CART_DATA_SUCCESS,DELETE_CART_DATA_FAILURE} from "./actionType";
import { FetchSkinMedicaData,FetchBestSellersData,FetchNeocutisData,FetchTrendingData,FetchBlogData,FetchNewarraivals} from "./actionType";
import axios from 'axios';

export const getskinmedicadata = (payload) => ({
  type: FetchSkinMedicaData,
  payload,
});




export const getbestsellersdata = (payload) => ({
  type: FetchBestSellersData,
  payload,
});

export const getProductsData = () => (dispatch) => {
  return axios.get("https://server-dermstore.onrender.com/total").then((res) => console.log("This is Response"+res))
    // .then((res) => dispatch(getskinmedicadata(res.data.SkinMedica)))
    // .then((res) => dispatch(getskinmedicadata(res)));

}





export const getBestProductsData = () => (dispatch) => {
  return axios.get("https://server-dermstore.onrender.com/total")
  .then((res) => dispatch(getskinmedicadata(res.data.bestsellers)))
    // .then((res) => dispatch(getbestsellersdata(res)));
};


export const postProductsData = (payload) => (dispatch) => {
  axios
    .post("https://server-dermstore.onrender.com/total", payload)
    .then((response)=>{
      // handle success
    //   console.log(response.data);
      dispatch({ type: "CART_PRODUCTS", payload: payload });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};


//------------------------->>>>>>>>>>>>>>>>>>>>>>>----------------------------------------------------------------

export const getProducts = (selected,page) => dispatch =>{

  dispatch({type: GET_PRODUCTS_DATA_REQUEST})
  return axios({
  method: 'get',
  url:"https://server-dermstore.onrender.com/total",
  
  params:{
    _page:page,
    _limit:10,
    _sort:"price",
    _order:selected,
}
})
  .then((r)=>{
      dispatch({type:GET_PRODUCTS_DATA_SUCCESS,payload:r.data});
      return GET_PRODUCTS_DATA_SUCCESS
  })
  .catch((err) =>dispatch({type:GET_PRODUCTS_DATA_FAILURE,payload:err}))
}

