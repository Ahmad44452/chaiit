import React from "react";
import linkedInImg from "./images/linkedin.png";
import githubImg from "./images/github.png"

const InfoOverlayContent = () => {
  return (
    <div className="infoOverlay">
      <h1 className="infoOverlay__heading">Made with <span className="infoOverlay__heading--heart">♥</span> by Ahmad Ghani</h1>
      <div className="infoOverlay__links">
        <a className="infoOverlay__link infoOverlay__link--linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmadghani">
          <img className="infoOverlay__link--img" src={linkedInImg} alt="LinkedIn Logo" />

          <span className="infoOverlay__link--text">/in/ahmadghani</span>
        </a>
        <a className="infoOverlay__link infoOverlay__link--github" target="_blank" rel="noreferrer" href="https://www.github.com/ahmad44452">
          <img className="infoOverlay__link--img" src={githubImg} alt="Github Logo" />
          <span className="infoOverlay__link--text">/ahmad44452</span>
        </a>
      </div>

    </div>
  )
}

export default InfoOverlayContent;