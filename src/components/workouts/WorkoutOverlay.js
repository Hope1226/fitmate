/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import React from 'react';

const WorkoutOverlay = ({
  obj, next, closeFunc,
}) => (
  <div className="workout-overlay">
    <div className="headinline">
      <h2>{obj.name}</h2>
    </div>
    <div className="wrokout-overlay-img-container">
      <img src={require(`../../assets/images/workouts/${obj.category}/${obj.category}-${obj.id}.png`)} alt="exercise" />
    </div>
    <div className="workout-techniques">
      <p>{obj.description}</p>
    </div>
    <button type="button" className="btns wo-overlay-btns" onClick={closeFunc}>Stop this session</button>
    <button type="button" className="btns wo-overlay-btns" onClick={next}>Next</button>
  </div>
);

export default WorkoutOverlay;
