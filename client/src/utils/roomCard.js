import React from "react";

const RoomCard = ({ roomName, roomDescription }) => {
  return (
    <div className="roomCard">
      <div className="roomCard__top">
        <h3 className="roomCard__name" >{roomName}</h3>
      </div>
      <div className="roomCard__bottom">
        <div className="roomCard__description">{roomDescription}</div>
        <div className="roomCard__button--container">
          <button className="roomCard__button">Join</button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard;