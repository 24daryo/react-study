import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//ステートを記述
type State = {
  count: number;
};

//初期値を記入
const initialState: State = {
  count: 0,
};

// createSlice() で actions と reducers を一気に生成
const counterModule = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state: State, action: PayloadAction<string>) {
      state.count++;
    },
    decrement(state: State, action: PayloadAction<string>) {
      state.count--;
    },
  },
});

export default counterModule;
