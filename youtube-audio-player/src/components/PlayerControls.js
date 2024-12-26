import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 10px;
  margin: 0 15px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00cc00;
  }
`;

const VolumeControl = styled.input`
  margin-left: 20px;
  width: 150px;
`;

const PlayerControls = ({ isPlaying, togglePlayPause, nextSong, prevSong, volume, setVolume }) => {
  return (
    <ControlsContainer>
      <Button onClick={prevSong}>Prev</Button>
      <Button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
      <Button onClick={nextSong}>Next</Button>
      <VolumeControl
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </ControlsContainer>
  );
};

export default PlayerControls;
