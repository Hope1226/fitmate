/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Overlay = ({
  toggleClass, closeOverlayFunc, condition, imgSrc, actDesc, activityName,
}) => (
  <div className={`main-overlay ${toggleClass}`}>
    <h1>{activityName}</h1>
    <div className="action-description">
      <img src={imgSrc} alt="activity" />
      <div className="activity-description">
        <p>{actDesc}</p>
      </div>
    </div>
    <div className="activitiy-actions">
      <button type="button" className="btns" onClick={closeOverlayFunc}>Stop the session</button>
      {condition
        ? <button type="button" className="btns">Next Exercies</button>
        : <NavLink to="/workouts"><button type="button" className="btns">See the list of workouts</button></NavLink>}
    </div>
  </div>
);

export default Overlay;
