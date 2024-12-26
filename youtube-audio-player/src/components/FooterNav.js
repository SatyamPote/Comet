import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #000000;
  padding: 10px 0;
  border-top: 1px dashed #00ff00;
  display: flex;
  justify-content: center;
  gap: 30px;
  font-family: 'Courier New', monospace;
  color: #00ff00;
  z-index: 100;
`;

const NavItem = styled.span`
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const FooterNav = () => (
  <FooterWrapper>
    <NavItem>mine></NavItem>
    <NavItem>tasks></NavItem>
    <NavItem>energy_swarm></NavItem>
    <NavItem>top></NavItem>
    <NavItem>sale></NavItem>
  </FooterWrapper>
);

export default FooterNav;
