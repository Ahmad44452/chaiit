import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibility: false,
  message: "Global Error From Slice"
}

const globalErrorSlice = createSlice({
  name: 'globalError',
  initialState,
  reducers: {
    showGlobalError: (state, action) => {
      state.message = action.payload;
      state.visibility = true;
    },
    hideGlobalError: (state, action) => {
      state.visibility = false;
    }
  }
})

export const { showGlobalError, hideGlobalError } = globalErrorSlice.actions;

export default globalErrorSlice.reducer;

