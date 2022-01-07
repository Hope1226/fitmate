const STORE_DATA = 'workoutSrore/workouts/STORE_DATA';
const intialState = [];

export const storeData = (payload) => (
  {
    type: STORE_DATA,
    payload,
  }
);

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
