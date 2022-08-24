import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import NavbarHoc from "../../hoc/NavbarHoc";
import { showOverlay } from "../../store/slices/overlaySlice";
import { getRoomsApi } from "../../store/api/roomsApi";
import { delRoomInfo } from "../../store/slices/roomsSlice";

import RoomCard from "../../utils/roomCard";

import { historyObject } from "../../AppRoutes";

const BrowseRooms = ({ socket }) => {

  const [isContentLoading, setContentLoading] = useState(true);

  const userReducer = useSelector(state => state.userReducer);
  const roomsReducer = useSelector(state => state.roomsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userReducer && userReducer.username === "") {
      historyObject.replace("/")
    }
  }, [userReducer])

  useEffect(() => {
    setContentLoading(true);
    dispatch(getRoomsApi()).then(() => setContentLoading(false))
  }, [dispatch])

  useEffect(() => {
    if (roomsReducer && roomsReducer.connectedRoomId !== "") {
      socket.emit("leave_room", roomsReducer.connectedRoomId);
      dispatch(delRoomInfo());
    }
  }, [roomsReducer, dispatch, socket])

  return (
    <>
      <NavbarHoc>
        <div className="browseRooms">
          {
            isContentLoading ? (
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            )
              :
              (
                <>
                  <div className="browseRooms__header">
                    <h2 className="browseRooms__header--heading">Available rooms</h2>
                    <button className="browseRooms__header--button" onClick={() => dispatch(showOverlay('createRoom'))} >Create New <AiOutlinePlus /></button>
                  </div>

                  <ResponsiveMasonry
                    className="browseRooms__rooms"
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1300: 3 }}
                  >
                    <Masonry gutter="20px">
                      {
                        roomsReducer.rooms.map((item) => (
                          <RoomCard key={item._id} roomName={item.name} roomDescription={item.description} roomId={item._id} />
                        ))
                      }


                    </Masonry>
                  </ResponsiveMasonry>
                </>
              )

          }


        </div>
      </NavbarHoc>
    </>
  )
}

export default BrowseRooms;