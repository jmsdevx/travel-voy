import axios from 'axios';
import { push } from 'connected-react-router';

import {
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  SIGN_UP_PENDING,
} from './types';

import { setAuth } from '../../ducks/auth/actions';

export const signupUser = (data) => {
  return async (dispatch, getState) => {

    // const data = getState();
    console.log("signup action");
    console.log(data);

    // const isValid = !getState().form.signup.syncErrors;

    // if (!isValid) {
    // handleError({}, 'Signup Form is not valid');
    // return;
    // }

    // api request

    const { firstName, lastName, email, password } = data;

    dispatch({
      type: SIGN_UP_PENDING
    });

    axios.post('/api/auth/register', { firstName, lastName, email, password })
      .then(response => {
        console.log('Signed In');
        console.log(response);

        dispatch({
          type: SIGN_UP_FULFILLED,
        });
        dispatch(setAuth(response.data.data));
        // dispatch(signupReset());
        dispatch(push('/profile'));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: SIGN_UP_REJECTED,
          payload: err.response.data.message || "Signup Failed"
        });
      });
    // toast(response.message, { type: 'success' });
  }
}
