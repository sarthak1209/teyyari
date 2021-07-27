import { useState } from "react";
import { usePlaylist } from "../contexts/playlist-context";

export function Aside() {
  const [createPlaylistForm, setCreatePlaylistForm] = useState();
  const [playlistName, setPlaylistName] = useState();
  const { playlists, playlistDispatch } = usePlaylist();

  console.log(playlists);
  return (
    <aside style={{}}>
      {playlists.map((item) => (
        <button key={playlists.indexOf(item)}>{item}</button>
      ))}
      {!createPlaylistForm && (
        <button onClick={() => setCreatePlaylistForm((val) => !val)}>
          + Create Playlist{" "}
        </button>
      )}
      {createPlaylistForm && (
        <form
          onSubmit={(event) => {
            playlistDispatch({
              type: "CREATE_PLAYLIST",
              payload: playlistName,
            });
            event.preventDefault();
            console.log(`now we have to create :: ${playlistName}`);
            setCreatePlaylistForm((val) => !val);
          }}
        >
          <input
            type="text"
            onChange={(event) => setPlaylistName(event.target.value)}
          />
          <button type="submit">+</button>
        </form>
      )}
    </aside>
  );
}
