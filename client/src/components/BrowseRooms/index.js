import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import NavbarHoc from "../../hoc/NavbarHoc";

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
      <NavbarHoc>
        <h1>BrowseRooms</h1>
      </NavbarHoc>
    </>
  )
}

export default BrowseRooms;