import React from "react";

import Navbar from "../components/Navbar";

const NavbarHoc = (props) => {
  return (
    <div className="navbarhoc__container" >
      <div className="navbarhoc__navbar">
        <Navbar />
      </div>
      <div className="navbarhoc__content">
        {props.children}
      </div>
    </div>
  )
}

export default NavbarHoc;