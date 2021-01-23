import * as types from '../types/people';

export const filterPeople = (word) => ({
  type: types.FILTER,
  word
});