import axios from 'axios';
import { push } from 'connected-react-router';

import {
  GET_AUTH_SUCCESS,
  SET_AUTH,
  LOGOUT,
} from './types';

export const getAuth = () => {
  return async (dispatch) => {

    try {
      axios.get('/api/auth/session')
        .then(response => {
          console.log(response);
          dispatch({
            type: GET_AUTH_SUCCESS,
            payload: response.data.data
          });
        })
        .catch(err => {
          throw err;
        });

    } catch (err) {
      console.log(err);
    }

    // handleError({}, 'Not found error');
  }
}

export const setAuth = (data) => {
  return async (dispatch) => {

    dispatch({
      type: SET_AUTH,
      payload: data
    });
  }
}

export const logout = () => {
  return async (dispatch) => {

    axios.post('/api/auth/logout')
      .then(response => {
        console.log('success')
        console.log(response);

        dispatch({
          type: LOGOUT
        });
        dispatch(push('/'));
      });
  }
}