import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./context";
import App from "./App";
import SearchVideo from "./routes/SearchVideosList";
import Video from "./routes/Video";
import Playlist from "./routes/Playlist";
import SharedPlaylist from "./routes/SharedPlaylist";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SearchVideo />} />
          <Route path="video/:videoId" element={<Video />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
        <Route path="SharedPlaylist/:playlistId" element={<SharedPlaylist />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
