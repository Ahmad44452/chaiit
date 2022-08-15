import React from "react";
import { AiOutlineUser, AiOutlineInfo } from "react-icons/ai";
import { useDispatch } from "react-redux"

import { showOverlay } from "../../store/slices/overlaySlice";

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__logo">chait</h1>
      </div>
      <div className="navbar__right">
        <div className="navbar__icon navbar__icon--user">
          <AiOutlineUser onClick={() => dispatch(showOverlay("user"))} />
        </div>
        <div className="navbar__icon navbar__icon--info">
          <AiOutlineInfo onClick={() => dispatch(showOverlay("info"))} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;