import {ADD_FAVORITE, REMOVE_FAVORITE} from './Types';

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        myFavorites: state.myFavorites.filter((item) => item.id !== action.payload),
      };
    
    default:
      return state;
  }
};

export default rootReducer;