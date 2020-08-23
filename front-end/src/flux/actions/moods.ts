import axios from 'axios';
import { MOOD_COUNT_LOADING, GET_MOOD_COUNT } from './types';

export const setMoodsLoading = () => {
  return {
    type: MOOD_COUNT_LOADING
  };
};

export const getMoodCount = () => (dispatch: Function) => {
  dispatch(setMoodsLoading);
  axios
    .get('/moodCount')
    .then((res) => dispatch({ type: GET_MOOD_COUNT }))
    .catch((err) => console.log(err));
};
