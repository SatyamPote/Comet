import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 20px;
  border-bottom: 1px solid #00FF00;
  color: #00FF00;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const SearchBox = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px dashed #00FF00;
  color: #00FF00;
  background-color: black;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #00FF00;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Comet</Logo>
      <SearchBox type="text" placeholder="Search for music..." />
      <ProfileIcon />
    </HeaderContainer>
  );
};

export default Header;
