import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../ducks/auth/actions';

function Auth({ getAuth }) {

  useEffect(() => {
    getAuth();
  }, [getAuth]);

  return (<></>);
}

export default connect(
  null,
  actions
)(Auth);