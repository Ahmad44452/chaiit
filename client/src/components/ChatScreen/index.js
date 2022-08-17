import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import NavbarHoc from "../../hoc/NavbarHoc";

const ChatScreen = () => {

  const formik = useFormik();

  return (
    <NavbarHoc>
      <div className="chatScreen">
        <div className="chatScreen__online">
          <div className="chatScreen__online--user">Ahmad</div>
          <div className="chatScreen__online--user">Nabeel</div>
          <div className="chatScreen__online--user">Afzal</div>
          <div className="chatScreen__online--user">Arslan</div>
        </div>
        <div className="chatScreen__chat">
          <div className="chatScreen__chat--display">
            <div className="chatScreen__chat--message">Hello</div>
            <div className="chatScreen__chat--message">How are you?</div>
          </div>
          <form>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </NavbarHoc>
  )
}

export default ChatScreen;