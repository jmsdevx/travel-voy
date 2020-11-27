import { bindActionCreators } from 'redux';
import * as auth from '../ducks/auth/actions';
import * as profile from '../ducks/profile/actions';
import * as trips from '../ducks/trips/actions';
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
      ...profile,
      ...trips,
    },
    dispatch
  );
}
