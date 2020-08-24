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
};
