// / import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { Reducer } from "./Reducer";

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// );

// const store = legacy_createStore(Reducer, enhancer);
// export  {store};