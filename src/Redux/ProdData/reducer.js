import * as types from './actionTypes';

const initialState = {
    products : [],
    isLoading: false,
    isError: false,
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.GET_DATA_REQUEST:
            return {...state, isLoading:true};
        
        case types.GET_DATA_SUCCESS:
            return {...state, isLoading:false, products:payload};

        case types.GET_DATA_FAILED:
            return {...state, isLoading:false, isError:true};

        default:
            return state;
    }

}

export {reducer}