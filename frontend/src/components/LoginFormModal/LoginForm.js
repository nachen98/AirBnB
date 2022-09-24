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

    <form onSubmit={handleSubmit}>
      <div className="loginform-container">
        <div className="nav-container">
          Log in
        </div>

        <div className="nav-header">
          Welcome to funfairbnb!
        </div>
        <div className="error-message">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div className="field-container">
        <div className="input-field-container">
        <div className="input-field email">
        <label>
          
          <input className="input"
            type="text"
            value={credential}
            placeholder="Username or Email"
            onChange={(e) => setCredential(e.target.value)}
          //required
          />
        </label>   
        </div>
      
        <div className="input-field">
        <label>
          <input className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          //required
          />
        </label>  
        </div>
        </div>
        <div className="login-button">
          <button type="submit">Log In</button>
          </div>      
        <div className="demo-button">
        <button onClick={demoUserLogin}>Log in as demo user</button>
        </div>
        </div>
      </div>
    </form>
  );
}


export default LoginForm;