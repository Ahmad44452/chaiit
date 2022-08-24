import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  socketID: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.username = action.payload.username;
      state.socketID = action.payload.socketID;
    }
  }
})

export const { signInUser } = userSlice.actions;

export default userSlice.reducer;