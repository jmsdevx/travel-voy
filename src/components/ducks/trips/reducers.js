import {
  GET_TRIPS_SUCCESS,
  ADD_TRIP_CHANGE,
  ADD_TRIP_SUCCESS,
  ADD_TRIP_FORM_RESET,
  ADD_TRIP_FAILED,
  ADD_TRIP_PENDING,
  ADD_TRIP_IMG_PREVIEW,
} from './types';

const initialState = {
  addTripFormData: {
    location: '',
    picture: '',
    dateStart: '',
    dateEnd: '',
    errorMsg: '',
    picturePreviewUrl: ''
  },
  data: {
    pastTrips: [],
    upcomingTrips: []
  },
  addTripPending: false,
};

const isDatePast = (date) => {
  return new Date(date).getTime() < Date.now()
}

const tripsReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_TRIPS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        addTripFormData: {
          ...state.addTripFormData, ...action.payload
        }
      };

    case ADD_TRIP_CHANGE:
      return {
        ...state,
        addTripFormData: {
          ...state.addTripFormData,
          ...action.payload
        }
      };

    case ADD_TRIP_IMG_PREVIEW:
      return {
        ...state,
        addTripFormData: {
          ...state.addTripFormData,
          picturePreviewUrl: action.payload
        }
      };

    case ADD_TRIP_PENDING:
      return {
        ...state,
        addTripPending: true
      }

    case ADD_TRIP_SUCCESS:
      const newState = {
        ...state,
        data: {
          ...state.data
        },
        addTripFormData: {
          ...state.addTripFormData,
          errorMsg: ""
        },
        addTripPending: false
      };

      if (isDatePast(action.payload.dateStart)) {
        newState.data.pastTrips = [
          ...newState.data.pastTrips,
          action.payload
        ]
      } else {
        newState.data.upcomingTrips = [
          ...newState.data.upcomingTrips,
          action.payload
        ]
      }

      return newState;

    case ADD_TRIP_FAILED:
      return {
        ...state,
        addTripFormData: {
          ...state.addTripFormData,
          errorMsg: action.payload
        },
        addTripPending: false
      };

    case ADD_TRIP_FORM_RESET:
      return {
        ...state,
        addTripFormData: {
          ...initialState.addTripFormData
        }
      };

    // case PROFILE_PICTURE_UPDATED:
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       profilePicture: action.payload
    //     }
    //   };

    default:
      return state;
  }
}

export default tripsReducer;