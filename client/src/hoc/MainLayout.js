import React from "react";
import { useSelector } from "react-redux";

import Overlay from "../components/Overlays/Overlay";
import UserOverlayContent from "../components/Overlays/UserOverlayContent";
import InfoOverlayContent from "../components/Overlays/InfoOverlayContent";

const MainLayout = (props) => {

  const overlayReducer = useSelector(state => state.overlayReducer);

  return (
    <>
      {
        overlayReducer && overlayReducer.visibility ?
          <Overlay>
            {
              overlayReducer && overlayReducer.component === "info" ?
                <InfoOverlayContent /> : <UserOverlayContent />
            }
          </Overlay> : null
      }

      {props.children}
    </>
  )
}


export default MainLayout;