import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { context } from "../context";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 70%;
  height: 20rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const SearchDataList = () => {
  const { searchVideo } = useContext(context);

  return (
    <>
      {searchVideo.length &&
        searchVideo.map((x) => (
          <Card key={x.id.videoId} style={{ margin: "0 auto" }}>
            <Link
              to={`video/${x.id.videoId}`}
              style={{ textDecoration: "none", color: "#18272f" }}
            >
              <ul>
                <li style={{ listStyleType: "none" }}>
                  <div>
                    <img
                      src={x.snippet.thumbnails.url}
                      width="40%"
                      height="40%"
                      alt={x.title}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        paddingTop: "1rem",
                      }}
                    />
                  </div>
                  <h2>{x.title}</h2>
                </li>
              </ul>
            </Link>
          </Card>
        ))}
    </>
  );
};

export default SearchDataList;
