import React from 'react';
import styled from 'styled-components';
import AnimatedCard from './AnimatedCard';
import { Link } from 'react-router-dom';
import writingArticles from '../data/writing';

const WritingSection = styled.section`
  background: var(--background-alt);
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
    font-size: 2.2rem;
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

const WritingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  padding: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;
`;

const ArticleContent = styled.div`
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  color: var(--text-tertiary);
  font-size: 0.93rem;
`;

const ArticleTag = styled.span`
  background: var(--accent-light);
  color: var(--accent-hover);
  padding: 0.22em 0.8em;
  border-radius: var(--radius-full);
  font-size: 0.93rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

const ArticleTitle = styled.h3`
  color: var(--accent);
  margin-bottom: var(--space-xs);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.4;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition);

    &:hover {
      color: var(--accent-hover);
      text-decoration: underline;
    }
  }
`;

const ArticleExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.6;
  font-size: 1.05rem;
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.01rem;
  transition: color var(--transition), transform var(--transition);

  &:hover {
    color: var(--accent-hover);
    transform: translateX(4px);
    text-decoration: underline;
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
            Where code meets language, I find the most interesting questions. Here’s a selection of essays, research, and creative work exploring technology, narrative, and the spaces in between.
          </p>
        </SectionHeader>
        <WritingGrid>
          {articles.map((article, index) => (
            <ArticleCard key={index} className="fade-in-up" style={{ animationDelay: `${0.1 + index * 0.08}s` }}>
              <ArticleContent>
                <ArticleMeta>
                  {/* Uncomment if you add category/date to your data */}
                  {/* {article.category && <ArticleTag>{article.category}</ArticleTag>} */}
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
