// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { NavLink  } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import CreateSpotModal from "../CreateSpotModal";
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };



  return (
    <>
      <CreateSpotModal />
      <button onClick={openMenu} className='profile-button'>
        <i className="fa-solid fa-bars"></i>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="div-profile-dropdown">
          <div className="user-info">{user.username}</div>
          <div className="user-info">{user.email}</div>
          {/* <div className="trips-button-container">
            <NavLink to='/mytrips' className='trips-button'>Trips</NavLink>
          </div> */}
            <NavLink to="/mytrips">
      <button className="trips-button">Trips</button>
    </NavLink>
          <div className="button-li">
            <button onClick={logout} className="logout-button">Log out</button>
          </div>
        </div>

      )}
    </>
  );
}

export default ProfileButton;