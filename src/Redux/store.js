import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";

import thunk from "redux-thunk";
import { CartReducer } from "./cart/ReducerCart";
import { reducer as productReducer } from "./ProdData/reducer";
import { ReducerCarousel } from "./HomeRedux/Reducer"
import { reducerCart } from "../Components/NavBar/Redux/reducer";
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;



const rootReducer = combineReducers({ reducerCart, productReducer});

// console.log(rootReducer)

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export { store }




// import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { ReducerCarousel } from "../Redux/HomeRedux/Reducer";

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// );

// const store = createStore(ReducerCarousel, enhancer);
// export  {store};

