<<<<<<< HEAD
export const MOOD_LOADING = 'MOOD_LOADING';
export const MOOD_FAIL = 'MOOD_FAIL';
export const MOOD_SUCCESS = 'MOOD_SUCCESS';

export type moodType = {
  [key: string]: number;
};

export interface MoodLoading {
  type: typeof MOOD_LOADING;
}

export interface MoodFail {
  type: typeof MOOD_FAIL;
}

export interface MoodSuccess {
  type: typeof MOOD_SUCCESS;
  payload: moodType;
}

export type moodDispatchTypes = MoodLoading | MoodFail | MoodSuccess;
=======
export const MOOD_COUNT_LOADING = 'MOOD_COUNT_LOADING';
export const GET_MOOD_COUNT = 'GET_MOOD_COUNT';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
