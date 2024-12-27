import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import "./MusicPlayer.css";

const MusicPlayer = ({ currentSong, onNextSong, onPrevSong }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  useEffect(() => {
    if (currentSong) {
      setIsPlaying(true);
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleProgress = (progress) => {
    setPlayed(progress.played);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(seekTime));
      setPlayed(parseFloat(seekTime));
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) {
      return "00:00";
    }
    const date = new Date(seconds * 1000);
    const minutes = date.getUTCMinutes();
    const remainingSeconds = ("0" + date.getUTCSeconds()).slice(-2);
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className="music-player">
      <div className="song-info">
        {currentSong && (
          <>
            <h3 className="song-title">{currentSong.snippet.title}</h3>
            <p className="artist">{currentSong.snippet.channelTitle}</p>
          </>
        )}
      </div>
      <div className="player-controls">
        <button onClick={onPrevSong} className="prev-button">
          <i className="fas fa-step-backward"></i>
        </button>
        <button onClick={handlePlayPause} className="play-pause-button">
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        <button onClick={onNextSong} className="next-button">
          <i className="fas fa-step-forward"></i>
        </button>
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={handleSeek}
        />
        <div className="time-labels">
          <span className="current-time">
            {formatTime(duration * played)}
          </span>
          <span className="total-time">{formatTime(duration)}</span>
        </div>
      </div>

      <ReactPlayer
        ref={playerRef}
        url={
          currentSong
            ? `https://www.youtube.com/watch?v=${currentSong.id.videoId}`
            : null
        }
        playing={isPlaying}
        controls={false} // Hide default controls
        width="0" // Hide video
        height="0" // Hide video
        config={{
          youtube: {
            playerVars: { origin: window.location.origin, mute: 0 },
          },
        }}
        onDuration={handleDuration}
        onProgress={handleProgress}
        muted={false}
        playsinline={true}
      />
    </div>
  );
};

export default MusicPlayer;