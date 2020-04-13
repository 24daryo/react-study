import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { ICounter } from '../actions';

export interface ICounterState {
  counter: ICounter;
}

export const reducers = combineReducers<ICounterState>({
  counter: counterReducer,
});
