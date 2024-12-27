import React, { useState, useEffect } from "react";
import "./MobilePlayOverlay.css";

const MobilePlayOverlay = ({ onPlay }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleInteraction = () => {
    onPlay();

    const silentAudio = new Audio(
      "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
    silentAudio
      .play()
      .then(() => {
        silentAudio.pause();
        silentAudio.remove();
      })
      .catch((error) => {
        console.error("Failed to enable audio:", error);
      });

    setShowOverlay(false);
  };

  useEffect(() => {
    if (!showOverlay) {
      const overlayElement = document.querySelector(".mobile-overlay");
      if (overlayElement) {
        overlayElement.remove();
      }
    }
  }, [showOverlay]);

  return (
    showOverlay && (
      <div className="mobile-overlay" onClick={handleInteraction}>
        <div className="overlay-content">
          <p>Tap to enable audio</p>
          <button className="enable-audio-button">
            <i className="fas fa-play"></i>
          </button>
        </div>
      </div>
    )
  );
};

export default MobilePlayOverlay;