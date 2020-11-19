import {
  PROFILE_CHANGE,
  PROFILE_UPDATED,
  PROFILE_FORM_RESET,
  GET_PROFILE_SUCCESS,
  PROFILE_PICTURE_UPDATED

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
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    homeCity: '',
    travelerType: '',
    profilePicture: '',
    backgroundPicture: ''
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        profileFormData: {
          ...state.profileFormData, ...action.payload
        }
      };

    case PROFILE_CHANGE:
      return {
        ...state,
        profileFormData: {
          ...state.profileFormData, ...action.payload
        }
      };

    case PROFILE_UPDATED:
      return {
        ...state,
        data: action.payload,
        profileFormData: {
          ...state.profileFormData, ...action.payload
        }
      };

    case PROFILE_FORM_RESET:
      return {
        ...state,
        loginFormData: {
          ...initialState.loginFormData
        }
      };

    case PROFILE_PICTURE_UPDATED:
      return {
        ...state,
        data: {
          ...state.data, profilePicture: action.payload
        }
      };

    default:
      return state;
  }
}

export default profileReducer;