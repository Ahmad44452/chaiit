import React from "react";
import { useSelector } from "react-redux";

const UserOverlayContent = () => {

  const userReducer = useSelector(state => state.userReducer)

  return (
    <h1>Welcome {userReducer.username}</h1>
  )
}

export default UserOverlayContent;