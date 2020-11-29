import {
  LOGIN_CHANGE,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
  LOGIN_FORM_RESET,
} from './types';

const initialState = {
  loginFormData: {
    email: '',
    password: '',
    errorMsg: ''
  },
  isLoginPending: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_CHANGE:
      return {
        ...state,
        loginFormData: { ...state.loginFormData, ...action.payload }
      };

    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: true
      };

    case LOGIN_FORM_RESET:
      return {
        ...state,
        loginFormData: { ...initialState.loginFormData }
      };

    case LOGIN_REJECTED:
      return {
        ...state,
        loginFormData: {
          ...state.loginFormData,
          errorMsg: action.payload
        },
        isLoginPending: false
      }

    case LOGIN_FULFILLED:
      return {
        ...state,
        isLoginPending: false
      };

    default:
      return state;
  }
}

export default authReducer;