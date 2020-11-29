import {
  GET_AUTH_SUCCESS,
  SET_AUTH,
  LOGOUT,
} from './types';

const initialState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_AUTH_SUCCESS:

      console.log('GET_AUTH_SUCCESS')
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case SET_AUTH:
      return {
        isAuth: true,
        user: action.payload,
      }

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;