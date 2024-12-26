import React from 'react';
import styled from 'styled-components';

const SongInfoContainer = styled.div`
  text-align: center;
`;

const SongImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

const SongTitle = styled.h2`
  color: #fff;
`;

const Artist = styled.h3`
  color: #aaa;
`;

const SongInfo = ({ song }) => {
  return (
    <SongInfoContainer>
      <SongImage src={song.albumCover} alt={song.title} />
      <SongTitle>{song.title}</SongTitle>
      <Artist>{song.artist}</Artist>
    </SongInfoContainer>
  );
};

export default SongInfo;
