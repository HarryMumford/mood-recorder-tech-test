import { Dispatch } from 'redux';
import {
  CONCERN_EVENT_FAIL,
  CONCERN_EVENT_LOADING,
  CONCERN_EVENT_SUCCESS,
  concernEventDispatchTypes
} from './types';
import axios from 'axios';

export const getConcernEvents = () => async (
  dispatch: Dispatch<concernEventDispatchTypes>
) => {
  try {
    dispatch({
      type: CONCERN_EVENT_LOADING
    });

    const res = await axios.get('/concernEvents');

    dispatch({
      type: CONCERN_EVENT_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: CONCERN_EVENT_FAIL
    });
  }
};
