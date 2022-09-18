// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUserLoginButton from './DemoUser';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <DemoUserLoginButton />
      </>
    );
  }

  return (
    <div className='NavContainer'>
    <div className='NavBar'>
      <NavLink exact to="/">
        Home
      </NavLink>
      <div className='RightNav'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  </div>
  );
}

export default Navigation;