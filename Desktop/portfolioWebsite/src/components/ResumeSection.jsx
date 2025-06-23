import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import ResumeCard from './ResumeCard';
import DownloadResume from './DownloadResume';
import { resumeData, getEntriesByType, getAllTags, getEntriesByTag, sortEntriesByDate } from '../data/resumeData';

const Section = styled.section`
  padding: var(--space-2xl) 0 var(--space-3xl) 0;
  background: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
  animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
`;

const Title = styled.h2`
  font-size: 2.3rem;
  color: var(--accent);
  margin-bottom: var(--space-md);
  font-weight: 900;
  letter-spacing: -0.01em;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.13rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  justify-content: center;
  animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s both;
`;

const FilterButton = styled.button`
  background: ${props => props.$active ? 'var(--accent)' : 'var(--card-bg)'};
  color: ${props => props.$active ? '#fff' : 'var(--text-primary)'};
  border: 1.5px solid ${props => props.$active ? 'var(--accent)' : 'var(--card-border)'};
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background var(--transition), color var(--transition), border var(--transition), transform var(--transition);

  &:hover, &:focus {
    background: var(--accent-light);
    color: var(--accent-hover);
    border-color: var(--accent-light);
    transform: translateY(-2px) scale(1.04);
    outline: none;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: var(--space-xl);
  justify-content: center;
  max-width: 800px;
  margin: 0 auto var(--space-xl);
  padding: 0 1rem;
  animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s both;
`;

const TagButton = styled(FilterButton)`
  font-size: 0.92rem;
  padding: 0.3rem 1rem;
  background: ${props => props.$active ? 'var(--accent-light)' : 'var(--background-alt)'};
  color: ${props => props.$active ? 'var(--accent-hover)' : 'var(--accent)'};
  border: 1.5px solid ${props => props.$active ? 'var(--accent-light)' : 'var(--card-border)'};
`;

const Grid = styled.div`
  display: grid;
  gap: var(--space-xl);
  width: 100%;
  margin: 0 auto;
  flex: 1;
  align-content: start;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: ${props => 
      props.$fullWidth ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))'};
  }
  @media (min-width: 1024px) {
    gap: var(--space-2xl);
    grid-template-columns: ${props => 
      props.$fullWidth ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))'};
  }

  ${props => props.$fullWidth && `
    max-width: 800px;
    margin: 0 auto;
  `}

  & > * {
    animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
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
    { id: 'work', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'project', label: 'Projects'}
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
            Explore my professional experience, education, and notable projects. I approach my work as a series of stories—each role, class, and project is a chapter in my ongoing experiment at the intersection of technology and narrative.
          </Subtitle>
        </Header>

        <FilterContainer>
          {types.map(type => (
            <FilterButton
              key={type.id}
              $active={activeType === type.id && !activeTag}
              onClick={() => handleTypeClick(type.id)}
            >
              {type.label}
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
