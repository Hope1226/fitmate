/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';

const Stats = ({ conpleted, allWorkouts, persantage }) => (
  <div className="stats-container">
    <h2 className="main-headings">progress</h2>
    <div className="prog-data">
      <div className="prog-chart">
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle-top" />
        <div className="prog-circle">
          {persantage}
          {' '}
          %
        </div>
      </div>
      <div className="prog-details">
        <h3 className="sub-headings">Workouts for today</h3>
        <p>
          Total:
          {allWorkouts}
        </p>
        <p>
          Completed:
          {conpleted}
        </p>
        <p>
          Pending:
          {allWorkouts - conpleted}
        </p>
      </div>
    </div>
  </div>
);

export default Stats;
