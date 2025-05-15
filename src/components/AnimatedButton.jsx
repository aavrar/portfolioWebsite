import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text-secondary);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(270deg, #ffe680, #ff9b9b, #b8f2e6, #ffe680);
    background-size: 300% 100%;
    animation: ${gradientShift} 3s linear infinite;
    border-color: transparent;
    color: var(--background);
    
    /* Add a glow effect */
    box-shadow: 0 4px 15px rgba(255, 230, 128, 0.2);
  }

  /* Ensure text remains readable on all gradient colors */
  mix-blend-mode: difference;
`;

const AnimatedButton = ({ href, children, ...props }) => {
  return (
    <StyledButton href={href} {...props}>
      {children}
    </StyledButton>
  );
};

export default AnimatedButton; 