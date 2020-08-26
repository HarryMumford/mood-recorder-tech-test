export const MOOD_LOADING = 'MOOD_LOADING';
export const MOOD_FAIL = 'MOOD_FAIL';
export const MOOD_SUCCESS = 'MOOD_SUCCESS';
export const CONCERN_EVENT_LOADING = 'CONCERN_EVENT_LOADING';
export const CONCERN_EVENT_FAIL = 'CONCERN_EVENT_FAIL';
export const CONCERN_EVENT_SUCCESS = 'CONCERN_EVENT_SUCCESS';

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

export interface ConcernEvent {
  timestamp: string;
  severity: string;
  observer: string;
}

export type concernEventType = ConcernEvent[];

export interface ConcernEventLoading {
  type: typeof CONCERN_EVENT_LOADING;
}

export interface ConcernEventFail {
  type: typeof CONCERN_EVENT_FAIL;
}

export interface ConcernEventSuccess {
  type: typeof CONCERN_EVENT_SUCCESS;
  payload: concernEventType;
}

export type moodDispatchTypes = MoodLoading | MoodFail | MoodSuccess;

export type concernEventDispatchTypes =
  | ConcernEventLoading
  | ConcernEventFail
  | ConcernEventSuccess;
