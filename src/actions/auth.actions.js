import * as types from '../constants/actionTypes';

export function authenticateUser(user) {
  return function (dispatch) {
    return dispatch({
      type: types.AUTH_SUCCESS,
      payload: user
    });
  };
};
