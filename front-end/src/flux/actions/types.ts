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