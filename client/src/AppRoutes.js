/////////////// DEPENDENCIES 
import React from "react";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

////////////// CUSTOM COMPONENTS
import LoginPage from "./components/LoginPage/index.js";
import BrowseRooms from "./components/BrowseRooms/index.js";

///////////// CSS STYLES
import "./styles/basicStyles.css";
import "./styles/loginPageStyles.css";
import "./styles/browseRoomsStyles.css";
import "./styles/navbarStyles.css";


export const historyObject = createBrowserHistory({ window })

const AppRoutes = () => {


  return (
    <HistoryRouter history={historyObject}>
      <Routes>
        <Route path="rooms" element={<BrowseRooms />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </HistoryRouter>
  )
}

export default AppRoutes;