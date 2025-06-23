import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';
import writingArticles from '../data/writing';

const PageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
  background: var(--background);
  color: var(--text-primary);
  padding-top: calc(var(--space-xl) + 60px);
  animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  color: var(--accent);
  margin-bottom: var(--space-md);
  font-weight: 900;
  letter-spacing: -0.01em;
  border-bottom: 2px solid var(--accent-light);
  padding-bottom: var(--space-xs);
`;

const Meta = styled.p`
  font-size: 0.98rem;
  color: var(--text-tertiary);
  margin-top: var(--space-xs);
  margin-bottom: var(--space-xl);
`;

const Content = styled.div`
  font-size: 1.13rem;
  line-height: 1.8;
  color: var(--text-primary);

  h1, h2, h3, h4, h5, h6 {
    color: var(--accent);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-md);
    font-weight: 800;
  }

  p {
    margin-bottom: var(--space-md);
  }

  a {
    color: var(--accent);
    text-decoration: underline;
    &:hover {
      color: var(--accent-hover);
    }
  }

  .annotation-trigger {
    cursor: help;
    border-bottom: 1px dashed var(--accent-light);
    position: relative;
    color: var(--accent-hover);
    background: var(--background-alt);
    border-radius: 3px;
    padding: 0 2px;
    transition: background 0.18s;
    &:hover {
      background: var(--accent-light);
      color: var(--background);
    }
  }
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--card-border);
  z-index: 1000;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: var(--accent);
  transition: width 0.1s ease-out;
