import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import ProgressBar from './components/ProgressBar';
import FooterNav from './components/FooterNav';
import { fetchYouTubeVideos } from './utils/youtubeAPI';
import './App.css';

const App = () => {
  const [energy, setEnergy] = useState(80); // Energy level
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('music');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos when search query changes
  useEffect(() => {
    const getVideos = async () => {
      const fetchedVideos = await fetchYouTubeVideos(searchQuery);
      setVideos(fetchedVideos);
    };
    getVideos();
  }, [searchQuery]);

  // Update energy after task completion
  const handleTaskCompletion = (reward) => {
    setEnergy((prevEnergy) => Math.min(100, prevEnergy + reward));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <section className="common">
          <h2>/common</h2>
          <TaskList
            tasks={[
              { name: '[Invite 1 friend]', reward: 1000 },
              { name: '[Connect TON]', reward: 1000 },
              { name: '[Join channel]', reward: 1000 },
              { name: '[Join x]', reward: 1000 },
            ]}
            onComplete={handleTaskCompletion}
          />
        </section>

        <section className="daily">
          <h2>/daily</h2>
          <TaskList
            tasks={[
              { name: '[Boost channel]', reward: 500 },
              { name: '[full_energy_[★100stars★]_]', reward: 100 },
              { name: '[Boost_energy_with_TON_for_24_h]', reward: 50 },
            ]}
            onComplete={handleTaskCompletion}
          />
        </section>

        <ProgressBar energy={energy} />

        <div className="video-section">
          <h2>Music Videos</h2>
          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for music..."
              className="search-input"
            />
          </div>
          <div className="video-list">
            {videos.map((video) => (
              <div key={video.id.videoId} className="video-item" onClick={() => handleVideoClick(video)}>
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

        {selectedVideo && (
          <div className="video-player">
            <h2>Now Playing: {selectedVideo.snippet.title}</h2>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="YouTube Video Player"
            ></iframe>
          </div>
        )}
      </div>
      <FooterNav />
    </div>
  );
};

export default App;
