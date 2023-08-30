import styled, { keyframes } from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;

  box-shadow: -1px -1px 15px #8ba793, 15px 15px 35px #fff;
`;

const pulsateColor = keyframes`
  0% {
    color: var(--accent-color);
  }

  50% {
    color: #fff;
  }

  100% {
    color: var(--accent-color);
  }
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  text-align: center;
  color: transparent;
  animation: ${pulsateColor} 5s infinite;
  animation-duration: 5s;
`;
