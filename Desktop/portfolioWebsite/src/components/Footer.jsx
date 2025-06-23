import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';

const FooterSection = styled.footer`
  background: var(--background-elevated);
  padding: var(--space-xl) 0 var(--space-lg) 0;
  border-top: 1.5px solid var(--card-border);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  font-size: 1.5rem;
  transition: background var(--transition), color var(--transition), transform var(--transition);
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  &:hover, &:focus {
    background: var(--accent-hover);
    color: #fff;
    transform: translateY(-2px) scale(1.08);
    outline: none;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
`;

const FooterLeft = styled.div`
  h3 {
    color: var(--accent);
    margin-bottom: var(--space-xs);
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.01em;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
    font-size: 1.05rem;
    font-weight: 500;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const SocialLink = styled(AnimatedButton)`
  width: 44px;
  height: 44px;
  padding: 0;
  justify-content: center;
  align-items: center;
  font-size: 1.45rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  border: none;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition);

  &:hover, &:focus {
    background: var(--accent-hover);
    color: #fff;
    box-shadow: 0 8px 24px rgba(44,62,80,0.12);
    transform: translateY(-2px) scale(1.08);
    outline: none;
  }
`;

const FooterLink = styled.a`
  color: var(--accent-light);
  text-decoration: none;
  font-weight: 700;
  transition: color var(--transition);

  &:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text-tertiary);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--card-border);
  font-size: 0.98rem;
  letter-spacing: 0.01em;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterLeft>
            <h3>Aahad Vakani</h3>
            <p>
              Building at the intersection of code and narrative.<br />
              Always learning, always experimenting.
            </p>
          </FooterLeft>
          <SocialLinks>
            <SocialIcon href="https://github.com/aavrar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/abdul-aahad-vakani-793aa0234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="mailto:aahadvakani@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterContent>
        <Copyright>
          © {currentYear} Aahad Vakani. All rights reserved. Built with{' '}
          <FooterLink 
            href="https://react.dev" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            React
          </FooterLink>
          {' '}| Portfolio as a living experiment in code & story.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
