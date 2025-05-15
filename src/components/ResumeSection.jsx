import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';

const Section = styled.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background-alt);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: var(--space-2xl);
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-primary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const ResumeCard = styled(AnimatedCard)`
  aspect-ratio: 1;
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-height: 150px;
  max-width: 150px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin-bottom: 0;
`;

const Icon = styled.div`
  font-size: 1.25rem;
  color: var(--accent-primary);
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  color: var(--text-primary);
  margin: 0;
  font-size: 0.9rem;
`;

const CardSubtitle = styled.div`
  color: var(--text-secondary);
  font-size: 0.75rem;
  margin-top: var(--space-xs);
`;

const CardDescription = styled.div`
  color: var(--text-secondary);
  max-height: ${props => props.isExpanded ? '250px' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  margin-top: ${props => props.isExpanded ? 'var(--space-md)' : '0'};
  padding-right: var(--space-sm);
  
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-sm);
    padding-left: var(--space-lg);
    position: relative;
    font-size: 0.875rem;
    line-height: 1.5;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--accent-primary);
  font-size: 0.875rem;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
  opacity: ${props => props.isExpanded ? '1' : '0'};
  transition: all var(--transition-normal);

  &:hover {
    color: var(--accent-secondary);
  }

  span {
    transition: transform var(--transition-fast);
    transform: rotate(${props => props.isExpanded ? '180deg' : '0deg'});
  }
`;

const DownloadCard = styled(AnimatedCard)`
  text-align: center;
  padding: var(--space-xl);
  margin-top: var(--space-2xl);
`;

const DownloadButton = styled(AnimatedButton)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 1rem;
  padding: var(--space-md) var(--space-xl);
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--background);
  padding: var(--space-lg);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background-alt);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: var(--text-primary);
`;

const ModalSubtitle = styled.div`
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-top: var(--space-xs);
`;

const ModalDescription = styled.div`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-sm);
    padding-left: var(--space-lg);
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: var(--background-alt);
    color: var(--text-primary);
  }
`;

const ResumeSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const resumeData = [
    {
      icon: '💻',
      title: 'Information Technology Intern',
      subtitle: 'DePauw University, May 2024 – Present',
      shortDescription: (
        <ul>
          <li>Provide technical support and troubleshooting for campus-wide IT infrastructure</li>
        </ul>
      ),
      fullDescription: (
        <ul>
          <li>Provide technical support and troubleshooting for campus-wide IT infrastructure</li>
          <li>Manage and maintain computer labs, network equipment, and software systems</li>
          <li>Assist in implementing new technology solutions and upgrades</li>
          <li>Document technical procedures and create user guides</li>
        </ul>
      ),
    },
    {
      icon: '🏫',
      title: 'Resident Assistant',
      subtitle: 'DePauw University, Jan 2025 – Present',
      shortDescription: (
        <ul>
          <li>Foster a supportive and inclusive residential community for 40+ students</li>
        </ul>
      ),
      fullDescription: (
        <ul>
          <li>Foster a supportive and inclusive residential community for 40+ students</li>
          <li>Plan and execute educational and social programming events</li>
          <li>Mediate conflicts and provide crisis response when needed</li>
          <li>Enforce university policies and maintain safety protocols</li>
        </ul>
      ),
    },
    {
      icon: '🏫',
      title: 'First Year Mentor',
      subtitle: 'DePauw University, Aug 2024 – Present',
      shortDescription: (
        <ul>
          <li>Guide and support first-year students in their transition to college life</li>
        </ul>
      ),
      fullDescription: (
        <ul>
          <li>Guide and support first-year students in their transition to college life</li>
          <li>Lead weekly mentoring sessions and workshops</li>
          <li>Collaborate with faculty and staff to address student needs</li>
          <li>Help students develop academic and personal success strategies</li>
        </ul>
      ),
    },
    {
      icon: '🏫',
      title: 'HRL Intern',
      subtitle: 'DePauw University, May 2023 – Aug 2023',
      shortDescription: (
        <ul>
          <li>Assisted in summer housing operations and residence hall management</li>
        </ul>
      ),
      fullDescription: (
        <ul>
          <li>Assisted in summer housing operations and residence hall management</li>
          <li>Coordinated check-in/check-out processes for summer residents</li>
          <li>Conducted facility inspections and maintenance reporting</li>
          <li>Developed and updated housing policies and procedures</li>
        </ul>
      ),
    },
    
    {
      icon: '📚',
      title: 'ML & Data Analysis Research',
      subtitle: 'DePauw University, Jan 2025 – May 2025',
      shortDescription: (
        <ul>
          <li>Conducted research on machine learning applications in data analysis</li>
        </ul>
      ),
      fullDescription: (
        <ul>
          <li>Conducted research on machine learning applications in data analysis</li>
          <li>Developed and implemented ML models for pattern recognition</li>
          <li>Analyzed large datasets using Python and statistical methods</li>
          <li>Presented findings at academic conferences and workshops</li>
        </ul>
      ),
    },
    {
      icon: '📚',
      title: 'Sustainable Recipe Recommender',
      subtitle: 'DePauw University, Aug 2024 – Nov 2024',
      shortDescription: (
        <ul>
          <li>Developed an AI-powered recipe recommendation system focusing on sustainability</li>
        </ul>
      ),
      fullDescription: (
        <ul>
          <li>Developed an AI-powered recipe recommendation system focusing on sustainability</li>
          <li>Implemented machine learning algorithms for personalized suggestions</li>
          <li>Created a user-friendly web interface using React and Node.js</li>
          <li>Integrated carbon footprint calculations for ingredients</li>
        </ul>
      ),
    },
    
  ];

  return (
    <Section id="resume">
      <Container>
        <Title>Experience</Title>
        <ExperienceGrid>
          {resumeData.map((item, index) => (
            <ResumeCard 
              key={index} 
              onClick={() => handleCardClick(item)}
            >
              <CardHeader>
                <Icon>{item.icon}</Icon>
                <HeaderContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardSubtitle>{item.subtitle}</CardSubtitle>
                </HeaderContent>
              </CardHeader>
            </ResumeCard>
          ))}
        </ExperienceGrid>
        
        {selectedCard && (
          <>
            <Overlay onClick={closeModal} />
            <Modal>
              <CloseButton onClick={closeModal}>×</CloseButton>
              <ModalHeader>
                <Icon>{selectedCard.icon}</Icon>
                <div>
                  <ModalTitle>{selectedCard.title}</ModalTitle>
                  <ModalSubtitle>{selectedCard.subtitle}</ModalSubtitle>
                </div>
              </ModalHeader>
              <ModalDescription>
                {selectedCard.fullDescription}
              </ModalDescription>
            </Modal>
          </>
        )}

        <DownloadCard>
          <Title as="h3" style={{ marginBottom: '2rem' }}>
            📄 View Full Resume
          </Title>
          <DownloadButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-download" />
            Download PDF
          </DownloadButton>
        </DownloadCard>
      </Container>
    </Section>
  );
};

export default ResumeSection; 