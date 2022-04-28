import { useContext } from "react";
import ReactPlayer from "react-player";

import { playNext } from "../utils";

import { context } from "../context";

const VideoPlayer = () => {
  const {
    videoPlayer,
    playlist,
    setVideoPlayer,
    currentVideoIndex,
    setCurrentVideoIndex,
  } = useContext(context);

  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      {videoPlayer && (
        <>
          <ReactPlayer
            url={videoPlayer}
            controls={true}
            onEnded={() =>
              playNext(
                currentVideoIndex,
                playlist,
                setVideoPlayer,
                setCurrentVideoIndex
              )
            }
            muted={true}
            playing={true}
            style={{ margin: "0 auto" }}
          />
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
