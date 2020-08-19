import React from 'react';
import Button from '../general/Button'
import { Link } from 'react-router-dom';

function SignUp() {
  return(
    <div className="sign-up">
      <h2>Sign Up</h2>
      <input type="text" className="input" placeholder="first name" />
      <input type="text" className="input" placeholder="last name" />
      <input type="text" className="input" placeholder="email" />
      <input type="password" className="input" placeholder="password" />
      <Link to="/profile">
        <Button title="Sign Up" onClick={null} className="sign-up-button" />
      </Link>
    </div>
  )
}

export default SignUp;
