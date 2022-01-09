import React from 'react';
import Stats from './features/Stats';
import Actions from './features/Actions';
import Date from './features/Date';

const Dashboard = () => (
  <div className="dashboard">
    <Stats />
    <Actions />
    <Date />
  </div>
);

export default Dashboard;
