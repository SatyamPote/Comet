import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  border-bottom: 1px dashed #00ff00;
`;

const Header = () => (
  <HeaderWrapper>
    <span>[#fomo_hash]</span>
    <span>v1.0.20</span>
  </HeaderWrapper>
);

export default Header;
