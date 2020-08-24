import {
  MOOD_FAIL,
  MOOD_LOADING,
  MOOD_SUCCESS,
  moodDispatchTypes,
  moodType
} from '../actions/types';

interface DefaultStateI {
  loading: boolean;
  mood?: moodType;
}

const defaultState: DefaultStateI = {
  loading: false
};

const moodReducer = (
  state: DefaultStateI = defaultState,
  action: moodDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case MOOD_FAIL:
      return {
        loading: false
      };
    case MOOD_LOADING:
      return {
        loading: true
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
