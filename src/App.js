import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/workouts/workouts';

function App() {
  const [localState, setLocalState] = useState([]);

  const globalStore = useSelector((state) => state.workoutReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    setLocalState(globalStore.filter((obj) => obj.category.name === 'Legs' && obj.images.length !== 0));
  }, []);

  const showtTheLocal = () => {
    console.log(localState);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">name</h1>
      <button type="button" onClick={showtTheLocal}>Click me</button>
    </div>
  );
}

export default App;
