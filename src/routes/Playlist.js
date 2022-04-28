import { useContext } from "react";
import axios from "axios";

import { getPlaylist, playNext, slicetext, Slide, Slides } from "../utils";

import { context } from "../context";

const username = localStorage.getItem("username");
const id = localStorage.getItem("id");

const Playlist = () => {
  const {
    videoPlayer,
    setVideoPlayer,
    playlist,
    setPlaylist,
    currentVideoIndex,
    setCurrentVideoIndex,
  } = useContext(context);

  const handleDelete = (e, videoId) => {
    e.preventDefault();

    if (videoPlayer?.indexOf(id) !== -1) {
      playNext(
        currentVideoIndex,
        playlist,
        setVideoPlayer,
        setCurrentVideoIndex
      );
    }

    const updatePlaylist = async () => {
      try {
        await axios.put(
          `https://youtube.thorsteinsson.is/api/playlists/${id}`,
          {
            name: username,
            videos: playlist?.filter((x) => x.id !== videoId),
          }
        );

        getPlaylist(id, setPlaylist);
      } catch (error) {
        console.error(error);
      }
    };

    updatePlaylist();
  };

  const handleClick = (item, i) => {
    setVideoPlayer(item.url);
    setCurrentVideoIndex(i);
  };

  return (
    <>
      <Slides>
        {playlist?.map((x, i) => (
          <Slide
            data-testid="playlist"
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
              <button
                onClick={(e) => handleDelete(e, x.id)}
                style={{ border: "none", background: "transparent" }}
                data-testid="delete-button"
              >
                Delete from 💙
              </button>
            </div>
          </Slide>
        ))}
      </Slides>
    </>
  );
};

export default Playlist;
