import { combineReducers } from 'redux';
import mood from './mood';

const rootReducer = combineReducers({
  mood: mood
});

export default rootReducer;
