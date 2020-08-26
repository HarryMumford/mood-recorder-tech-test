import { combineReducers } from 'redux';
import mood from './mood';
import concernEvent from './concernEvent';

const rootReducer = combineReducers({
  mood: mood,
  concernEvent: concernEvent
});

export default rootReducer;
