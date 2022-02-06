/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import React from 'react';
import uniqid from 'uniqid';

function Workout({ list }) {
  return (
    <div className="workouts">
      {list.map((workout) => (
        <div key={uniqid()} className="workout">
          <h2 className="main-headings">{workout.name}</h2>
          <div className="workout-img-container">
            <img src={require(`../../assets/images/workouts/${workout.category}/${workout.category}-${workout.id}.png`)} alt="exercise" />
          </div>
          <button type="button" className="btns workout-btns">Start this exercise</button>
        </div>
      ))}
    </div>
  );
}

export default Workout;
