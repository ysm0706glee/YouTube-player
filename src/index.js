import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SearchDataProvider } from "./context/SearchData";
import App from "./App";
import Video from "./routes/Video";
import List from "./routes/List";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchDataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<List />} />
          <Route path="video/:id" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </SearchDataProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
