import data from '../../assets/data/data';

const STORE_DATA = 'workoutSrore/workouts/STORE_DATA';
const intialState = data;

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
