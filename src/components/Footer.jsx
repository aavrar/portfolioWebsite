import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';

const FooterSection = styled.footer`
  background-color: var(--background-elevated);
  padding: var(--space-2xl) 0;
  border-top: 1px solid var(--card-border);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-xl);
    text-align: center;
  }
`;

const FooterLeft = styled.div`
  h3 {
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
    font-size: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const SocialLink = styled(AnimatedButton)`
  width: 40px;
  height: 40px;
  padding: var(--space-sm);
  justify-content: center;
  font-size: 1.5rem;
`;

const FooterLink = styled(AnimatedButton)`
  padding: 0;
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text-tertiary);
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--card-border);
  font-size: 0.875rem;

  a {
    color: var(--accent-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--accent-primary);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterLeft>
            <h3>Aahad Vakani</h3>
            <p>Computer Science Student & AI Researcher</p>
          </FooterLeft>
          <SocialLinks>
            <SocialLink 
              href="https://github.com/aavrar" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              💻
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              💼
            </SocialLink>
            <SocialLink 
              href="mailto:aahadvakani@gmail.com"
              aria-label="Email"
            >
              📧
            </SocialLink>
          </SocialLinks>
        </FooterContent>
        <Copyright>
          © {currentYear} Aahad Vakani. All rights reserved. Built with{' '}
          <FooterLink 
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            React
          </FooterLink>
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 