import {
  MOOD_FAIL,
  MOOD_LOADING,
  MOOD_SUCCESS,
  moodDispatchTypes,
  moodType
} from '../actions/types';

export interface DefaultStateI {
  loading: boolean;
  mood: moodType;
}

const defaultState: DefaultStateI = {
  loading: false,
  mood: {}
};

const moodReducer = (
  state: DefaultStateI = defaultState,
  action: moodDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case MOOD_FAIL:
      return {
        loading: false,
        mood: {}
      };
    case MOOD_LOADING:
      return {
        loading: true,
        mood: {}
      };
    case MOOD_SUCCESS:
      return {
        loading: false,
        mood: action.payload
      };
    default:
      return state;
  }
};

export default moodReducer;
