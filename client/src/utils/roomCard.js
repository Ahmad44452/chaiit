import React from "react";

import { Link } from "react-router-dom";

const RoomCard = ({ roomName, roomDescription, roomId }) => {
  return (
    <div className="roomCard">
      <div className="roomCard__top">
        <h3 className="roomCard__name" >{roomName}</h3>
      </div>
      <div className="roomCard__bottom">
        <div className="roomCard__description">{roomDescription}</div>
        <div className="roomCard__button--container">
          <Link to={`/chat/${roomId}`}>
            <button className="roomCard__button">Join</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoomCard;