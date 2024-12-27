import React from "react";
import './PlaylistSection.css'

const PlaylistSection = ({ playlist, onSelectSong }) => {
  return (
    <div className="playlist-section">
      <h3>Playlist</h3>
      {playlist.length === 0 && (
        <p className="empty-playlist-message">
          Your playlist is empty. <br />
          Add some songs!
        </p>
      )}
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

export default PlaylistSection;