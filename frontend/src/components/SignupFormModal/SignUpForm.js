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
    <form onSubmit={handleSubmit}>
      <div className="signupform-container">
        <div className="nav-container">
          Sign up
        </div>
        <div className="nav-header">
          Welcome to funfairbnb!
        </div>
        <div className="error-message">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>

        <div className="input-field-container">
          <div className="input-field">
            <label>

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </label>
          </div>

          <div className="input-field">
          <label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </label>
        </div>

        <div className="input-field">
          <label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </label>
        </div>

          <div className="input-field">
            <label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </label>
          </div>
          </div>
          <div className="signup-button">
            <button type="submit">Sign Up</button>
          </div>

        </div>
     
    </form>
  );
}

export default SignupForm;