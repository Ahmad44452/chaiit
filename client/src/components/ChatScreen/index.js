import React, { useState, useRef } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import { AiOutlineSend } from "react-icons/ai";
import Picker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md"

import NavbarHoc from "../../hoc/NavbarHoc";

const ChatScreen = () => {

  // const formik = useFormik();
  const messageInputRef = useRef();

  const [isEmojiPicker, setEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    messageInputRef.current.value = messageInputRef.current.value + emojiObject.emoji;
  }

  return (
    <NavbarHoc>
      <div className="chatScreen">
        <div className="chatScreen__online">
          <h3 className="chatScreen__online--header">Online Users</h3>
          <div className="chatScreen__online--user">Ahmad</div>
          <div className="chatScreen__online--user">Nabeel</div>
          <div className="chatScreen__online--user">Afzal</div>
          <div className="chatScreen__online--user">Arslan</div>
        </div>
        <div className="chatScreen__chat">
          <div className="chatScreen__chat--header">header goes brrrr</div>
          <div className="chatScreen__chat--display">
            <div className="chatScreen__chat--message chatScreen__chat--message-incoming">Hello</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-incoming">How are you?</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-outgoing">Hi</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-outgoing">I am good</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-outgoing">What about you?</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-incoming">Alhamdullilah I am doing great myself</div>
          </div>
          <form className="chatScreen__chat--form" >
            <div onClick={() => setEmojiPicker(prev => !prev)} className="chatScreen__chat--emoji">
              <div className={isEmojiPicker ? "chatScreen__chat--emoji-panel chatScreen__chat--emoji-panel-visible" : "chatScreen__chat--emoji-panel"}>
                <Picker onEmojiClick={onEmojiClick} />
              </div>
              <MdOutlineEmojiEmotions />
            </div>
            <textarea ref={messageInputRef} autoComplete="off" type="text" rows="1" placeholder="Type message..." className="chatScreen__chat--input" />
            <button className="chatScreen__chat--submit" type="submit"><AiOutlineSend /></button>
          </form>
        </div>
      </div>
    </NavbarHoc>
  )
}

export default ChatScreen;