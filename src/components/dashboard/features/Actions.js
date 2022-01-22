import React from 'react';
import workoutAction from '../../../assets/images/actions/workout_day.svg';
import restAction from '../../../assets/images/actions/rest_day.svg';

const Actions = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const workOutDays = weekDays.filter((e, index) => e !== 'Sunday' && index % 2 === 0);
  const date = new Date();
  const today = weekDays[date.getDay() - 1];
  const condtion = workOutDays.includes(today);

  const setBtnTitle = () => {
    switch (today) {
      case 'Monday':
        return 'Hit the chest and biceps';
      case 'Wednesday':
        return 'Hit the back and tricaps';
      case 'Friday':
        return 'Hit the legs and shoulders';
      default:
        return 'Discover the rest day';
    }
  };

  return (
    <div className="dash-children actions">
      <h2 className="main-headings">Actions</h2>
      <h3 className="sub-headings">
        Todays is:
        {' '}
        {today}
      </h3>
      <div className="todays-actions">
        <p>{condtion ? 'GYM DAY' : 'REST DAY'}</p>
        <img className="actions-img" src={condtion ? workoutAction : restAction} alt="" />
        <button type="button" className="start-actions-btn">{setBtnTitle()}</button>
      </div>
    </div>
  );
};

export default Actions;
