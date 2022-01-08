import React from 'react';
import { NavLink } from 'react-router-dom';
import dashIcon from '../assets/images/icons/dashboard-icon.svg';
import workoutIcon from '../assets/images/icons/workout-icon.svg';
import profileIcon from '../assets/images/icons/profile-icon.svg';

const Nav = () => (
  <nav>
    <NavLink to="/">
      <img src={dashIcon} alt="dashboard icon" />
    </NavLink>
    <NavLink to="/workouts">
      <img src={workoutIcon} alt="workout icon" />
    </NavLink>
    <NavLink to="/profile">
      <img src={profileIcon} alt="profile icon" />
    </NavLink>
  </nav>
);

export default Nav;
