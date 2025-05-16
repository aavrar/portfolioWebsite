import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import ResumeCard from './ResumeCard';
import DownloadResume from './DownloadResume';
import { resumeData, getEntriesByType, getAllTags, getEntriesByTag, sortEntriesByDate } from '../data/resumeData';

const Section = styled.section`
  padding: 4rem 0;
  background: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  animation: fadeIn 0.5s ease-out 0.2s backwards;
`;

const FilterButton = styled.button`
  background: ${props => props.$active ? 'var(--primary-color)' : 'var(--card-bg)'};
  color: ${props => props.$active ? 'white' : 'var(--text-color)'};
  border: 1px solid ${props => props.$active ? 'var(--primary-color)' : 'var(--card-border)'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--hover-shadow);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  padding: 0 1rem;
  animation: fadeIn 0.5s ease-out 0.3s backwards;
`;

const TagButton = styled(FilterButton)`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  align-content: start;
  
  /* Base layout for small screens */
  grid-template-columns: 1fr;
  max-width: 600px;
  
  /* Tablet layout */
  @media (min-width: 768px) {
    max-width: 1200px;
    grid-template-columns: ${props => 
      props.$fullWidth ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))'};
  }
  
  /* Desktop layout adjustments */
  @media (min-width: 1024px) {
    gap: 2rem;
    grid-template-columns: ${props => 
      props.$fullWidth ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))'};
  }

  /* Ensure single column for work experience */
  ${props => props.$fullWidth && `
    max-width: 800px;
    margin: 0 auto;
  `}

  /* Animation for grid items */
  & > * {
    animation: cardFadeIn 0.5s ease-out backwards;
  }

  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NoResults = styled.p`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 2rem 0;
`;

const ResumeSection = () => {
  const [activeType, setActiveType] = useState('work');
  const [activeTag, setActiveTag] = useState(null);
  
  const types = [
    { id: 'work', label: 'Work Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'project', label: 'Projects', icon: '🚀' }
  ];

  const allTags = useMemo(() => getAllTags(), []);

  const filteredEntries = useMemo(() => {
    let entries = activeTag
      ? getEntriesByTag(activeTag)
      : getEntriesByType(activeType);
    return sortEntriesByDate(entries);
  }, [activeType, activeTag]);

  const handleTypeClick = (type) => {
    setActiveType(type);
    setActiveTag(null);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag === activeTag ? null : tag);
  };

  return (
    <Section id="resume">
      <Container>
        <Header>
          <Title>My Journey</Title>
          <Subtitle>
            Explore my professional experience, education, and notable projects
          </Subtitle>
        </Header>

        <FilterContainer>
          {types.map(type => (
            <FilterButton
              key={type.id}
              $active={activeType === type.id && !activeTag}
              onClick={() => handleTypeClick(type.id)}
            >
              {type.icon} {type.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <TagsContainer>
          {allTags.map(tag => (
            <TagButton
              key={tag}
              $active={activeTag === tag}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </TagButton>
          ))}
        </TagsContainer>

        {filteredEntries.length > 0 ? (
          <Grid $fullWidth={activeType === 'work'}>
            {filteredEntries.map(entry => (
              <ResumeCard
                key={entry.id}
                {...entry}
              />
            ))}
          </Grid>
        ) : (
          <NoResults>
            No entries found for the selected filter.
          </NoResults>
        )}

        <DownloadResume />
      </Container>
    </Section>
  );
};

export default ResumeSection; 