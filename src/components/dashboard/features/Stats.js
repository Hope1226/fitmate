/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [allWorks, setWorks] = useState(12);
  const [completed, setCompleted] = useState(1);
  const [percentage, setPercentage] = useState(0);

  const calculatePercantage = () => {
    const halfCircles = document.querySelectorAll('.half-circle');
    const halfCirclesTop = document.querySelector('.half-circle-top');
    const taskComplationDegrees = (360 * completed) / allWorks;

    halfCircles.forEach((el) => {
      el.style.transform = `rotate(${taskComplationDegrees}deg)`;
      if (taskComplationDegrees >= 180) {
        halfCircles[0].style.transform = 'rotate(180deg)';
        halfCirclesTop.style.opacity = '0';
      }
    });
  };

  useEffect(() => {
    calculatePercantage();
  }, []);

  return (
    <div className="stats-container">
      <h2 className="main-headings">progress</h2>
      <div className="prog-data">
        <div className="prog-chart">
          <div className="half-circle" />
          <div className="half-circle" />
          <div className="half-circle-top" />
          <div className="prog-circle">
            {Math.round((completed * 100) / allWorks) }
            {' '}
            %
          </div>
        </div>
        <div className="prog-details">
          <h3 className="sub-headings">Workouts for today</h3>
          <p>
            Total:
            {allWorks}
          </p>
          <p>
            Completed:
            {completed}
          </p>
          <p>
            Pending:
            {allWorks - completed}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
