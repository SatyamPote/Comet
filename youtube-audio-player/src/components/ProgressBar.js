import React from 'react';
import styled from 'styled-components';

const ProgressWrapper = styled.div`
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  color: #00ff00;
`;

const Bar = styled.div`
  background: linear-gradient(90deg, #00ff00 0%, #005500 100%);
  height: 20px;
  margin: 10px 0;
`;

const ProgressBar = ({ energy }) => (
  <ProgressWrapper>
    Energy: ██████████░░░░░ {energy}/100
    <Bar style={{ width: `${energy}%` }} />
  </ProgressWrapper>
);

export default ProgressBar;
