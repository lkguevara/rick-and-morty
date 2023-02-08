import {ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER, RESET } from './types';

export const addFavorite = (item) => ({
  type: ADD_FAVORITE,
  payload: item,
});

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export const filterCards = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const orderCards = (id) => ({
  type: ORDER,
  payload: id,
});

export const resetCards = () => ({
  type: RESET,
});



