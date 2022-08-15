import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibility: false,
  component: "info"
}

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    showOverlay: (state, action) => {
      state.component = action.payload;
      state.visibility = true;
    },
    hideOverlay: (state, action) => {
      state.visibility = false;
    }
  }
})

export const { showOverlay, hideOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;

