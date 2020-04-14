import { combineReducers } from "@reduxjs/toolkit";
//必要なモジュールをインポートする
import counterModule from "./modules/counterModule";

//ここに各モジュールを列挙する
const rootReducer = combineReducers({
  //ここでstate.？？？に作用する
  counter: counterModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
