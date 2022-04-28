import axios from "axios";

import styled from "styled-components";

export const fetcher = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPlaylist = async (id, setPlaylist) => {
  try {
    const res = await axios.get(
      `https://youtube.thorsteinsson.is/api/playlists/${id}`
    );
    setPlaylist(res.data.videos);
  } catch (error) {
    console.error(error);
  }
};

export const playNext = (
  currentVideoIndex,
  playlist,
  setVideoPlayer,
  setCurrentVideoIndex
) => {
  const nextIndex = currentVideoIndex + 1;

  if (nextIndex <= playlist.length) {
    setVideoPlayer(playlist[nextIndex].url);
    setCurrentVideoIndex(nextIndex);
  }
};

export const slicetext = (text) =>
  text.length > 20 ? text.slice(0, 20) + "…" : text;

export const SearchInput = styled.input`
  width: 20rem;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  transition: 0.3s border-color;

  &:hover {
    border: 1px solid #aaa;
  }
`;

export const Slide = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 15rem;
  height: 15rem;
  margin-right: 3rem;
  border-radius: 10px;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Slides = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
