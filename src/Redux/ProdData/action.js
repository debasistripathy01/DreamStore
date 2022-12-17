import axios from 'axios';
import * as types from './actionTypes';

const getDataRequest = () => {
    return {
        type : types.GET_DATA_REQUEST,
    }
}

const getDataSuccess = (payload) => {
    return {
        type : types.GET_DATA_SUCCESS, 
        payload,
    }
}

const getDataFailed = () => {
    return {
        type : types.GET_DATA_FAILED,
    }
}

const getData = (params) => (dispatch) => {
    dispatch(getDataRequest())

    return axios.get('https://frightened-boot-dove.cyclic.app/men', params)

    .then((r) => {
        dispatch(getDataSuccess(r.data))
    })

    .catch((e) => {
        dispatch(getDataFailed(e))
    })

};

export {getData};


// https://frightened-boot-dove.cyclic.app/products