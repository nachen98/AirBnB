// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signupform-container  flx-col-align-ctr">
      <div className="loginsignup-nav-container flx-col-justify-align-ctr">
        Sign up
      </div>
      <div className="loginsignup-nav-lower-container">
        <div className="signup-nav-header ">
          Welcome to funfairbnb
        </div>
        <form onSubmit={handleSubmit}>
          {errors.length > 0 && (<div className="signup-error-message">
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>)}

          <input
            className="login-username-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ borderBottom: 'none' }}
            required
          />
          <input
            className="signup-username-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username (at least 4 characters)"
            style={{ borderBottom: 'none' }}
            required
          />

          <input
            className="signup-username-input"
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="First Name"
            style={{ borderBottom: 'none' }}
            required
          />

          <input
            className="signup-username-input"
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name"
            style={{ borderBottom: 'none' }}
            required
          />

          <input
            className="signup-username-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (at least 6 characters)"
            style={{ borderBottom: 'none' }}
            required
          />

          <input
            className="login-password-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          <button className="loginsignup-button" type="submit">Sign Up</button>

        </form>

      </div>
    </div>
  );
}

export default SignupForm;