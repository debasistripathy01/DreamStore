import * as types from "./actionTypes"
import axios from "axios"
const login = (payload) => (dispatch)=>{
    dispatch({type : types.USER_LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",payload)
    .then((r)=>{
        console.log(r.data)
        dispatch({type : types.USER_LOGIN_SUCCESS,payload : r.data.token})
    })
    .catch((e)=>{
        dispatch({type : types.USER_LOGIN_FALIURE})
    })
}

const signup = (payload) => (dispatch)=>{
    // dispatch({type : types.USER_SIGNUP_REQUEST})
    console.log(payload)
    return axios.post("http://localhost:8085/users/signup",payload)
    .then((r)=>{
        console.log(r,"hfgvhg")
        dispatch({type : types.USER_SIGNUP_SUCCESS})
    })
    .catch((e)=>{
        dispatch({type : types.USER_SIGNUP_FALIURE})
    })
}
export {login,signup}