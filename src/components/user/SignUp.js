import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../general/Button'
import { Link } from 'react-router-dom';
import './SignUp.scss';
import { connect } from 'react-redux';
import * as actions from '../ducks/auth/actions';

function SignUp(props) {

  const { signupUser } = props;


  //get session
  const defaultUserObject = { firstName: '', lastName: '', email: '', id: '' }
  const [userData, setUserData] = useState({ defaultUserObject })
  const [gotSession, setSession] = useState(false)

  // useEffect(() => {
  //   axios.get('/api/session')
  //     .then(response => {
  //       setUserData(response.data);
  //       setSession(true)
  //     })
  // }, [gotSession]);

  //change text handler
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFirstname(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
    }
  }


  //submit to register
  const [redirect, setRedirect] = useState(false);
  const submitHandler = () => {
    signupUser({ firstName, lastName, email, password });
  }

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <input type="text" className="input" placeholder="first name" id="firstName" onChange={changeHandler} value={firstName} />
      <input type="text" className="input" placeholder="last name" id="lastName" onChange={changeHandler} value={lastName} />
      <input type="text" className="input" placeholder="email" id="email" onChange={changeHandler} value={email} />
      <input type="password" className="input" placeholder="password" id="password" onChange={changeHandler} value={password} />
      <Button title="Sign Up" className="sign-up-button" onClick={submitHandler} />
      {/* {
        redirect &&
        <Redirect
          push
          to={{
            pathname: "/profile",
            search: `${userData.email}`,
            state: { userData }
          }}
        />
      } */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // signupFormData: state.signup.signupFormData
  }
}

export default connect(
  mapStateToProps,
  actions
)(SignUp);