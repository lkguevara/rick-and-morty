import {ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export const addFavorite = (item) => ({
  type: ADD_FAVORITE,
  payload: item,
});

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

