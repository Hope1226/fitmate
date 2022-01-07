import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeData } from './redux/workouts/workouts';

function App() {
  const tempStore = [
    {
      id: 12,
      name: 'Push ups',
      numSets: 4,
    },
  ];

  const globalStore = useSelector((state) => state.workoutReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeData(tempStore));
  }, []);

  return (
    <div className="App">
      <h1>{globalStore[0].name}</h1>
    </div>
  );
}

export default App;
