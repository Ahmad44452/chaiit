import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import overlayReducer from "./slices/overlaySlice";


const store = configureStore({
  reducer: {
    userReducer,
    overlayReducer
  }
})

export default store;