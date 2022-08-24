import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import NavbarHoc from "../../hoc/NavbarHoc";

import { getRoomInfoApi, getPeopleConnectedApi } from "../../store/api/roomsApi";
import { delRoomInfo } from "../../store/slices/roomsSlice";

import { historyObject } from "../../AppRoutes";

const ChatScreen = ({ socket }) => {

  const { roomId } = useParams();

  const messageInputRef = useRef();
  const lastMessageRef = useRef();
  const dispatch = useDispatch();

  const [allMessages, setAllMessages] = useState([]);
  const [isContentLoading, setContentLoading] = useState(true);
  const [isConnectedUsersVisible, setConnectedUsersVisible] = useState(false);
  const [isConnectedPeopleLoading, setConnectedPeopleLoading] = useState(false);

  const userReducer = useSelector(state => state.userReducer);
  const roomsReducer = useSelector(state => state.roomsReducer);

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
        text: message.trim(),
        name: userReducer.username,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        roomId: roomId
      });
      formik.resetForm();
    }

  }

  useEffect(() => {
    if (userReducer && userReducer.username === "") {
      historyObject.replace("/");
    }
  }, [userReducer])

  useEffect(() => {
    socket.on("messageResponse", (data) => setAllMessages(prev => [...prev, data]));
  }, [socket])

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behaviour: 'smooth' })
  }, [allMessages])

  useEffect(() => {

    if (roomsReducer && roomsReducer.connectedRoomId === "") {
      setContentLoading(true);
      dispatch(getRoomInfoApi(roomId)).then(() => {
        socket.emit("join_room", roomId);
        setContentLoading(false);
      });
    }

  }, [dispatch, roomId, roomsReducer, socket])

  useEffect(() => {
    return () => {
      socket.emit("leave_room", roomId);
      dispatch(delRoomInfo())
    }
  }, [dispatch])

  return (
    <NavbarHoc>
      <div className="chatScreen">
        {
          isContentLoading ?
            (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
            :
            (
              <>
                <div className={isConnectedUsersVisible ? "chatScreen__online chatScreen__online--show" : "chatScreen__online"}>
                  <div className="chatScreen__online--close">
                    <AiOutlineClose onClick={() => setConnectedUsersVisible(false)} />
                  </div>
                  {
                    isConnectedPeopleLoading ?
                      (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
                      :
                      (
                        <>
                          <h3 className="chatScreen__online--header">Online Users</h3>
                          {
                            roomsReducer.connectedPeople.map((item, index) => (
                              <div key={index} className="chatScreen__online--user">{item}</div>
                            ))
                          }
                        </>
                      )
                  }

                </div>
                <div className="chatScreen__chat">
                  <div className="chatScreen__chat--header">
                    <Link to={"/rooms"}>
                      <button><BiArrowBack /></button>
                    </Link>
                    <div>{roomsReducer.connectedRoomName}</div>
                    <button onClick={() => {
                      setConnectedPeopleLoading(true);
                      setConnectedUsersVisible(true);
                      dispatch(getPeopleConnectedApi(roomId)).then(() => { setConnectedPeopleLoading(false); })
                    }} ><GiHamburgerMenu /></button>
                  </div>
                  <div className="chatScreen__chat--display">
                    {
                      allMessages ?
                        allMessages.map(item => (
                          <div key={item.id} className={item.socketID === socket.id ? "chatScreen__chat--message chatScreen__chat--message-outgoing" : "chatScreen__chat--message chatScreen__chat--message-incoming"} >
                            <div className="chatScreen__chat--message-user">{item.socketID === socket.id ? "You" : item.name}</div>
                            <div className="chatScreen__chat--message-text">{item.text}</div>
                          </div>
                        ))
                        : null
                    }
                    <div ref={lastMessageRef}></div>
                  </div>

                  <form className="chatScreen__chat--form">
                    <textarea
                      autoComplete="off"
                      type="text"
                      rows="1"
                      placeholder="Type message..."
                      ref={messageInputRef}
                      className="chatScreen__chat--input"

                      onKeyDown={(e) => {
                        const keyCode = e.which || e.keyCode;

                        // 13 represents the Enter key
                        if (keyCode === 13 && !e.shiftKey) {
                          // Don't generate a new line
                          e.preventDefault();
                          formik.submitForm();
                          // console.log("submitted")
                          // console.log(document.querySelector(".chatScreen__chat--form"));
                          // Do something else such as send the message to back-end
                          // ...
                        }
                      }}

                      {...formik.getFieldProps('message')}
                    />
                    <button className="chatScreen__chat--submit" onClick={(e) => { e.preventDefault(); formik.submitForm(); }} type="submit"><AiOutlineSend /></button>
                  </form>
                </div>
              </>
            )
        }

      </div>
    </NavbarHoc>
  )
}

export default ChatScreen;