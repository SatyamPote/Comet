import React from "react";
import "./Playlist.css";

const Playlist = ({ playlist, onSelectSong }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <ul>
        {playlist.map((song) => (
          <li key={song.id.videoId} onClick={() => onSelectSong(song)}>
            {song.snippet.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;