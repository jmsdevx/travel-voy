import axios from 'axios';
import { push } from 'connected-react-router';

import {
  GET_TRIPS_SUCCESS,
  ADD_TRIP_CHANGE,
  ADD_TRIP_SUCCESS,
  ADD_TRIP_FORM_RESET,
  ADD_TRIP_FAILED,
  ADD_TRIP_IMG_PREVIEW,
} from './types';

export const getTrips = (id) => {
  return async (dispatch) => {

    axios.get(`/api/trip`)
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_TRIPS_SUCCESS,
          payload: response.data.data
        });
        // dispatch(profileFormReset());
        // dispatch(push('/profile'));
      })
      .catch(err => console.log(err));
    // toast(response.message, { type: 'success' });


  }
}

export const addTripChange = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TRIP_CHANGE,
      payload: data
    })
  }
}

export const addTripImgPreview = (url) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TRIP_IMG_PREVIEW,
      payload: url
    });
  }
}

export const addNewTrip = () => {
  return async (dispatch, getState) => {

    const data = getState().trips.addTripFormData;

    console.log(data);

    const {
      location,
      picture,
      dateStart,
      dateEnd,
    } = data;

    if (!location) {
      return dispatch({
        type: ADD_TRIP_FAILED,
        payload: "Location is required"
      });
    }

    if (!dateStart || !dateEnd) {
      return dispatch({
        type: ADD_TRIP_FAILED,
        payload: "Must select valid date range"
      });
    }

    const formData = new FormData();
    formData.append('location', location);

    if (picture)
      formData.append('picture', picture, picture.name);

    formData.append('dateStart', dateStart);
    formData.append('dateEnd', dateEnd);

    axios.post('/api/trip', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response);

        dispatch({
          type: ADD_TRIP_SUCCESS,
          payload: response.data.data
        });
        dispatch(addTripFormReset());
        // dispatch(push('/profile'));
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ADD_TRIP_FAILED,
          payload: err.message
        });
        // toast(response.message, { type: 'success' });
      })
  }
}

export const addTripFormReset = () => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TRIP_FORM_RESET
    })
  }
}

// export const updateProfilePicture = (file) => {
//   return async (dispatch, getState) => {

//     const userId = getState().profile.data.id;

//     const formData = new FormData();
//     formData.append('file', file, file.name);
//     formData.append('id', userId);

//     const response = await axios.put('/api/profile/profile-picture', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       }
//     });

//     console.log('success', response);

//     dispatch({
//       type: PROFILE_PICTURE_UPDATED,
//       payload: response.data.data
//     });

//   }
// }
