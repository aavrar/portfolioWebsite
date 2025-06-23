// components/AnimatedCard.jsx
import styled from 'styled-components';

const AnimatedCard = styled.div`
  background: var(--card-bg);
  border: 1.5px solid var(--card-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    background var(--transition),
    border var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
  position: relative;
  box-shadow: var(--card-shadow);
  padding: var(--space-lg);

  &:hover, &:focus-within {
    transform: translateY(-8px) scale(1.025);
    border-color: var(--accent);
    box-shadow: 0 16px 48px rgba(44,62,80,0.12);
    background: var(--background-elevated);
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Optional: fade-in-up animation for reveal */
  &.fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
  }
`;

export default AnimatedCard;
