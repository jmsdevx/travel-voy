import {
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  SET_AUTH,
  RESET_AUTH,
  LOGIN_FULFILLED,
  LOGIN_CHANGE,
  LOGIN_FORM_RESET,
  LOGOUT
} from './types';

const initialState = {
  isAuth: false,
  user: null,
  loginFormData: {
    email: '',
    password: ''
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_UP_FULFILLED:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case LOGIN_CHANGE:
      return {
        ...state,
        loginFormData: { ...state.loginFormData, ...action.payload }
      };

    case LOGIN_FORM_RESET:
      return {
        ...state,
        loginFormData: { ...initialState.loginFormData }
      };

    case LOGIN_FULFILLED:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;