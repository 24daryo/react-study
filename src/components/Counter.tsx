import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterModule from "../modules/counterModule";
import { RootState } from "../rootReducer";

const Counter = () => {
  // dispatch の取得
  const dispatch = useDispatch();
  // state の取得
  const counter = useSelector((state: RootState) => state.counter.count);

  const onIncrement = () => dispatch(counterModule.actions.increment(""));
  const onDecrement = () => dispatch(counterModule.actions.decrement(""));

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
