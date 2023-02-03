import {ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER, RESET} from './types';

const initialState = {
  myFavorites: [],
  myFavoritesCopy: []
};

const rootReducer = (state = initialState,  action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavoritesCopy, action.payload],
        myFavoritesCopy: [...state.myFavoritesCopy, action.payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((item) => item.id !== action.payload),
      };
      case FILTER:
        const filterCopy = [...state.myFavoritesCopy];
        const filtered = filterCopy.filter((char)=>char.gender === action.payload)
        return {
          ...state,
          myFavorites: filtered,
        };
        
      case ORDER:
        const orderCopy = [...state.myFavoritesCopy];
        // ordenar de menos a mayor
        const ordered = orderCopy.sort((a, b) => {
          if (a.id > b.id) {
            return "Ascendente" === action.payload ? 1 : -1;
          }
          if (a.id < b.id) {
            return "Descendente" === action.payload ? 1 : -1;
          }
          return 0;
        });
        
        return {
          ...state,
          myFavorites: ordered,
        };
      case RESET:
        return {
          ...state,
          myFavorites: state.myFavoritesCopy,
        };
    
    default:
      return {... state};
  }
};

export default rootReducer;