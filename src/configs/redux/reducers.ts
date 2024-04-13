import { combineReducers } from '@reduxjs/toolkit';
import testReducer from '../../features/testSlice/testSlice'

export const rootReducer = combineReducers({
  testSlice : testReducer
});
