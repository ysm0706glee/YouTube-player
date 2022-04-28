import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ReactPlayer from "react-player";

import { fetcher, slicetext, Slides, Slide } from "../utils";

import { context } from "../context";

const SharedPlaylist = () => {
  const { playlistId } = useParams();

  const { playlist } = useContext(context);

  const { data } = useSWR(
    `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  const [selectedVideoPlayer, setSelectedVideoPlayer] = useState(null);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playNext = () => {
    const nextIndex = currentVideoIndex + 1;
    if (nextIndex <= playlist.length) {
      setSelectedVideoPlayer(playlist[nextIndex].url);
      setCurrentVideoIndex(nextIndex);
    }
  };

  const handleClick = (item, i) => {
    setSelectedVideoPlayer(item.url);
    setCurrentVideoIndex(i);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Playlist by <span style={{ color: "#6667AB" }}>{data?.name}</span>
      </h2>

      <ReactPlayer
        url={selectedVideoPlayer ? selectedVideoPlayer : data?.videos[0].url}
        controls={true}
        onEnded={playNext}
        muted={true}
        playing={true}
        style={{ margin: "0 auto", marginBottom: "3rem" }}
      />

      {data?.videos?.length && (
        <Slides>
          {data.videos.map((x, i) => (
            <Slide
              key={x.id}
              style={{ textAlign: "center", marginBottom: "1rem" }}
            >
              <div>
                <img
                  src={x.thumbnailUrl}
                  width="150rem"
                  height="100rem"
                  style={{ cursor: "pointer" }}
                  alt={x.title}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(x, i);
                  }}
                />
                <div style={{ marginBottom: "1rem" }}>{slicetext(x.title)}</div>
              </div>
            </Slide>
          ))}
        </Slides>
      )}
    </div>
  );
};

export default SharedPlaylist;
