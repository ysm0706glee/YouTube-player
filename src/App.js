import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { getPlaylist } from "./utils";

import Form from "./components/Form";
import VideoPlayer from "./components/VideoPlayer";

import { context } from "./context";

function App() {
  const { setPlaylist } = useContext(context);

  useEffect(() => {
    let username = null;

    if (!localStorage.getItem("username")) {
      username = window.prompt("What is your name?");
      localStorage.setItem("username", username);

      const createPlaylist = async () => {
        try {
          const res = await axios.post(
            "https://youtube.thorsteinsson.is/api/playlists",
            {
              name: `${username}'s playlist`,
            }
          );
          localStorage.setItem("id", res.data.id);
        } catch (error) {
          console.error(error);
        }
      };

      createPlaylist();
    } else {
      username = localStorage.getItem("username");
      const id = localStorage.getItem("id");

      getPlaylist(id, setPlaylist);
    }
  }, []);

  return (
    <>
      <Form />
      <VideoPlayer />
      <Outlet />
    </>
  );
}

export default App;
