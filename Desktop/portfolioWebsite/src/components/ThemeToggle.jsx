// components/ThemeToggle.jsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0.4em;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  font-size: 1.6rem;
  margin-right: var(--space-md);

  &:hover, &:focus {
    background: var(--accent-light);
    color: var(--accent-hover);
    outline: none;
    box-shadow: 0 2px 8px rgba(44,62,80,0.10);
  }
`;

const Icon = styled.svg`
  width: 1.7em;
  height: 1.7em;
  display: block;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle dark/light mode">
      {theme === 'dark' ? (
        // Sun icon
        <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" fill="none" />
          <g strokeOpacity="0.7">
            <line x1="12" y1="1.5" x2="12" y2="3.5" />
            <line x1="12" y1="20.5" x2="12" y2="22.5" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1.5" y1="12" x2="3.5" y2="12" />
            <line x1="20.5" y1="12" x2="22.5" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </Icon>
      ) : (
        // Crescent moon icon
        <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"
            fill="none"
            strokeOpacity="0.85"
          />
        </Icon>
      )}
    </ToggleButton>
  );
};

export default ThemeToggle;
