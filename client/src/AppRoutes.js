/////////////// DEPENDENCIES 
import React from "react";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import socketIO from "socket.io-client";



////////////// CUSTOM COMPONENTS
import MainLayout from "./hoc/MainLayout.js";
import LoginPage from "./components/LoginPage/index.js";
import BrowseRooms from "./components/BrowseRooms/index.js";
import ChatScreen from "./components/ChatScreen/index.js";

///////////// CSS STYLES
import "./styles/basicStyles.css";
import "./styles/loginPageStyles.css";
import "./styles/browseRoomsStyles.css";
import "./styles/navbarStyles.css";
import "./styles/overlay.css";
import "./styles/navbarHoc.css";
import "./styles/chatScreenStyles.css";


export const historyObject = createBrowserHistory({ window })

const socket = socketIO.connect('http://localhost:3001');

const AppRoutes = () => {


  return (
    <MainLayout>
      <HistoryRouter history={historyObject}>
        <Routes>
          <Route path="/chat" element={<ChatScreen socket={socket} />} />
          <Route path="/rooms" element={<BrowseRooms />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </HistoryRouter>
    </MainLayout>
  )
}

export default AppRoutes;