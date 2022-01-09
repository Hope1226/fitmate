import React from 'react';

const Stats = () => (
  <div className="stats-container">
    <h2 className="main-headings">progress</h2>
    <div className="prog-data">
      <div className="prog-chart">
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle-top" />
        <div className="prog-circle">
          0%
        </div>
      </div>
      <div className="prog-details">
        <h3 className="sub-headings">Workouts for today</h3>
        <p>Total:</p>
        <p>Completed:</p>
        <p>Pending:</p>
      </div>
    </div>
  </div>
);

export default Stats;
