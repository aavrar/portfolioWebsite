import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';

const ProjectsSection = styled.section`
  background: var(--background);
  padding: var(--space-2xl) 0 var(--space-3xl) 0;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);

  h2 {
    color: var(--accent);
    font-size: 2.3rem;
    font-weight: 900;
    margin-bottom: var(--space-md);
    letter-spacing: -0.01em;
  }

  p {
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.13rem;
    line-height: 1.7;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;
`;

const ProjectImage = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  background: var(--background-alt);

  img {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform var(--transition);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.04);
  }
`;

const ProjectContent = styled.div`
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  color: var(--accent);
  margin-bottom: var(--space-xs);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.6;
  font-size: 1.05rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`;

const TechTag = styled.span`
  background: var(--accent-light);
  color: var(--accent-hover);
  padding: 0.25em 0.9em;
  border-radius: var(--radius-full);
  font-size: 0.93rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 0.2em;
  transition: background var(--transition), color var(--transition), transform var(--transition);

  &:hover {
    background: var(--accent-hover);
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-top: auto;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Procedural Story Adventure Engine',
      description: 'A browser-based, procedurally generated text adventure where every playthrough is a fresh world. Players start in a mysterious forest, pick a class, meet quirky AI-powered NPCs, and explore a dynamic map—complete with fuzzy command matching, save/load, and a retro-cool CLI interface. It’s part game, part tech flex, and all replayable.',
      image: 'assets/projects/interactiveStory.png',
      tech: ['React','FastAPI','Python','Pydantic','Modern CSS','Uvicorn','HuggingFace Transformers','OpenAI','Axios'],
      liveUrl: 'https://interactive-story-zeta.vercel.app/',
      githubUrl: 'https://github.com/aavrar/interactive-story'
    },
    //{
      //title: 'AI Image Generator',
      //description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
      //image: '/assets/projects/project2.jpg',
      //tech: ['Python', 'TensorFlow', 'Flask', 'AWS'],
      //liveUrl: '#',
      //githubUrl: '#'
    //},
    //{
      //title: 'Blockchain Explorer',
      //description: 'A web-based blockchain explorer for tracking transactions and analyzing smart contracts.',
      //image: '/assets/projects/project3.jpg',
      //tech: ['Solidity', 'Web3.js', 'Vue.js', 'Ethereum'],
      //liveUrl: '#',
      //githubUrl: '#'
    //}
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <h2>Featured Projects</h2>
          <p>
            A selection of my recent work at the intersection of AI, software, and narrative. Each project is a story—sometimes technical, sometimes creative, always an experiment in building something meaningful.
          </p>
        </SectionHeader>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} className="fade-in-up" style={{ animationDelay: `${0.1 + index * 0.08}s` }}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
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
