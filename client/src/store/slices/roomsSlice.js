import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  connectedRoomId: "",
  connectedRoomName: "",
  connectedPeople: []
}

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    getRooms: (state, action) => {
      state.rooms = action.payload
    },
    getRoomInfo: (state, action) => {
      state.connectedRoomId = action.payload.roomId;
      state.connectedRoomName = action.payload.roomName;
    },
    delRoomInfo: (state, action) => {
      state.connectedRoomId = "";
      state.connectedRoomName = "";
      state.connectedPeople = []
    },
    getPeopleConnected: (state, action) => {
      state.connectedPeople = [...action.payload]
    }
  }
})

export const { getRooms, getRoomInfo, delRoomInfo, getPeopleConnected } = roomsSlice.actions;

export default roomsSlice.reducer;

