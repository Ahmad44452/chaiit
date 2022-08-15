import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai"

import { hideOverlay } from "../../store/slices/overlaySlice";

const Overlay = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="overlay">
      <div className="overlay__container">
        <div className="overlay__close">
          <AiOutlineClose onClick={() => dispatch(hideOverlay())} />
        </div>
        <div className="overlay__content">
          {/*content goes here*/}
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Overlay;