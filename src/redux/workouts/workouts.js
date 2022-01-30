import data from '../../assets/data/data';

const intialState = data;

export const populateStore = () => (
  {
    type: 'STORE_DATA',
  }
);

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return data;
    default:
      return state;
  }
};

export default reducer;
