<<<<<<< HEAD
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
=======
import { MOOD_COUNT_LOADING, GET_MOOD_COUNT } from '../actions/types';

const initialState = {
  moodCount: [],
  loading: false
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case GET_MOOD_COUNT:
      return {
        ...state,
        moodCount: action.payload
      };
    case MOOD_COUNT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
