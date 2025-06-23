// components/AnimatedButton.jsx
import styled from 'styled-components';

const AnimatedButton = styled.a`
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
  transition: 
    background var(--transition), 
    box-shadow var(--transition), 
    transform var(--transition);

  &:hover, &:focus {
    background: var(--accent-hover);
    box-shadow: 0 8px 24px rgba(44,62,80,0.12);
    transform: translateY(-2px) scale(1.04);
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 1px 4px rgba(44,62,80,0.10);
  }
`;

export default AnimatedButton;
