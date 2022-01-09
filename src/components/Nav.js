import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <NavLink to="/" className="navLink">
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#f7f7f7">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z" />
      </svg>
    </NavLink>
    <NavLink to="/workouts" className="navLink">
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#f7f7f7">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
      </svg>
    </NavLink>
    <NavLink to="/profile" className="navLink">
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#f7f7f7">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </NavLink>
  </nav>
);

export default Nav;
