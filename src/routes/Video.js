import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

import { fetcher, getPlaylist } from "../utils";

import { context } from "../context";

const id = localStorage.getItem("id");
const username = localStorage.getItem("username");

const Video = () => {
  const { videoId } = useParams();

  const { setVideoPlayer, playlist, setPlaylist } = useContext(context);

  const [heart, setHeart] = useState(false);

  const { data } = useSWR(
    `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
    fetcher
  );

  const handleHeart = async (e) => {
    e.preventDefault();

    if (e.target.innerText === "Add 💙") {
      try {
        await axios.put(
          `https://youtube.thorsteinsson.is/api/playlists/${id}`,
          {
            name: username,
            videos: [
              {
                id: data?.videoId,
                title: data.title,
                thumbnailUrl: data?.thumbnailUrl,
                url: data?.url,
              },
              ...playlist,
            ],
          }
        );

        // e.target.innerText = "Delete from 💙";
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await axios.put(
          `https://youtube.thorsteinsson.is/api/playlists/${id}`,
          {
            name: username,
            videos: playlist.filter((x) => x.id !== data.videoId),
          }
        );

        // e.target.innerText = "Add 💙";
      } catch (error) {
        console.error(error);
      }
    }

    getPlaylist(id, setPlaylist);
  };

  useEffect(() => {
    setVideoPlayer(data?.url);
  }, [data, setVideoPlayer]);

  useEffect(() => {
    const isAdded = () => {
      return playlist.map((x) => x.id).includes(data?.videoId);
    };
    setHeart(isAdded());
  }, [playlist, data?.videoId]);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={handleHeart}
        style={{ border: "none", background: "transparent" }}
      >
        {data && heart ? "Delete from 💙" : "Add 💙"}
      </button>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      )}
      ))
    </div>
  );
};

export default Video;
