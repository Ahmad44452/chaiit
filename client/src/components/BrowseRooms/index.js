import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


import NavbarHoc from "../../hoc/NavbarHoc";
import { showOverlay } from "../../store/slices/overlaySlice";
import RoomCard from "../../utils/roomCard";

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
          {/* <div className="browseRooms__rooms"> */}
          <ResponsiveMasonry
            className="browseRooms__rooms"
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1300: 3 }}
          >
            <Masonry gutter="20px">
              <RoomCard roomName={"Room 1"} roomDescription={"Room 1 Description"} />
              <RoomCard roomName={"Room 2"} roomDescription={"Room 2 Description"} />
              <RoomCard roomName={"Room 3"} roomDescription={"Room 3 Description"} />
              <RoomCard roomName={"AHMADGHANIAHMADGHANI"} roomDescription={"Room 4 Description"} />
              <RoomCard roomName={"Room 5"} roomDescription={"Room 5 Description"} />
              <RoomCard roomName={"Room 6"} roomDescription={"Room 6 Description"} />
              <RoomCard roomName={"Room 7"} roomDescription={"Room 7 Description"} />
              <RoomCard roomName={"Room 8"} roomDescription={"Room 8 Description"} />
              <RoomCard roomName={"Room 9"} roomDescription={"Room 9 Description"} />
              <RoomCard roomName={"Room 10"} roomDescription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p`} />
              <RoomCard roomName={"Room 15"} roomDescription={`Room 15 Description lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum`} />
            </Masonry>
          </ResponsiveMasonry>

          {/* </div> */}
        </div>
      </NavbarHoc>
    </>
  )
}

export default BrowseRooms;