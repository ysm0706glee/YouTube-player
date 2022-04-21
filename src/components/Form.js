import { useState, useContext } from "react";
import axios from "axios";

import { SearchContext } from "../context/SearchData";

function App() {
  const { setSearchData } = useContext(SearchContext);

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const getSearch = async () => {
      try {
        const res = await axios.get(
          `https://youtube.thorsteinsson.is/api/search?q=${searchText}`
        );
        setSearchData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchText) return getSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Search videos</button>
    </form>
  );
}

export default App;
