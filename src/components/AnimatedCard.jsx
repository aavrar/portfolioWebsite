import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedCard = styled.div`
  background-color: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(270deg, #ffe680, #ff9b9b, #b8f2e6, #ffe680);
    background-size: 300% 100%;
    border-radius: var(--radius-lg);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: transparent;
    box-shadow: var(--shadow-lg);

    &::before {
      opacity: 0.1;
      animation: ${gradientShift} 3s linear infinite;
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export default AnimatedCard; 