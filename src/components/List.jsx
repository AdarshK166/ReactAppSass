import React from "react";
import ListItem from "./ListItem";

const List = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <ListItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    console.log(video.id);
  });

  return <div className="listDiv">{renderedVideos}</div>;
};
export default List;
