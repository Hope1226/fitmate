import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Workout from './Workout';
import { populateStore } from '../../redux/workouts/workouts';
import chestIcon from '../../assets/images/icons/chest-icon.png';
import armsIcon from '../../assets/images/icons/arms-icon.png';
import backIcon from '../../assets/images/icons/back-icon.png';
import legsIcon from '../../assets/images/icons/legs-icon.png';
import abdominalsIcon from '../../assets/images/icons/abdominals-icon.png';
import shouldersIcon from '../../assets/images/icons/shoulders-icon.png';
import expandIcon from '../../assets/images/icons/expand_more.svg';
import expandLessIcon from '../../assets/images/icons/expand_less.svg';

const Workouts = () => {
  const globalStorage = useSelector((state) => state.workoutReducer);
  const [chestOpen, setChestOpen] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [absOpen, setAbsOpen] = useState(false);
  const [armsOpen, setArmsOpen] = useState(false);
  const [legsOpen, setLegsOpen] = useState(false);
  const dispatch = useDispatch();
  const filterWorkouts = (int) => globalStorage.filter((obj) => obj.category === int);
  const openWorkoutList = (set, list) => set(!list);

  useEffect(() => {
    dispatch(populateStore());
  }, []);

  return (
    <div className="workouts-container">
      <div className="workout-categories">
        <div className="img-container">
          <img src={chestIcon} alt="" />
        </div>
        <div className="workout-title">
          <h2>Lorem</h2>
        </div>
        <div className={`workout-list ${chestOpen ? 'listOpen' : ' '}`}>
          <Workout list={filterWorkouts('chest')} />
        </div>
        <button type="button" onClick={() => openWorkoutList(setChestOpen, chestOpen)} className="see-more-btns">
          <img src={chestOpen ? expandLessIcon : expandIcon} alt="" />
        </button>
      </div>
      <div className="workout-categories">
        <div className="img-container">
          <img src={backIcon} alt="" />
        </div>
        <div className="workout-title">
          <h2>Lorem</h2>
        </div>
        <div className={`workout-list ${backOpen ? 'listOpen' : ' '}`}>
          <Workout list={filterWorkouts('back')} />
        </div>
        <button type="button" onClick={() => openWorkoutList(setBackOpen, backOpen)} className="see-more-btns">
          <img src={backOpen ? expandLessIcon : expandIcon} alt="" />
        </button>
      </div>
      <div className="workout-categories">
        <div className="img-container">
          <img src={shouldersIcon} alt="" />
        </div>
        <div className="workout-title">
          <h2>Lorem</h2>
        </div>
        <div className={`workout-list ${shouldOpen ? 'listOpen' : ' '}`}>
          <Workout list={filterWorkouts('shoulders')} />
        </div>
        <button type="button" onClick={() => openWorkoutList(setShouldOpen, shouldOpen)} className="see-more-btns">
          <img src={shouldOpen ? expandLessIcon : expandIcon} alt="" />
        </button>
      </div>
      <div className="workout-categories">
        <div className="img-container">
          <img src={abdominalsIcon} alt="" />
        </div>
        <div className="workout-title">
          <h2>Lorem</h2>
        </div>
        <div className={`workout-list ${absOpen ? 'listOpen' : ' '}`}>
          <Workout list={filterWorkouts('abdominals')} />
        </div>
        <button type="button" onClick={() => openWorkoutList(setAbsOpen, absOpen)} className="see-more-btns">
          <img src={absOpen ? expandLessIcon : expandIcon} alt="" />
        </button>
      </div>
      <div className="workout-categories">
        <div className="img-container">
          <img src={armsIcon} alt="" />
        </div>
        <div className="workout-title">
          <h2>Lorem</h2>
        </div>
        <div className={`workout-list ${armsOpen ? 'listOpen' : ' '}`}>
          <Workout list={filterWorkouts('arms')} />
        </div>
        <button type="button" onClick={() => openWorkoutList(setArmsOpen, armsOpen)} className="see-more-btns">
          <img src={armsOpen ? expandLessIcon : expandIcon} alt="" />
        </button>
      </div>
      <div className="workout-categories">
        <div className="img-container">
          <img src={legsIcon} alt="" />
        </div>
        <div className="workout-title">
          <h2>Lorem</h2>
        </div>
        <div className={`workout-list ${legsOpen ? 'listOpen' : ' '}`}>
          <Workout list={filterWorkouts('legs')} />
        </div>
        <button type="button" onClick={() => openWorkoutList(setLegsOpen, legsOpen)} className="see-more-btns">
          <img src={legsOpen ? expandLessIcon : expandIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Workouts;
