/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import React, { useState } from 'react';
import uniqid from 'uniqid';
import WorkoutOverlay from './WorkoutOverlay';

function Workout({ list }) {
  const [overlayOpen, setOverlay] = useState(false);
  const [targetWorkout, setTargetWorkout] = useState({});

  const findWorkout = (id) => {
    setTargetWorkout(list.filter((el) => el.id === id)[0]);
    console.log(targetWorkout);
    setOverlay(true);
  };

  const closeWorkoutOverlat = () => {
    setOverlay(false);
  };

  const nextWorkout = () => console.log('under constructions');

  return (
    <div className="workouts">
      {list.map((workout) => (
        <div key={uniqid()} className="workout">
          <h2 className="main-headings">{workout.name}</h2>
          <div className="workout-img-container">
            <img src={require(`../../assets/images/workouts/${workout.category}/${workout.category}-${workout.id}.png`)} alt="exercise" />
          </div>
          <button type="button" onClick={() => findWorkout(workout.id)} className="btns workout-btns">Start this exercise</button>
        </div>
      ))}

      { overlayOpen ? (
        <WorkoutOverlay
          obj={targetWorkout}
          next={nextWorkout}
          closeFunc={closeWorkoutOverlat}
        />
      ) : null}
    </div>
  );
}

export default Workout;
