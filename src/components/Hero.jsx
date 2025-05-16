import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  padding: var(--space-3xl) var(--space-lg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--accent-secondary) 0%, transparent 70%);
    opacity: 0.05;
    animation: pulse 8s ease-in-out infinite;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const ProfileImageContainer = styled.div`
  margin-bottom: var(--space-2xl);
  position: relative;
  display: inline-block;
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: var(--radius-full);
  padding: 5px;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: var(--radius-full);
    background: linear-gradient(
      45deg,
      var(--accent-primary),
      var(--accent-secondary)
    );
    opacity: 0.5;
    z-index: -1;
    transition: opacity var(--transition-normal);
  }

  &:hover::before {
    opacity: 0.8;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 4px solid var(--background);
  background-color: var(--background);
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: var(--space-lg);
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-primary) 50%,
    var(--accent-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-out;
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
  animation: fadeIn 1s ease-out 0.2s backwards;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  animation: fadeIn 1s ease-out 0.4s backwards;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <ProfileImageContainer>
          <ProfileImageWrapper>
            <ProfileImage src="assets/images/pfp.png" alt="Aahad Vakani" />
          </ProfileImageWrapper>
        </ProfileImageContainer>
        <HeroContent>
          <Title>Hi, I'm Aahad Vakani</Title>
          <Tagline>
            I'm a passionate software developer focused on building innovative solutions
          </Tagline>
          <HeroButtons>
            <AnimatedButton href="#projects" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
            </AnimatedButton>
            <AnimatedButton href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Get in Touch
            </AnimatedButton>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 