import React from 'react';
import styled from 'styled-components';
import AnimatedCard from './AnimatedCard';

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

const ArticleImage = styled.div`
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

  ${ArticleCard}:hover & img {
    transform: scale(1.05);
  }
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

const ReadMore = styled.a`
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
  const articles = [
    {
      title: 'Tweets and Tags: A Study of Code-Switching in Online Contexts',
      excerpt: 'This paper analyzes Hindi-English code-switching patterns on Twitter using the L3Cube-HingCorpus. It examines the frequency, placement, and function of inter-, intra-, and tag-level switches within bilingual online discourse. The study draws on sociolinguistic theory to explore how code-switching reflects identity, emotion, and interactional context in digital communication.',
      image: '/portfolioWebsite/assets/writing/nlp-advances.jpg',
      date: 'April 2025',
      category: 'Research',
      url: '/portfolioWebsite/assets/papers/codeswitching.pdf'
    },
    {
      title: 'The Never-Ending Western Exit',
      excerpt: 'This paper explores Mohsin Hamid\'s Exit West as a reimagining of migration through magical realism, focusing on the psychological and cultural dislocation of refugees. It analyzes how Hamid uses surreal elements—such as the magical doors—to blur borders of space, identity, and time. The novel is read as a critique of Western perceptions of migration and an invocation of shared global responsibility.',
      image: '/assets/writing/ml-future.jpg',
      date: 'Spring 2025',
      category: 'Analysis',
      url: '/assets/papers/exitwest.pdf'
    },
    {
      title: 'Ethics in Artificial Intelligence',
      excerpt: 'Discussing the importance of ethical considerations in AI development and deployment, focusing on bias mitigation, transparency, and responsible innovation. This paper examines real-world case studies and proposes frameworks for ethical AI development.',
      image: '/assets/writing/ai-ethics.jpg',
      date: 'January 2024',
      category: 'Opinion',
      url: '/assets/papers/ai-ethics.pdf'
    }
  ];

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
              <ArticleImage>
                <img src={article.image} alt={article.title} />
              </ArticleImage>
              <ArticleContent>
                <ArticleMeta>
                  <ArticleTag>{article.category}</ArticleTag>
                  <span>{article.date}</span>
                </ArticleMeta>
                <ArticleTitle>
                  <a href={article.url}>{article.title}</a>
                </ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ReadMore href={article.url}>
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