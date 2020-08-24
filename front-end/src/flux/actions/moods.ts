<<<<<<< HEAD
import { Dispatch } from 'redux';
import {
  MOOD_FAIL,
  MOOD_LOADING,
  MOOD_SUCCESS,
  moodDispatchTypes
} from './types';
import axios from 'axios';

export const GetMoods = (moodMood: string) => async (
  dispatch: Dispatch<moodDispatchTypes>
) => {
  try {
    dispatch({
      type: MOOD_LOADING
    });

    const res = await axios.get(`/moods`);

    dispatch({
      type: MOOD_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: MOOD_FAIL
    });
  }
=======
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
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
};
