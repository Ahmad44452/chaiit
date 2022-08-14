import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";

import { historyObject } from "../../AppRoutes";

const BrowseRooms = () => {

  const userReducer = useSelector(state => state.userReducer)

  useEffect(() => {
    if (userReducer && userReducer.username === "") {
      historyObject.replace("/")
    }
  }, [userReducer])

  return (
    <>
      <Navbar />
      <h1>BrowseRooms</h1>
    </>
  )
}

export default BrowseRooms;