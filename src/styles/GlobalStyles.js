import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Core Colors */
    --background: #2b2a33;
    --background-alt: #2f2e36;
    --background-elevated: #34333b;
    
    /* Typography */
    --text-primary: #f5f2eb;
    --text-secondary: #aaa6b2;
    --text-tertiary: rgba(170, 166, 178, 0.8);
    
    /* Accent Colors */
    --accent-primary: #ffe680;
    --accent-secondary: #ff9b9b;
    --accent-primary-hover: #fff0b3;
    --accent-secondary-hover: #ffb3b3;
    
    /* UI Elements */
    --card-bg: #363540;
    --card-border: rgba(255, 255, 255, 0.1);
    --card-hover: #3d3c48;
    
    /* Shadows & Effects */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.3);
    --glow-primary: 0 0 20px rgba(255, 230, 128, 0.15);
    --glow-secondary: 0 0 20px rgba(255, 155, 155, 0.15);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all var(--transition-normal);
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.7;
    color: var(--text-primary);
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: var(--space-lg);
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: var(--space-lg);
    line-height: 1.7;
  }

  a {
    color: var(--accent-primary);
    text-decoration: none;
    transition: all var(--transition-fast);
    
    &:hover {
      color: var(--accent-primary-hover);
    }
  }

  /* Section Styling */
  section {
    padding: var(--space-3xl) 0;
    
    &:nth-child(even) {
      background-color: var(--background-alt);
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
  }

  /* Button Base Styles */
  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: all var(--transition-fast);

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  /* Card Base Styles */
  .card {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: var(--card-hover);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0% { box-shadow: var(--glow-primary); }
    50% { box-shadow: var(--glow-secondary); }
    100% { box-shadow: var(--glow-primary); }
  }

  /* Media Queries */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    section {
      padding: var(--space-2xl) 0;
    }

    .container {
      padding: 0 var(--space-md);
    }
  }
`;

export default GlobalStyles; 