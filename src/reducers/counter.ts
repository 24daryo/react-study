import { ICounter, IUpdateCounter } from '../actions';
import { ActionTypes } from '../actions/types';

export const counterReducer = (
  state: ICounter = { value: 0 },
  action: IUpdateCounter
) => {
  switch (action.type) {
    case ActionTypes.increaseCounter:
      return {
        value: state.value + action.payload,
      };
    case ActionTypes.decreaseCounter:
      return {
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
