/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

const Actions = ({
  currentDay, actionType, imgSrc, dayFunc, openOverlayfunc,
}) => (
  <div className="dash-children actions">
    <h2 className="main-headings">Actions</h2>
    <h3 className="sub-headings">
      Todays is:
      {' '}
      {currentDay}
    </h3>
    <div className="todays-actions">
      <p>{actionType}</p>
      <img className="actions-img" src={imgSrc} alt="" />
      <button type="button" onClick={openOverlayfunc} className="btns start-actions-btn">{dayFunc}</button>
    </div>
  </div>
);

export default Actions;
