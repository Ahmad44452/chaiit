import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineSend } from "react-icons/ai";
import Picker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { useSelector } from "react-redux";

import NavbarHoc from "../../hoc/NavbarHoc";

const ChatScreen = ({ socket }) => {
  const messageInputRef = useRef();

  const [isEmojiPicker, setEmojiPicker] = useState(false);
  const [messages, setMessages] = useState([]);

  const userReducer = useSelector(state => state.userReducer);

  const onEmojiClick = (event, emojiObject) => {
    messageInputRef.current.value = messageInputRef.current.value + emojiObject.emoji;
  }

  const formik = useFormik({
    initialValues: {
      message: ''
    },
    validationSchema: Yup.object({
      message: Yup.string().required('Message is empty')
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    }
  })

  const handleSubmit = ({ message }) => {
    if (message.trim() && userReducer && userReducer.username) {
      socket.emit('message', {
        text: message,
        name: userReducer.username,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    messageInputRef.current.value = '';
  }

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]))
  }, [socket, messages])

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
          <div className="chatScreen__chat--header" style={{ color: "#fff" }}>header goes brrrr</div>
          <div className="chatScreen__chat--display">
            <div className="chatScreen__chat--message chatScreen__chat--message-incoming">
              <div className="chatScreen__chat--message-user">{"Ahmad Yoooo"}</div>
              <div className="chatScreen__chat--message-text">{"Hello\nHi sad asd asd asd a"}</div>
            </div>
            <div className="chatScreen__chat--message chatScreen__chat--message-incoming">How are you?</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-outgoing">Hi</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-outgoing">I am good</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-outgoing">What about you?</div>
            <div className="chatScreen__chat--message chatScreen__chat--message-incoming">Alhamdullilah I am doing great myself</div>
          </div>

          <form className="chatScreen__chat--form">
            <div onClick={() => setEmojiPicker(prev => !prev)} className="chatScreen__chat--emoji">
              <div className={isEmojiPicker ? "chatScreen__chat--emoji-panel chatScreen__chat--emoji-panel-visible" : "chatScreen__chat--emoji-panel"}>
                <Picker onEmojiClick={onEmojiClick} />
              </div>
              <MdOutlineEmojiEmotions />
            </div>
            <textarea
              ref={messageInputRef}
              autoComplete="off"
              type="text"
              rows="1"
              placeholder="Type message..."
              className="chatScreen__chat--input"
              {...formik.getFieldProps('message')}
              onKeyDown={(e) => {
                const keyCode = e.which || e.keyCode;

                // 13 represents the Enter key
                if (keyCode === 13 && !e.shiftKey) {
                  // Don't generate a new line
                  e.preventDefault();
                  formik.handleSubmit();
                  // console.log("submitted")
                  // console.log(document.querySelector(".chatScreen__chat--form"));
                  // Do something else such as send the message to back-end
                  // ...
                }

              }}
            />
            <button className="chatScreen__chat--submit" type="submit"><AiOutlineSend /></button>
          </form>
        </div>
      </div>
    </NavbarHoc>
  )
}

export default ChatScreen;