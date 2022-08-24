import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import overlayReducer from "./slices/overlaySlice";
import globalErrorReducer from "./slices/globalErrorSlice";
import roomsReducer from "./slices/roomsSlice";

const store = configureStore({
  reducer: {
    userReducer,
    overlayReducer,
    globalErrorReducer,
    roomsReducer
  }
})

export default store;