import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { populateStore } from '../../redux/workouts/workouts';
import Stats from './features/Stats';
import Actions from './features/Actions';
import NewDate from './features/NewDate';
import workoutAction from '../../assets/images/actions/workout_day.svg';
import restAction from '../../assets/images/actions/rest_day.svg';
import restOverlay from '../../assets/images/actions/active_rest.svg';
import Overlay from './features/Overlay';

const Dashboard = () => {
  const globalStorage = useSelector((state) => state.workoutReducer);
  const [localStorage, setLocalStorage] = useState(globalStorage);
  const dispatch = useDispatch();
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

  const setActivity = () => {
    switch (setBtnTitle()) {
      case 'Hit the chest and biceps':
        setLocalStorage(globalStorage.filter((el) => el.category === 'chest' || el.category === 'bicep'));
        break;
      case 'Hit the back and tricaps':
        setLocalStorage(globalStorage.filter((el) => el.category === 'back' || el.category === 'tircaps'));
        break;
      case 'Hit the legs and shoulders':
        setLocalStorage(globalStorage.filter((el) => el.category === 'legs' || el.category === 'shoulders'));
        break;
      default:
        setLocalStorage(globalStorage.filter((el) => el.category === 'rest'));
    }
  };

  useEffect(() => {
    dispatch(populateStore());
    setActivity();
  }, []);

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
        condition={condtion}
        imgSrc={condtion ? workOutDays : restOverlay}
        activityName={setBtnTitle()}
        actDesc={localStorage[0].description}
      />
    </div>
  );
};

export default Dashboard;
