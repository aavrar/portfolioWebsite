// components/AnimatedButton.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedButton = styled(motion.a)`
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-full);
  padding: 0.85em 2.2em;
  font-weight: 700;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  letter-spacing: 0.01em;
  transition: 
    background 0.3s, 
    box-shadow 0.3s, 
    transform 0.3s, 
    color 0.3s;

  &:hover, &:focus {
    background: var(--accent-hover);
    color: #fff;
    box-shadow: 0 8px 24px rgba(44,62,80,0.16);
    transform: translateY(-2px) scale(1.05);
    outline: none;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 1px 4px rgba(44,62,80,0.10);
  }
`;

AnimatedButton.defaultProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 }
};

export default AnimatedButton;
