import {AUTH_SUCCESS} from "../constants/actionTypes";

const authReducer = (initialState = {}, action) => {
    switch(action.type){
        case AUTH_SUCCESS:
            return {
                ...initialState,
                ...action.payload
            };
        default: return initialState;
    }
};

export default authReducer

