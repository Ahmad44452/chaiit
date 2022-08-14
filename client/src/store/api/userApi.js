// import axios from "axios";

import { setUsername } from "../slices/userSlice";

import { historyObject } from "../../AppRoutes";


export const setUsernameApi = (username) => {
  return async (dispatch, state) => {
    try {
      dispatch(setUsername(username));
      historyObject.push('/rooms')
    } catch (error) {
      throw error;
    }
  }
}
