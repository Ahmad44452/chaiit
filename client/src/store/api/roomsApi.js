import axios from "axios";

import { getRooms, getRoomInfo, getPeopleConnected } from "../slices/roomsSlice";
import { showGlobalError, hideGlobalError } from "../slices/globalErrorSlice";
import { hideOverlay } from "../slices/overlaySlice";

import { historyObject } from "../../AppRoutes";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const getRoomsApi = () => {
  return async (dispatch) => {
    try {
      const rooms = await axios.get("/api/room/getAll");
      dispatch(getRooms(rooms.data))
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

export const getRoomInfoApi = (roomId) => {
  return async (dispatch) => {
    try {
      const room = await axios.get(`/api/room/getRoomData/${roomId}`);

      dispatch(getRoomInfo({ roomId: room.data._id, roomName: room.data.name }))
    } catch (error) {
      historyObject.replace("/rooms")
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


export const createRoomApi = (roomName, roomDescription) => {
  return async (dispatch) => {
    try {
      const newRoom = await axios.post("/api/room/create", {
        name: roomName,
        description: roomDescription
      })

      dispatch(hideOverlay());
      historyObject.push(`/chat/${newRoom.data._id}`);

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

export const getPeopleConnectedApi = (roomId) => {
  return async (dispatch) => {
    try {

      const people = await axios.get(`/api/room//getConnectedUsers/${roomId}`);
      dispatch(getPeopleConnected(people.data));

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
