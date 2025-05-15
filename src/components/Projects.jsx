import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';

const ProjectsSection = styled.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);

  h2 {
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-secondary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: var(--space-xl);
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
`;

const TechTag = styled.span`
  background-color: var(--background);
  color: var(--accent-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--accent-primary);
    color: var(--background);
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const Projects = () => {
  const projects = [
    {
      title: 'Project Management App',
      description: 'A full-stack project management application with real-time updates and team collaboration features.',
      image: '/assets/projects/project1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
      image: '/assets/projects/project2.jpg',
      tech: ['Python', 'TensorFlow', 'Flask', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blockchain Explorer',
      description: 'A web-based blockchain explorer for tracking transactions and analyzing smart contracts.',
      image: '/assets/projects/project3.jpg',
      tech: ['Solidity', 'Web3.js', 'Vue.js', 'Ethereum'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <h2>Featured Projects</h2>
          <p>
            A selection of my recent work in AI, machine learning, and software development.
            Each project represents a unique challenge and innovative solution.
          </p>
        </SectionHeader>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <AnimatedButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </AnimatedButton>
                  <AnimatedButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code →
                  </AnimatedButton>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 