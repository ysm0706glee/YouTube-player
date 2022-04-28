import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { SearchInput } from "../utils";

import { context } from "../context";

import ShareModal from "./ShareModal";

const backgroundPosition = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const SearchButton = styled.button`
  background: linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5);
  background-size: 800% 400%;
  display: inline-block;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 0.5rem;
  transition: all 0.5s ease-in-out;
  animation: ${backgroundPosition} 10s infinite
    cubic-bezier(0.62, 0.28, 0.23, 0.99) both;

  &:hover {
    animation: ${backgroundPosition} 3s infinite;
    transform: scale(1.05);
  }

  &:active {
    animation: ${backgroundPosition} 3s infinite;
    transform: scale(0.8);
  }
`;

function Form() {
  const navigate = useNavigate();

  const { setSearchVideo } = useContext(context);

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const getSearch = async () => {
      try {
        const res = await axios.get(
          `https://youtube.thorsteinsson.is/api/search?q=${searchText}`
        );
        setSearchVideo(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchText) {
      getSearch();
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "10%" }}></div>
        <form onSubmit={handleSubmit} style={{ display: "inherit" }}>
          <SearchInput
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
          <SearchButton>Search videos</SearchButton>
        </form>

        <div style={{ display: "flex", alignItems: "center", width: "10%" }}>
          <Link
            to={"playlist"}
            style={{ textDecoration: "none", marginRight: "1rem" }}
          >
            💙
          </Link>

          <ShareModal />
        </div>
      </div>
    </>
  );
}

export default Form;
