import axios from "axios";

import { signInUser } from "../slices/userSlice";
import { showGlobalError, hideGlobalError } from "../slices/globalErrorSlice";

import { historyObject } from "../../AppRoutes";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const signInUserApi = (username, socketID) => {
  return async (dispatch, state) => {
    try {
      const user = await axios.post('/api/user/signin', {
        username,
        socketID
      })

      await dispatch(signInUser({ username: user.data.username, socketID: user.data.socketID }));
      historyObject.push('/rooms')
    } catch (error) {

      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }

      dispatch(showGlobalError(errorMessage));
      setTimeout(() => {
        dispatch(hideGlobalError());
      }, 3500)
    }
  }
}