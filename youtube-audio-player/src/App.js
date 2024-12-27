import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import PlaylistSection from "./components/Playlist/PlaylistSection";
import MobilePlayOverlay from "./components/UI/MobilePlayOverlay";
import { fetchYouTubeVideos } from "./utils/youtubeAPI";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [showMobileOverlay, setShowMobileOverlay] = useState(true);

  useEffect(() => {
    const storedLoggedInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (storedLoggedInStatus) {
      setIsLoggedIn(storedLoggedInStatus);
    }
  }, []);

  // Fetch initial songs on login
  useEffect(() => {
    if (isLoggedIn) {
      const defaultSearchTerm = "classic rock";
      handleSearch(defaultSearchTerm);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentSong(null);
    setSearchResults([]);
    setPlaylist([]);
    localStorage.setItem("isLoggedIn", "false");
  };

  const handleRegister = () => {
    setShowRegister(false);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleSearch = async (query) => {
    try {
      const results = await fetchYouTubeVideos(query);
      setSearchResults(results);
      setCurrentSong(null);
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  const handleAddToPlaylist = (song) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
  };

  const handleMobilePlay = () => {
    setShowMobileOverlay(false);
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onSearch={handleSearch}
      />
      <div className="content">
        {!isLoggedIn && !showRegister && (
          <>
            <Login onLogin={handleLogin} />
            <p>
              Don't have an account?{" "}
              <button onClick={toggleRegister}>Register</button>
            </p>
          </>
        )}
        {!isLoggedIn && showRegister && (
          <>
            <Register onRegister={handleRegister} />
            <p>
              Already have an account?{" "}
              <button onClick={toggleRegister}>Login</button>
            </p>
          </>
        )}
        {isLoggedIn && (
          <>
            <MainContent
              searchResults={searchResults}
              currentSong={currentSong}
              handlePlay={handlePlay}
              handleAddToPlaylist={handleAddToPlaylist}
            />
            {playlist.length > 0 && (
              <PlaylistSection playlist={playlist} onSelectSong={handlePlay} />
            )}
          </>
        )}
        {showMobileOverlay && <MobilePlayOverlay onPlay={handleMobilePlay} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;