`;

const AnnotationTooltip = styled.div`
  position: absolute;
  top: 1.7em;
  left: 50%;
  transform: translateX(-50%);
  background: var(--card-bg);
  color: var(--text-primary);
  border: 1.5px solid var(--card-border);
  border-radius: var(--radius-md);
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.95rem;
  white-space: normal;
  max-width: 260px;
  z-index: 1001;
  box-shadow: 0 4px 16px rgba(44,62,80,0.10);
  display: ${({ show }) => (show ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent var(--card-border) transparent;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent var(--card-bg) transparent;
    margin-bottom: 1px;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-3xl);
  padding: 0 var(--space-lg);

  a {
    text-decoration: none;
  }
`;

const WritingPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('Loading...');
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef(null);
  const [activeAnnotation, setActiveAnnotation] = useState({ show: false, text: '', position: { top: 0, left: 0 } });

  const currentArticleIndex = writingArticles.findIndex(article => article.slug === slug);
  const previousArticle = currentArticleIndex > 0 ? writingArticles[currentArticleIndex - 1] : null;
  const nextArticle = currentArticleIndex < writingArticles.length - 1 ? writingArticles[currentArticleIndex + 1] : null;

  useEffect(() => {
    import(`../content/writing/${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(text => {
            const parts = text.split('---');
            if (parts.length > 2) {
              try {
                const frontmatter = parts[1].trim().split('\n').reduce((acc, line) => {
                  const [key, value] = line.split(':').map(s => s.trim());
                  if (key && value) {
                    acc[key] = value.replace(/['"]/g, '');
                  }
                  return acc;
                }, {});
                setTitle(frontmatter.title || 'Article');
                setEstimatedTime(frontmatter.estimatedReadingTime || null);
                setContent(parts.slice(2).join('---').trim());
              } catch (e) {
                setTitle('Article');
                setContent(text);
              }
            } else {
              setTitle('Article');
              setContent(text);
            }
          });
      })
      .catch(() => {
        setContent('# Article Not Found\n\nThe requested article could not be loaded.');
        setTitle('Error');
        setEstimatedTime(null);
      });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const element = contentRef.current;
      const totalHeight = element.clientHeight - window.innerHeight + element.getBoundingClientRect().top;
      const currentScroll = window.scrollY;
      const scrollProgress = (currentScroll / totalHeight) * 100;
      setProgress(Math.max(0, Math.min(100, scrollProgress)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  // Annotation logic
  const processAnnotations = (markdown) => {
    const regex = /\[\[(.*?) \| (.*?)\]\]/g;
    let processedMarkdown = markdown;
    const annotationsMap = {};
    let match;
    while ((match = regex.exec(markdown)) !== null) {
      const term = match[1];
      const annotationText = match[2];
      const placeholder = `ANNOTATION_PLACEHOLDER_${Object.keys(annotationsMap).length}_${term}`;
      annotationsMap[placeholder] = annotationText;
      processedMarkdown = processedMarkdown.replace(match[0], placeholder);
    }
    return { processedMarkdown, annotationsMap };
  };

  useEffect(() => {
    if (!contentRef.current || !activeAnnotation.annotationsMap) return;
    const triggers = contentRef.current.querySelectorAll('.annotation-trigger');
    const showTooltip = (e) => {
      const key = e.target.dataset.annotationKey;
      const text = activeAnnotation.annotationsMap[key];
      const rect = e.target.getBoundingClientRect();
      setActiveAnnotation({
        show: true,
        text: text,
        position: {
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX + rect.width / 2,
        },
        annotationsMap: activeAnnotation.annotationsMap
      });
    };
    const hideTooltip = () => {
      setActiveAnnotation(prev => ({ ...prev, show: false }));
    };
    triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', showTooltip);
      trigger.addEventListener('mouseleave', hideTooltip);
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const key = e.target.dataset.annotationKey;
        const text = activeAnnotation.annotationsMap[key];
        if (activeAnnotation.show && activeAnnotation.text === text) {
          setActiveAnnotation(prev => ({ ...prev, show: false }));
        } else {
          const rect = e.target.getBoundingClientRect();
          setActiveAnnotation({
            show: true,
            text: text,
            position: {
              top: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX + rect.width / 2,
            },
            annotationsMap: activeAnnotation.annotationsMap
          });
        }
      });
    });
    return () => {
      triggers.forEach(trigger => {
        trigger.removeEventListener('mouseenter', showTooltip);
        trigger.removeEventListener('mouseleave', hideTooltip);
        trigger.removeEventListener('click', hideTooltip);
      });
    };
  }, [content, activeAnnotation.annotationsMap]);

  const renderContent = (markdown) => {
    const { processedMarkdown, annotationsMap } = processAnnotations(markdown);
    if (Object.keys(annotationsMap).length > 0 && !activeAnnotation.annotationsMap) {
      setActiveAnnotation(prev => ({ ...prev, annotationsMap: annotationsMap }));
    }
    const pattern = /ANNOTATION_PLACEHOLDER_(\d+)_(.+?)/;
    const renderers = {
      text: ({ node, ...props }) => {
        const text = props.children;
        const match = text.match(pattern);
        if (match) {
          const key = `ANNOTATION_PLACEHOLDER_${match[1]}_${match[2]}`;
          const term = match[2];
          return (
            <span className="annotation-trigger" data-annotation-key={key}>
              {term}
            </span>
          );
        }
        return text;
      }
    };
    return <ReactMarkdown>{processedMarkdown}</ReactMarkdown>;
  };

  return (
    <PageContainer>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
      <Title>{title}</Title>
      {estimatedTime && <Meta>{estimatedTime} min read</Meta>}
      <Content ref={contentRef}>
        {renderContent(content)}
      </Content>
      {activeAnnotation.show && (
        <AnnotationTooltip
          style={{ top: activeAnnotation.position.top, left: activeAnnotation.position.left }}
          show={activeAnnotation.show}
        >
          {activeAnnotation.text}
        </AnnotationTooltip>
      )}
      <NavigationButtons>
        {previousArticle ? (
          <AnimatedButton as={Link} to={`/writing/${previousArticle.slug}`}>
            ← {previousArticle.title}
          </AnimatedButton>
        ) : (
          <div />
        )}
        <AnimatedButton as={Link} to="/">
          Back to Home
        </AnimatedButton>
        {nextArticle ? (
          <AnimatedButton as={Link} to={`/writing/${nextArticle.slug}`}>
            {nextArticle.title} →
          </AnimatedButton>
        ) : (
          <div />
        )}
      </NavigationButtons>
    </PageContainer>
  );
};

export default WritingPage;
