import { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { SearchInput } from "../utils";

const id = localStorage.getItem("id");

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  p: 4,
  textAlign: "center",
};

const ShareModal = () => {
  const [open, setOpen] = useState(false);
  const [idInput, setIdInput] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        style={{ background: "transparent", border: "1px solid transparent" }}
        onClick={handleOpen}
      >
        Share
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div style={{ marginBottom: "1rem" }}>
            Share your playlist with{" "}
            <span style={{ color: "#6667AB" }}>{id}</span>
          </div>

          <form>
            <SearchInput
              style={{ marginRight: "0.5rem", width: "10rem" }}
              type="text"
              placeholder="paste a playlist ID here"
              onChange={(e) => setIdInput(e.target.value)}
            />
            {idInput && (
              <Link
                to={`SharedPlaylist/${idInput}`}
                style={{ textDecoration: "none", color: "#18272f" }}
              >
                Let's go
              </Link>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ShareModal;
