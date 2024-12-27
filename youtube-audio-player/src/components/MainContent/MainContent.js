import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import "./MainContent.css";

const MainContent = ({
  searchResults,
  currentSong,
  handlePlay,
  handleAddToPlaylist,
}) => {
  const handleNextSong = () => {
    if (currentSong && searchResults) {
      const currentIndex = searchResults.findIndex(
        (song) => song.id.videoId === currentSong.id.videoId
      );
      const nextIndex =
        currentIndex !== -1 ? (currentIndex + 1) % searchResults.length : 0;
      handlePlay(searchResults[nextIndex]);
    }
  };

  const handlePrevSong = () => {
    if (currentSong && searchResults) {
      const currentIndex = searchResults.findIndex(
        (song) => song.id.videoId === currentSong.id.videoId
      );
      const prevIndex =
        currentIndex !== -1
          ? (currentIndex - 1 + searchResults.length) % searchResults.length
          : searchResults.length - 1;
      handlePlay(searchResults[prevIndex]);
    }
  };

  return (
    <div className="main-content">
      <div className="search-results-section">
        <SearchResults
          searchResults={searchResults}
          handlePlay={handlePlay}
          handleAddToPlaylist={handleAddToPlaylist}
        />
      </div>

      {currentSong && (
        <MusicPlayer
          currentSong={currentSong}
          onNextSong={handleNextSong}
          onPrevSong={handlePrevSong}
        />
      )}
    </div>
  );
};

export default MainContent;