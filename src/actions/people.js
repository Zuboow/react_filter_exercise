import * as types from '../types/people';

export const filter = (word) => ({
  type: types.FILTER,
  word: word
});