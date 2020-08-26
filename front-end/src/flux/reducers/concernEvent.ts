import {
  CONCERN_EVENT_FAIL,
  CONCERN_EVENT_LOADING,
  CONCERN_EVENT_SUCCESS,
  concernEventDispatchTypes,
  concernEventType
} from '../actions/types';

export interface DefaultStateI {
  loading: boolean;
  concernEvent: concernEventType;
}

const defaultState: DefaultStateI = {
  loading: false,
  concernEvent: []
};

const concernEventReducer = (
  state: DefaultStateI = defaultState,
  action: concernEventDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case CONCERN_EVENT_FAIL:
      return {
        ...state,
        loading: false
      };
    case CONCERN_EVENT_LOADING:
      return {
        ...state,
        loading: true
      };
    case CONCERN_EVENT_SUCCESS:
      return {
        loading: false,
        concernEvent: action.payload
      };
    default:
      return state;
  }
};

export default concernEventReducer;
