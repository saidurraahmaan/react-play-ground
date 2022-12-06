import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTick: false,
};

export const CounterSlice = createSlice({
  name: "isTick",
  initialState,
  reducers: {
    setTick: (state, action) => ({
      ...state,
      isTick: action.payload,
    }),
  },
});

export const { setTick } = CounterSlice.actions;
export default CounterSlice.reducer;
