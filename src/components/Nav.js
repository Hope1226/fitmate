import React from 'react';
import { NavLink } from 'react-router-dom';
import dashIcon from '../assets/images/icons/dashboard-icon.svg';
import workoutIcon from '../assets/images/icons/workout-icon.svg';
import profileIcon from '../assets/images/icons/profile-icon.svg';

const Nav = () => (
  <nav className="absolute bottom-0 left-0 right-0 flex justify-evenly">
    <NavLink to="/">
      <img className="w-16 md:w-32 lg:w-48" src={dashIcon} alt="dashboard icon" />
    </NavLink>
    <NavLink to="/workouts">
      <img className="w-16 md:w-32 lg:w-48" src={workoutIcon} alt="workout icon" />
    </NavLink>
    <NavLink to="/profile">
      <img className="w-16 md:w-32 lg:w-48" src={profileIcon} alt="profile icon" />
    </NavLink>
  </nav>
);

export default Nav;
