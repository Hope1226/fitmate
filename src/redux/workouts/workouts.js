const STORE_DATA = 'workoutSrore/workouts/STORE_DATA';
const exerciesAPI = 'https://wger.de/api/v2/exerciseinfo/';
const intialState = [];

const storeData = (payload) => (
  {
    type: STORE_DATA,
    payload,
  }
);

export const fetchData = () => (dispatch) => fetch(exerciesAPI)
  .then((response) => response.json())
  .then(((data) => {
    dispatch(storeData(data.results));
  }));

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
