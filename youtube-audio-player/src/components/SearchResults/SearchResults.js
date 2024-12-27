import React from "react";
import "./SearchResults.css";

const SearchResults = ({ searchResults, handlePlay, handleAddToPlaylist }) => {
  return (
    <div className="search-results">
      {searchResults.map((result) => (
        <div
          key={result.id.videoId}
          className="search-item"
          onClick={() => handlePlay(result)}
        >
          <img
            src={result.snippet.thumbnails.medium.url}
            alt={result.snippet.title}
            className="thumbnail"
          />
          <p className="title">{result.snippet.title}</p>
          <button
            className="add-to-playlist-button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click event
              handleAddToPlaylist(result);
            }}
          >
            + Playlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;