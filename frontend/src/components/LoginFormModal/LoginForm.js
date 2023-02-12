// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoUserLogin = (e) => {
    e.preventDefault();
    const demoUser = { credential: 'Demo-lition', password: 'password1' };
    dispatch(sessionActions.login(demoUser));
  }

  return (

    <div className="loginsignupform-container flx-col-align-ctr">
      <div className="loginsignup-nav-container flx-col-justify-align-ctr">
        Log in
      </div>
      <div className="loginsignup-nav-lower-container">
        <div className="login-nav-header ">
          Welcome to funfairbnb
        </div>
        <form onSubmit={handleSubmit}>
       
            <input
              className="login-username-input"
              type="text"
              value={credential}
              placeholder="Username or Email"
              onChange={(e) => setCredential(e.target.value)}
              style={{borderBottom: 'none'}}
              required
            />
     
          <input className="login-password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {errors.length > 0 &&
            <div className="login-error-message">{errors}</div>
          }

     
          <button type="submit"  className="loginsignup-button">Continue</button>
          <div className="or-separator flx-row-space-btw-no-justify-content">
            <div className="separate-line"></div>
            <div className="or-message">or</div>
            <div className="separate-line"></div>
          </div>

          
       
          <button className="login-demo-button" onClick={demoUserLogin}>Continue as demo user</button>
    
        </form>
      </div >
    </div>


  );
}


export default LoginForm;