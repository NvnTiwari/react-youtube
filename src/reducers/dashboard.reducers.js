import {GET_VIDEOS_SUCCESS} from "../constants/actionTypes";

const dashboardReducer = (initialState = [], action) => {
    switch(action.type){
        case GET_VIDEOS_SUCCESS:
            return [
                ...initialState,
                ...action.payload
            ];
        default: return initialState;
    }
};

export default dashboardReducer

