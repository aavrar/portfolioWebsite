import React from 'react';
import styled from 'styled-components';
import AnimatedCard from './AnimatedCard';
import { Link } from 'react-router-dom';
import writingArticles from '../data/writing';

const WritingSection = styled.section`
  background-color: var(--background-alt);
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
      var(--accent-primary) 100%
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

const WritingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
`;

const ArticleContent = styled.div`
  padding: var(--space-xl);
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  color: var(--text-tertiary);
  font-size: 0.875rem;
`;

const ArticleTag = styled.span`
  background-color: var(--background);
  color: var(--accent-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
`;

const ArticleTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  font-size: 1.5rem;
  line-height: 1.4;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--accent-secondary);
    }
  }
`;

const ArticleExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--accent-primary-hover);
    transform: translateX(4px);
  }
`;

const Writing = () => {
  const articles = writingArticles;

  return (
    <WritingSection id="writing">
      <Container>
        <SectionHeader>
          <h2>Research & Writing</h2>
          <p>
            Exploring the intersection of technology, ethics, and society through
            research papers and thought-provoking articles.
          </p>
        </SectionHeader>
        <WritingGrid>
          {articles.map((article, index) => (
            <ArticleCard key={index}>
              <ArticleContent>
                <ArticleMeta>
                  {/* If you add category to your data file, uncomment this */}
                  {/* {article.category && <ArticleTag>{article.category}</ArticleTag>} */}
                  {/* If you add date to your data file, uncomment this */}
                  {/* {article.date && <span>{article.date}</span>} */}
                </ArticleMeta>
                <ArticleTitle>
                  <Link to={`/writing/${article.slug}`}>{article.title}</Link>
                </ArticleTitle>
                <ArticleExcerpt>{article.description}</ArticleExcerpt>
                <ReadMore to={`/writing/${article.slug}`}>
                  Read Article <span>→</span>
                </ReadMore>
              </ArticleContent>
            </ArticleCard>
          ))}
        </WritingGrid>
      </Container>
    </WritingSection>
  );
};

export default Writing; 