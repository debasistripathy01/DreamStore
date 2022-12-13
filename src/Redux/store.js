
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./cart/ReducerCart";

export const store = createStore(reducer);






