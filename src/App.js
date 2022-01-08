import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Workouts from './components/workouts/Workouts';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div className="App font-sanse">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/workouts" exact element={<Workouts />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
