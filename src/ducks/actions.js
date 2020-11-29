import { bindActionCreators } from 'redux';
import * as auth from './auth/actions';
import * as signup from './signup/actions';
import * as login from './login/actions';
import * as profile from './profile/actions';
import * as trips from './trips/actions';
import {
  push
} from 'connected-react-router';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo: (path) => (dispatch) => {
        dispatch(push(path))
      },
      ...auth,
      ...signup,
      ...login,
      ...profile,
      ...trips,
    },
    dispatch
  );
}
