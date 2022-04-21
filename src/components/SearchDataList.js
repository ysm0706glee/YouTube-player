import { useContext } from "react";
import { Link } from "react-router-dom";

import { SearchContext } from "../context/SearchData";

const SearchDataList = () => {
  const { searchData } = useContext(SearchContext);

  return (
    <>
      {searchData.length &&
        searchData.map((x) => (
          <div key={x.id.videoId}>
            <h1>{x.title}</h1>
            <Link to={`video/${x.id.videoId}`}>Details</Link>
          </div>
        ))}
    </>
  );
};

export default SearchDataList;
