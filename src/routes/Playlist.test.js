import { render, screen, waitFor } from "@testing-library/react";

import { ContextProvider } from "../context";

import Playlist from "./Playlist";

describe("Playlist", () => {
  test("displays playlist", async () => {
    render(
      <ContextProvider
        initialPlaylist={[
          {
            id: "Y1sWOW23md0",
            thumbnailUrl: "https://i.ytimg.com/vi/Y1sWOW23md0/hqdefault.jpg",
            title: "Angèle - Libre [ CLIP OFFICIEL ]",
            url: "https://www.youtube.com/watch?v=Y1sWOW23md0",
          },
        ]}
      >
        <Playlist />
      </ContextProvider>
    );

    const playlist = await waitFor(() => screen.findAllByTestId("playlist"));

    expect(playlist).toHaveLength(1);
  });
});
