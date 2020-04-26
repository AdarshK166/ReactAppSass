import React from "react";
//import "../style/video.css";

const ListItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item item">
      <img
        className="itemThumb"
        src={video.snippet.thumbnails.medium.url}
        //alt={video.snippet.description}
      />
      <div className="titleDisplay">
        <div className="itemTitle">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default ListItem;
