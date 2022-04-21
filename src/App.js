import { Outlet } from "react-router-dom";

import VideoPlayer from "./components/videoPlayer";

function App() {
  return (
    <>
      <VideoPlayer />
      <Outlet />
    </>
  );
}

export default App;
