import React from "react";

const ListItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item item">
      <img className="itemThumb" src={video.snippet.thumbnails.medium.url} />
      <div className="titleDisplay">
        <div className="itemTitle">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default ListItem;
