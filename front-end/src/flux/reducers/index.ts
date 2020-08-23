import { combineReducers } from 'redux';
import mood from './mood';

export const rootReducer = combineReducers({
  mood: mood
});
