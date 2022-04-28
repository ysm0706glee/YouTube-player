import { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = ({ children, initialPlaylist }) => {
  const [searchVideo, setSearchVideo] = useState([]);
  const [videoPlayer, setVideoPlayer] = useState("");
  const [playlist, setPlaylist] = useState(initialPlaylist || []);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <context.Provider
      value={{
        searchVideo,
        setSearchVideo,
        videoPlayer,
        setVideoPlayer,
        playlist,
        setPlaylist,
        currentVideo,
        setCurrentVideo,
        currentVideoIndex,
        setCurrentVideoIndex,
      }}
    >
      {children}
    </context.Provider>
  );
};
