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
  const [loading, setLoading] = useState(false);  // Loading state for videos
  const [error, setError] = useState(null);  // Error state

  // Fetch videos when search query changes
  useEffect(() => {
    const getVideos = async () => {
      setLoading(true); // Set loading to true when starting to fetch videos
      setError(null);  // Reset any previous errors
      try {
        const fetchedVideos = await fetchYouTubeVideos(searchQuery);
        setVideos(fetchedVideos);
      } catch (error) {
        setError('Error fetching videos. Please try again.');
      } finally {
        setLoading(false);  // Set loading to false once fetch is complete
      }
    };
    getVideos();
  }, [searchQuery]);

  // Update energy after task completion
  const handleTaskCompletion = (reward) => {
    setEnergy((prevEnergy) => Math.min(100, prevEnergy + reward));
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
          {loading && <p>Loading videos...</p>}  {/* Show loading message */}
          {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show error message */}
          <div className="video-list">
            {videos.map((video) => (
              <div key={video.id.videoId} className="video-item">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="video-thumbnail"
                />
                <div className="video-title">{video.snippet.title}</div>
                <div className="video-actions">
                  <button onClick={() => setSearchQuery(video.snippet.title)}>
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default App;
