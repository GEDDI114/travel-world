import React from "react";
import VideoHeaderStyle from "./VideoHeader.module.css";
import VideoImage from "../../../../Assets/play-button.png";
const VideoHeader = () => {
  return (
    <>
      <div className={VideoHeaderStyle.Container}>
        <div className={VideoHeaderStyle.Outer}>
          <div className={VideoHeaderStyle.Inner}>
            <img src={VideoImage} alt="" />
          </div>
        </div>
        <h2>Watch Video</h2>
      </div>
    </>
  );
};

export default VideoHeader;
