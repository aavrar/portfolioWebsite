// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f5f6fa;
    --background-alt: #f8fafc;
    --background-elevated: #ffffff;
    --card-bg: #fff;
    --card-border: #e5e7eb;
    --card-shadow: 0 8px 32px rgba(44,62,80,0.08);
    --accent: #2d3a8c;
    --accent-light: #3ddad7;
    --accent-hover: #1e255e;
    --text-primary: #23272f;
    --text-secondary: #6b7280;
    --radius-lg: 18px;
    --radius-full: 9999px;
    --space-lg: 2.5rem;
    --space-md: 1.5rem;
    --space-sm: 0.75rem;
    --space-xl: 3.5rem;
    --space-2xl: 5rem;
    --transition: 0.18s cubic-bezier(0.4,0,0.2,1);
  }

  body {
    background: var(--background);
    color: var(--text-primary);
    font-family: 'Inter', 'Poppins', 'Segoe UI', Arial, sans-serif;
    font-size: 1.08rem;
    line-height: 1.7;
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: var(--space-md);
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: var(--space-sm);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: var(--space-sm);
  }

  p {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-bottom: var(--space-md);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .card, .glass {
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    border: 1.5px solid var(--card-border);
    padding: var(--space-lg);
    transition: box-shadow var(--transition), border var(--transition), transform var(--transition);
  }
  .card:hover, .glass:hover {
    box-shadow: 0 16px 48px rgba(44,62,80,0.12);
    border-color: var(--accent-light);
    transform: translateY(-4px) scale(1.01);
  }

  button, .button, a.button, .animated-button {
    display: inline-block;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: var(--radius-full);
    padding: 0.85em 2.2em;
    font-weight: 700;
    font-size: 1.08rem;
    box-shadow: 0 2px 8px rgba(44,62,80,0.08);
    cursor: pointer;
    transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
    text-decoration: none;
    outline: none;
  }
  button:hover, .button:hover, a.button:hover, .animated-button:hover {
    background: var(--accent-hover);
    box-shadow: 0 8px 24px rgba(44,62,80,0.12);
    transform: translateY(-2px) scale(1.03);
  }

  section {
    padding: var(--space-lg) 0;
  }

  /* Fade-in-up animation for section reveals */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(32px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  /* Modern Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    background: var(--background-alt);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: var(--radius-full);
    border: 2px solid var(--background-alt);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-light);
  }

  @media (max-width: 900px) {
    html {
      font-size: 15px;
    }
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.2rem; }
    section { padding: var(--space-md) 0; }
    .container { padding: 0 var(--space-sm); }
  }

  @media (max-width: 600px) {
    html {
      font-size: 14px;
    }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.1rem; }
    h3 { font-size: 1rem; }
    section { padding: var(--space-sm) 0; }
    .container { padding: 0 var(--space-sm); }
    .card, .glass { padding: var(--space-md); }
  }
`;

export default GlobalStyles;
