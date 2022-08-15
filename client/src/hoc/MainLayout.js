import React from "react";
import { useSelector } from "react-redux";

import Overlay from "../components/Overlays/Overlay";
import UserOverlayContent from "../components/Overlays/UserOverlayContent";
import InfoOverlayContent from "../components/Overlays/InfoOverlayContent";
import CreateNewOverlayContent from "../components/Overlays/createNewOverlayContent";

const MainLayout = (props) => {

  const overlayReducer = useSelector(state => state.overlayReducer);

  return (
    <>
      {
        overlayReducer && overlayReducer.visibility ?
          <Overlay>
            {(() => {
              if (overlayReducer) {
                if (overlayReducer.component === "info") {
                  return <InfoOverlayContent />
                } else if (overlayReducer.component === "user") {
                  return <UserOverlayContent />
                } else if (overlayReducer.component === "createRoom") {
                  return <CreateNewOverlayContent />
                }
              }
            })()
            }
          </Overlay> : null
      }

      {props.children}
    </>
  )
}


export default MainLayout;