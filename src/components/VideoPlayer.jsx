import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="playerDiv bounceIn">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="playerDesc">
        <h4 className="playerTitle">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
