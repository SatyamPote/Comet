import React from 'react';
import styled from 'styled-components';

const PlaylistContainer = styled.div`
  margin-top: 20px;
  color: #fff;
`;

const PlaylistTitle = styled.h3`
  text-align: center;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
`;

const SongItem = styled.li`
  margin: 10px 0;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #00ff00;
  }
`;

const Playlist = ({ playlist }) => {
  return (
    <PlaylistContainer>
      <PlaylistTitle>Playlist</PlaylistTitle>
      <SongList>
        {playlist.map((song, index) => (
          <SongItem key={index}>{song.title}</SongItem>
        ))}
      </SongList>
    </PlaylistContainer>
  );
};

export default Playlist;
