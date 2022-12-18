
import { FetchBlogData, FetchSkinMedicaData } from "./actionType";
import { FetchBestSellersData } from "./actionType";
import { FetchNeocutisData } from "./actionType";
import { FetchTrendingData } from "./actionType";
import { FetchNewarraivals } from "./actionType";
import { GET_PRODUCTS_DATA_REQUEST,GET_PRODUCTS_DATA_SUCCESS,GET_PRODUCTS_DATA_FAILURE } from "./actionType";
import { GET_SINGLE_PRODUCTS_DATA_REQUEST,GET_SINGLE_PRODUCTS_DATA_SUCCESS,GET_SINGLE_PRODUCTS_DATA_FAILURE } from "./actionType";


const initState = {
  productsofskinMedica: [],
  productsofbestsellers: [],
  productsofneocutis: [],
  productsoftrending: [],
  productsofarrival: [],
  productsofblog: [],
  products: [],
    isLoading: false,
    currentProduct:{},
    isError: false,
    cart:[],
};







export const ReducerCarousel = (state = initState, {type,payload}) => {
    switch (type) {
      case FetchSkinMedicaData:
        return {
          ...state,
          productsofskinMedica:payload,
        };
      case FetchBestSellersData:
        return {
          ...state,
          productsofbestsellers:payload,
        };
      case FetchNeocutisData:
        return {
          ...state,
          productsofneocutis:payload,
        };
      case FetchTrendingData:
        return {
          ...state,
          productsoftrending:payload,
        };
      case FetchNewarraivals:
        return {
          ...state,
          productsofarrival:payload,
        };
      case FetchBlogData:
        return {
          ...state,
          productsofblog:payload,
        };
  
        case GET_PRODUCTS_DATA_REQUEST:
          return {
              ...state,
              isLoading: true,
              isError: false
          }
          case GET_PRODUCTS_DATA_SUCCESS:
          return {
              ...state,
              isLoading: false,
              products: payload,
              isError: false
          }
          case GET_PRODUCTS_DATA_FAILURE:
          return {
              ...state,
              isLoading: false,
              isError: true
          }
  
          case GET_SINGLE_PRODUCTS_DATA_REQUEST:
          return {
              ...state,
              isLoading: true,
              isError: false
          }
          case GET_SINGLE_PRODUCTS_DATA_SUCCESS:
          return {
              ...state,
              isLoading: false,
              currentProduct: payload,
              isError: false
          }
          case GET_SINGLE_PRODUCTS_DATA_FAILURE:
          return {
              ...state,
              isLoading: false,
              isError: true
          }
  
          
  
      default:
        return state;
    }
  };
  