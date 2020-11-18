import axios from 'axios';
import { push } from 'connected-react-router';

import {
  PROFILE_CHANGE,
  PROFILE_UPDATED,
  PROFILE_FORM_RESET,
  GET_PROFILE_SUCCESS,
} from './types';

export const getProfile = (id) => {
  return async (dispatch) => {

    axios.get(`/api/profile/${id}`)
      .then(response => {
        console.log(response);

        dispatch({
          type: PROFILE_UPDATED,
          payload: response.data
        });
        dispatch(profileFormReset());
        // dispatch(push('/profile'));
      })
      .catch(err => console.log(err));
    // toast(response.message, { type: 'success' });

    dispatch({
      type: GET_PROFILE_SUCCESS
    });
  }
}

export const profileChange = (data) => {
  return async (dispatch) => {
    dispatch({
      type: PROFILE_CHANGE,
      payload: data
    })
  }
}

export const profileUpdate = () => {
  return async (dispatch, getState) => {

    const data = getState().profile.profileFormData;
    console.log(data);

    const {
      firstName,
      lastName,
      email,
      homeCity,
      travelerType
    } = data;

    axios.put('/api/profile', { firstName, lastName, email, homeCity, travelerType })
      .then(response => {
        console.log(response);

        dispatch({
          type: PROFILE_UPDATED,
          payload: response.data
        });
        dispatch(profileFormReset());
        // dispatch(push('/profile'));
      })
      .catch(err => console.log(err));
    // toast(response.message, { type: 'success' });
  }
}

export const profileFormReset = () => {
  return async (dispatch) => {
    dispatch({
      type: PROFILE_FORM_RESET
    })
  }
}
