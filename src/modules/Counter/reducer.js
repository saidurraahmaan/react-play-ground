import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounterValue: (state, action) => ({
      ...state,
      value: action.payload,
    }),
  },
});

export const { setCounterValue } = CounterSlice.actions;
export default CounterSlice.reducer;
