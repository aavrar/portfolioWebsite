import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--card-border);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.$isExpanded ? '1.5rem' : '0'};
`;

const TitleGroup = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--primary-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span.icon {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.25rem 0 0;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--secondary-color);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--accent-color);
  }
`;

const Content = styled.div`
  max-height: ${props => props.$isExpanded ? '500px' : '0'};
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const Description = styled.div`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const ResumeCard = ({ icon, title, subtitle, shortDescription, fullDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card onClick={() => setIsExpanded(!isExpanded)}>
      <CardHeader $isExpanded={isExpanded}>
        <TitleGroup>
          <Title>
            <span className="icon">{icon}</span>
            {title}
          </Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleGroup>
        <ExpandButton>
          {isExpanded ? 'Show Less' : 'Read More'}
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`} />
        </ExpandButton>
      </CardHeader>
      <Content $isExpanded={isExpanded}>
        <Description>
          {isExpanded ? fullDescription : shortDescription}
        </Description>
      </Content>
    </Card>
  );
};

export default ResumeCard; 