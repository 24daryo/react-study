import { ActionTypes } from './types';

export interface ICounter {
  value: number;
}

export interface IUpdateCounter {
  type: ActionTypes.increaseCounter | ActionTypes.decreaseCounter;
  payload: number;
}

export const updateCounter = (toIncrease: boolean) => {
  const type = toIncrease
    ? ActionTypes.increaseCounter
    : ActionTypes.decreaseCounter;

  return {
    type,
    payload: 1,
  };
};
