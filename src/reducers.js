import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./modules/Counter/reducer";
import TickReducer from "./modules/Tick/reducer";

const combinedReducer = combineReducers({
  Counter: CounterReducer,
  Tick: TickReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
