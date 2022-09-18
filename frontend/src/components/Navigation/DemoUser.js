import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';


export default function DemoUserLoginButton() {
    const dispatch = useDispatch();
  
    const clickHandler = (e) => {
        e.preventDefault();
        const demoUser  = { credential: 'Demo-lition', password: 'password1' };
        dispatch(sessionActions.login(demoUser));
    }

    return (
        <button onClick={clickHandler}>Demo User</button>
    );
}

