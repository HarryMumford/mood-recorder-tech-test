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
