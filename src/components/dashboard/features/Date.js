import React from 'react';
import CalendarSec from './Calendar';

const Date = () => (
  <div className="dash-children calendar">
    <h2 className="main-headings">Calendar</h2>
    <div>
      <div>
        <h3 className="sub-headings">today</h3>
        <p>FRI</p>
      </div>
      <CalendarSec />
      <div />
    </div>
  </div>
);

export default Date;
