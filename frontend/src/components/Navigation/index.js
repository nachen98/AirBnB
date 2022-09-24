// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignUpFormModal from '../SignupFormModal';
import logo from '../../Images/logo.png'

function Navigation({ isLoaded, NavBar}){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
        <SignUpFormModal />
      </>
    );
  }

  return (
    <div className='NavContainer'>
    <div className={NavBar}>
      <NavLink exact to="/" className="navlink">
        <img src={logo} className='logo-picture' alt='logo' />
        <h1>funfairbnb</h1>
      </NavLink>
      <div className='RightNav'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  </div>
  );
}

export default Navigation;