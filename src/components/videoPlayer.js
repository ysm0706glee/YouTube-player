import { useContext } from "react";
import ReactPlayer from "react-player";

import { SearchContext } from "../context/SearchData";

const VideoPlayer = () => {
  const { videoPlayer } = useContext(SearchContext);

  return <div>{videoPlayer && <ReactPlayer url={videoPlayer} />}</div>;
};

export default VideoPlayer;
