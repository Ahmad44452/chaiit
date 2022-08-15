import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai"

import NavbarHoc from "../../hoc/NavbarHoc";
import { showOverlay } from "../../store/slices/overlaySlice";

import { historyObject } from "../../AppRoutes";

const BrowseRooms = () => {

  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userReducer && userReducer.username === "") {
      historyObject.replace("/")
    }
  }, [userReducer])

  return (
    <>
      <NavbarHoc>
        <div className="browseRooms">
          <div className="browseRooms__header">
            <h2 className="browseRooms__header--heading">Available rooms</h2>
            <button className="browseRooms__header--button" onClick={() => dispatch(showOverlay('createRoom'))} >Create New <AiOutlinePlus /></button>
          </div>
        </div>
      </NavbarHoc>
    </>
  )
}

export default BrowseRooms;