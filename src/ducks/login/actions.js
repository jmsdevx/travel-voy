import axios from 'axios';
import { push } from 'connected-react-router';

import {
  LOGIN_FULFILLED,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_CHANGE,
  LOGIN_FORM_RESET,
} from './types';

import { setAuth } from '../../ducks/auth/actions';

export const loginChange = (data) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_CHANGE,
      payload: data
    })
  }
}

export const loginUser = () => {
  return async (dispatch, getState) => {

    const data = getState().login.loginFormData;
    console.log(data);

    dispatch({
      type: LOGIN_PENDING
    });

    // api request
    axios.post('/api/auth/login', { email: data.email, password: data.password })
      .then(response => {
        console.log('success')
        console.log(response.data);

        dispatch({
          type: LOGIN_FULFILLED,
        });
        dispatch(setAuth(response.data.data));
        dispatch(loginReset());
        dispatch(push('/profile'));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: LOGIN_REJECTED,
          payload: err.response.data.message || "Login Failed"
        });
      });
  }
}

export const loginReset = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_FORM_RESET
    })
  }
}
