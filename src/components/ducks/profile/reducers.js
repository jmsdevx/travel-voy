import {
  PROFILE_CHANGE,
  PROFILE_UPDATED,
  PROFILE_FORM_RESET
} from './types';

const initialState = {
  profileFormData: {
    firstName: '',
    lastName: '',
    email: '',
    homeCity: '',
    travelerType: ''
  },
  data: {
    firstName: '',
    lastName: '',
    email: '',
    homeCity: '',
    travelerType: ''
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_CHANGE:
      return {
        ...state,
        profileFormData: { ...state.profileFormData, ...action.payload }
      };

    case PROFILE_UPDATED:
      return {
        ...state,
        data: action.payload,
      };

    case PROFILE_FORM_RESET:
      return {
        ...state,
        loginFormData: { ...initialState.loginFormData }
      };

    default:
      return state;
  }
}

export default profileReducer;