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
          <h1>{workout.name}</h1>
          <img src={require(`../assets/images/workouts/chest/chest-${workout.id}.png`)} alt="exercise" />
        </div>
      ))}
    </div>
  );
}

export default Workout;
