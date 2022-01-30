import React, { useState } from 'react';
import Stats from './features/Stats';
import Actions from './features/Actions';
import NewDate from './features/NewDate';
import workoutAction from '../../assets/images/actions/workout_day.svg';
import restAction from '../../assets/images/actions/rest_day.svg';
import Overlay from './features/Overlay';

const Dashboard = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const workOutDays = weekDays.filter((e, index) => e !== 'Sunday' && index % 2 === 0);
  const date = new Date();
  const today = weekDays[date.getDay() - 1];
  const condtion = workOutDays.includes(today);
  const [overLayOpen, setOverlayOpen] = useState(false);
  const openWrokoutOverlay = () => setOverlayOpen(true);
  const clsoeWorkoutOverlay = () => setOverlayOpen(false);

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
    <div className="dashboard">
      <Stats />
      <Actions
        currentDay={today}
        currentCondition={condtion}
        actionType={condtion ? 'GYM DAY' : 'REST DAY'}
        imgSrc={condtion ? workoutAction : restAction}
        dayFunc={setBtnTitle()}
        openOverlayfunc={openWrokoutOverlay}
      />
      <NewDate />
      <Overlay
        toggleClass={overLayOpen ? 'overlay-open' : ''}
        closeOverlayFunc={clsoeWorkoutOverlay}
      />
    </div>
  );
};

export default Dashboard;
