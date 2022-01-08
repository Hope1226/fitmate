import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Workout from './components/Workout';

function App() {
  const [localState, setLocalState] = useState([]);

  const globalStore = useSelector((state) => state.workoutReducer);

  useEffect(() => {
    setLocalState(globalStore.filter((obj) => obj.category === 'chest'));
  }, []);

  return (
    <div className="App">
      <Workout list={localState} />
    </div>
  );
}

export default App;
