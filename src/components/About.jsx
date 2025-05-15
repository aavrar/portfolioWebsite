import React from 'react';
import styled from 'styled-components';
import AnimatedCard from './AnimatedCard';

const AboutSection = styled.section`
  background-color: var(--background-alt);
  padding: var(--space-3xl) 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const AboutContent = styled.div`
  h2 {
    margin-bottom: var(--space-xl);
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-primary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: var(--space-lg);
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-md);
`;

const SkillCard = styled(AnimatedCard)`
  padding: var(--space-lg);
  text-align: center;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: var(--space-sm);
  color: var(--accent-primary);
`;

const SkillName = styled.h3`
  font-size: 1rem;
  color: var(--text-primary);
  margin: 0;
`;

const SkillLevel = styled.div`
  margin-top: var(--space-xs);
  height: 4px;
  background-color: var(--background);
  border-radius: var(--radius-full);
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    background: linear-gradient(
      90deg,
      var(--accent-primary),
      var(--accent-secondary)
    );
    border-radius: var(--radius-full);
  }
`;

const About = () => {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Machine Learning', level: 85, icon: '🤖' },
    { name: 'Data Science', level: 80, icon: '📊' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'SQL', level: 80, icon: '🗄️' },
    { name: 'Git', level: 85, icon: '📦' }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <AboutGrid>
          <AboutContent>
            <h2>About Me</h2>
            <p>
              I'm a Computer Science student passionate about artificial intelligence,
              machine learning, and software development. My journey in tech has been
              driven by curiosity and a desire to solve complex problems.
            </p>
            <p>
              Currently, I'm focused on AI research and developing innovative
              solutions that can make a positive impact. I love exploring new
              technologies and contributing to open-source projects.
            </p>
          </AboutContent>
          <div>
            <h2>Skills</h2>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel level={skill.level} />
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 