import React from "react";
import { useSelector } from "react-redux";

import Overlay from "../components/Overlays/Overlay";
import InfoOverlayContent from "../components/Overlays/InfoOverlayContent";
import CreateNewOverlayContent from "../components/Overlays/createNewOverlayContent";
import GlobalError from "../components/GlobalError";

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
                } else if (overlayReducer.component === "createRoom") {
                  return <CreateNewOverlayContent />
                }
              }
            })()
            }
          </Overlay> : null
      }
      <GlobalError />
      {props.children}
    </>
  )
}


export default MainLayout;