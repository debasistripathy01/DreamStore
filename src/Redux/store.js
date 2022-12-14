

import { applyMiddleware , combineReducers, compose, legacy_createStore} from "redux";


import thunk from "redux-thunk";
import { CartReducer } from "./cart/ReducerCart";
import { reducer as productReducer } from "./ProdData/reducer";

const rootReducer = combineReducers({ productReducer, CartReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
 
