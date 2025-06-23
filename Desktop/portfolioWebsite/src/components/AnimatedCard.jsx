// components/AnimatedCard.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedCard = styled(motion.div)`
  background: var(--card-bg);
  border: 1.5px solid var(--card-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    background 0.3s,
    border 0.3s,
    box-shadow 0.3s,
    transform 0.3s,
    color 0.3s;
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
`;

AnimatedCard.defaultProps = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
};

export default AnimatedCard;
