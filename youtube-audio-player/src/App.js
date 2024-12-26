import React, { useState, useEffect } from 'react';
import { fetchYouTubeVideos } from './utils/youtubeAPI';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('music');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos based on search query
  useEffect(() => {
    const getVideos = async () => {
      const fetchedVideos = await fetchYouTubeVideos(searchQuery);
      setVideos(fetchedVideos);
    };
    getVideos();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for music..."
            className="search-input"
          />
        </div>

        {/* Music Player */}
        {selectedVideo && (
          <div className="music-player">
            <div className="song-info">
              <img
                src={selectedVideo.snippet.thumbnails.medium.url}
                alt={selectedVideo.snippet.title}
                className="album-cover"
              />
              <div className="song-details">
                <div className="song-title">{selectedVideo.snippet.title}</div>
                <div className="song-artist">Artist: Unknown</div>
              </div>
            </div>

            {/* Background Video Embed */}
            <iframe
              width="100%"
              height="300px"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1&loop=1&playlist=${selectedVideo.id.videoId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="YouTube Music Player"
            ></iframe>

            {/* < # > Button */}
            <div className="control-button">
              <button className="control-button">"#" </button>
            </div>
          </div>
        )}

        {/* Video Search Results */}
        <div className="video-list">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="video-item"
              onClick={() => handleVideoClick(video)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <div className="video-title">{video.snippet.title}</div>
            </div>
          ))}
        </div>
      </div>

      <FooterNav />
    </div>
  );
};

export default App;
