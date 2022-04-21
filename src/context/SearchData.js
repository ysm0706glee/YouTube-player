import { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [videoPlayer, setVideoPlayer] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchData, setSearchData, videoPlayer, setVideoPlayer }}
    >
      {children}
    </SearchContext.Provider>
  );
};
