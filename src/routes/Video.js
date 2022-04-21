import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

import { SearchContext } from "../context/SearchData";

const fetcher = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const Video = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setVideoPlayer } = useContext(SearchContext);

  const { data } = useSWR(
    `https://youtube.thorsteinsson.is/api/videos/${id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setVideoPlayer(data.url);
    }
  }, [data, setVideoPlayer]);

  return (
    <>
      <button onClick={() => navigate("/")}>Back</button>
      {data && (
        <div>
          <span>{data.title}</span>
          <p>{data.description}</p>
        </div>
      )}
      ))
    </>
  );
};

export default Video;
