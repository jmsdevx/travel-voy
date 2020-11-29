import {
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  SIGN_UP_PENDING,
} from './types';

const initialState = {
  isSignupPending: false,
  signupErrorMsg: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_UP_PENDING:
      return {
        ...state,
        isSignupPending: true
      }

    case SIGN_UP_REJECTED:
      return {
        ...state,
        isSignupPending: false,
        signupErrorMsg: action.payload
      }

    case SIGN_UP_FULFILLED:
      return {
        ...state,
        isSignupPending: false,
        signupErrorMsg: ''
      };

    default:
      return state;
  }
}

export default authReducer;