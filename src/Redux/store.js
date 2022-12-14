
import { legacy_createStore } from "redux";
import { reducer } from "./cart/ReducerCart";



export const store = legacy_createStore(reducer);







