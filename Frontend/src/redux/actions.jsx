import {ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER, RESET } from './types';
import axios from 'axios';

export function addFavorite (character) {
  return async function (dispatch) {
   const response = await axios.post("http://localhost:3001/rickandmorty/fav", character)
   const data = response.data
   return dispatch({
      type: ADD_FAVORITE,
      payload: data,
    })
  }
};

export function removeFavorite(id) {
  return async function (dispatch) {
    const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
    const data = response.data
    return dispatch({
       type: REMOVE_FAVORITE,
       payload: data,
     })
   }
}

export function filterCards (gender) {
  return {
    type: FILTER,
    payload: gender,
  }
  
};

export function orderCards (id) {
  return {
    type: ORDER,
    payload: id,
  }
 
};

export function resetCards () {
  return {
    type: RESET,
  }
 
};




