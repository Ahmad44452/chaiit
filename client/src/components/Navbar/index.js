import React from "react";
import { AiOutlineUser, AiOutlineInfo } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__logo">chait</h1>
      </div>
      <div className="navbar__right">
        <div className="navbar__icon navbar__icon--user">
          <AiOutlineUser />
        </div>
        <div className="navbar__icon navbar__icon--info">
          <AiOutlineInfo />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;