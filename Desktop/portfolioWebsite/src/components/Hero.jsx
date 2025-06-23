import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, var(--background) 60%, var(--background-alt) 100%);
  overflow: hidden;
  padding: var(--space-3xl) var(--space-lg);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 60% 40%, var(--accent) 0%, transparent 70%);
    opacity: 0.07;
    pointer-events: none;
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1) both;
`;

const ProfileImageContainer = styled.div`
  margin-bottom: var(--space-2xl);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImageWrapper = styled.div`
  width: 170px;
  height: 170px;
  border-radius: var(--radius-full);
  padding: 6px;
  background: var(--background-elevated);
  box-shadow: 0 4px 32px #2d3a8c22;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 48px #2d3a8c33;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 3px solid var(--accent);
  background-color: var(--background);
`;

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--accent);
  margin-bottom: var(--space-xs);
  line-height: 1.1;
  position: relative;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const AccentBar = styled.div`
  width: 60px;
  height: 5px;
  background: var(--accent-light);
  border-radius: 3px;
  margin: 0 auto var(--space-lg) auto;
`;

const Tagline = styled.p`
  font-size: 1.35rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.08rem;
  color: var(--text-primary);
  margin-bottom: var(--space-2xl);
  font-weight: 400;
  opacity: 0.92;
  letter-spacing: 0.01em;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-lg);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: var(--space-xl);
  justify-content: center;
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

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer className="fade-in-up">
        <ProfileImageContainer>
          <ProfileImageWrapper>
            <ProfileImage src="assets/images/pfp.png" alt="Aahad Vakani" />
          </ProfileImageWrapper>
        </ProfileImageContainer>
        <HeroContent>
          <Title>Hi, I'm Aahad Vakani</Title>
          <AccentBar />
          <Tagline>
            I build software at the intersection of technology and storytelling.
          </Tagline>
          <Subheading>
            Computer Science student, writer, and builder of narrative-driven tech. I believe the best ideas live where code and creativity meet.
          </Subheading>
          <HeroButtons>
            <AnimatedButton href="#projects" onClick={e => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
            </AnimatedButton>
            <AnimatedButton href="#contact" onClick={e => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Get in Touch
            </AnimatedButton>
          </HeroButtons>
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
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
