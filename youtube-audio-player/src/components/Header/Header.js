import React, { useState } from "react";
import "./Header.css";

const Header = ({ isLoggedIn, onLogout, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <span className="logo-comet">Comet</span>
        </h1>
        <div className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search for music"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {isLoggedIn ? (
          <button className="profile-button" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="profile-button">Login / Register</button>
        )}
      </div>
    </header>
  );
};

export default Header;