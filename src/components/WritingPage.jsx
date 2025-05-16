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
  background-color: var(--background);
  color: var(--text-secondary);
  /* Add padding-top to account for the fixed header */
  padding-top: calc(var(--space-xl) + 60px); /* Assuming header height is around 60px, adjust if needed */
`;

const Title = styled.h1`
  font-size: clamp(1.75rem, 2.5vw, 2.5rem);
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  border-bottom: 2px solid var(--accent-secondary);
  padding-bottom: var(--space-xs);
`;

const Meta = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: var(--space-md);
  margin-bottom: var(--space-xl);
`;

const Content = styled.div`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.8;

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-md);
  }

  p {
    margin-bottom: var(--space-md);
  }

  a {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  /* Style for the annotated text */
  .annotation-trigger {
    cursor: help;
    border-bottom: 1px dashed var(--accent-secondary);
    position: relative;
  }
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: var(--card-border);
  z-index: 1000;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: var(--accent-primary);
  transition: width 0.1s ease-out;
`;

const AnnotationTooltip = styled.div`
  position: absolute;
  top: 1.5em; /* Adjust positioning */
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.85rem;
  white-space: normal;
  max-width: 250px;
  z-index: 1001;
  box-shadow: var(--shadow-md);
  display: ${({ show }) => (show ? 'block' : 'none')};

  /* Simple arrow */
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent var(--card-border) transparent;
  }
    &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px;
    border-style: solid;
    border-color: transparent transparent var(--card-bg) transparent;
    margin-bottom: 1px; /* To sit on border */
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-4xl);
  padding: 0 var(--space-lg);

  /* Style for the AnimatedButton when used as a Link */
  a {
    text-decoration: none; /* Remove underline from links */
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

  // Find the index of the current article and the next/previous slugs
  const currentArticleIndex = writingArticles.findIndex(article => article.slug === slug);
  const previousArticle = currentArticleIndex > 0 ? writingArticles[currentArticleIndex - 1] : null;
  const nextArticle = currentArticleIndex < writingArticles.length - 1 ? writingArticles[currentArticleIndex + 1] : null;

  useEffect(() => {
    // Dynamically import the markdown file
    // This assumes the file is in src/content/writing and is named ${slug}.md
    import(`../content/writing/${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(text => {
            // Basic parsing of frontmatter and content
            const parts = text.split('---');
            if (parts.length > 2) {
              try {
                const frontmatter = parts[1].trim().split('\n').reduce((acc, line) => {
                  const [key, value] = line.split(':').map(s => s.trim());
                  if (key && value) {
                    acc[key] = value.replace(/['"]/g, ''); // Simple value cleaning
                  }
                  return acc;
                }, {});
                 setTitle(frontmatter.title || 'Article');
                 setEstimatedTime(frontmatter.estimatedReadingTime || null);
                 setContent(parts.slice(2).join('---').trim());
              } catch (e) {
                console.error("Error parsing frontmatter:", e);
                setTitle('Article');
                setContent(text); // Fallback to full text if frontmatter fails
              }
            } else {
              setTitle('Article');
              setContent(text);
            }
          });
      })
      .catch(err => {
        console.error("Failed to load markdown file:", err);
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
  }, [content]); // Recalculate scroll height when content loads


  // Function to parse custom annotation syntax and replace with span
  const processAnnotations = (markdown) => {
    // Regex to find [[Term | Annotation]]
    const regex = /\[\[(.*?) \| (.*?)\]\]/g;
    let processedMarkdown = markdown;
    const annotationsMap = {};
    let match;

    while ((match = regex.exec(markdown)) !== null) {
      const term = match[1];
      const annotationText = match[2];
      const placeholder = `ANNOTATION_PLACEHOLDER_${Object.keys(annotationsMap).length}_${term}`;

      // Store annotation text keyed by a unique placeholder
      annotationsMap[placeholder] = annotationText;

      // Replace original syntax with placeholder
      processedMarkdown = processedMarkdown.replace(match[0], placeholder);
    }

    // Now process the markdown with placeholders using react-markdown
    // Then replace placeholders in the rendered HTML with interactive spans

    return { processedMarkdown, annotationsMap };
  };

  // Effect to add event listeners to rendered annotations
  useEffect(() => {
    if (!contentRef.current || Object.keys(activeAnnotation.annotationsMap || {}).length === 0) return;

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
          annotationsMap: activeAnnotation.annotationsMap // Keep map reference
        });
    };

    const hideTooltip = () => {
        setActiveAnnotation(prev => ({ ...prev, show: false }));
    };

    triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', showTooltip);
      trigger.addEventListener('mouseleave', hideTooltip);
      // Handle click on touch devices
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
         const key = e.target.dataset.annotationKey;
          const text = activeAnnotation.annotationsMap[key];
          // Toggle visibility
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
                annotationsMap: activeAnnotation.annotationsMap // Keep map reference
                });
          }
      });
    });

    return () => {
      triggers.forEach(trigger => {
        trigger.removeEventListener('mouseenter', showTooltip);
        trigger.removeEventListener('mouseleave', hideTooltip);
        trigger.removeEventListener('click', hideTooltip); // Remove click listener too
      });
    };

  }, [content, activeAnnotation.annotationsMap]); // Re-attach listeners if content or map changes


  const renderContent = (markdown) => {
      const { processedMarkdown, annotationsMap } = processAnnotations(markdown);

      // Store the annotations map in state so event listeners can access it
       if (Object.keys(annotationsMap).length > 0 && !activeAnnotation.annotationsMap) {
             setActiveAnnotation(prev => ({ ...prev, annotationsMap: annotationsMap }));
        }


    // This is a simplified replacement after react-markdown renders
    // A more robust solution might involve a custom react-markdown component plugin
    const finalRenderedHTML = <ReactMarkdown>{processedMarkdown}</ReactMarkdown>;

    // After ReactMarkdown renders, manually replace placeholders
    // This is a bit hacky and might break with complex markdown/HTML structure
    // A better way is using remark plugins or custom renderers in react-markdown
     // For simplicity here, we'll do a string replace on the outerHTML AFTER rendering (in useEffect)
     // Or, we can use a custom component renderer for a specific pattern if react-markdown supports it
     // Let's try a custom component approach with a simple span marker instead of placeholder string

     const pattern = /ANNOTATION_PLACEHOLDER_(\d+)_(.+?)/; // Matches the placeholder pattern

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
                       {/* Tooltip will be rendered separately based on state */}
                   </span>
                );
            }
            return text; // Render normal text
         }
     };

      // ReactMarkdown doesn't directly support replacing arbitrary text patterns with components easily
      // The string replacement approach is problematic with React's virtual DOM
      // The best way is a remark plugin or custom component for a specific syntax

      // Let's stick to the original plan of processing *before* rendering with ReactMarkdown
      // And adding event listeners *after* ReactMarkdown has updated the DOM (in useEffect)

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

       {/* Render the tooltip outside of the main content flow, positioned absolutely */}
       {activeAnnotation.show && (
           <AnnotationTooltip
               style={{ top: activeAnnotation.position.top, left: activeAnnotation.position.left }}
               show={activeAnnotation.show} // Pass show prop for styled-components
           >
               {activeAnnotation.text}
           </AnnotationTooltip>
       )}

        <NavigationButtons>
            {/* Previous Article Button */}
            {previousArticle ? (
                <AnimatedButton as={Link} to={`/writing/${previousArticle.slug}`}>
                    ← {previousArticle.title}
                </AnimatedButton>
            ) : (
                // Render an empty div or placeholder if no previous article to maintain spacing
                <div></div>
            )}

            {/* Back to Home Button */}
            
             <AnimatedButton as={Link} to="/">
                Back to Home
            </AnimatedButton>
            

            {/* Next Article Button */}
            {nextArticle ? (
                 <AnimatedButton as={Link} to={`/writing/${nextArticle.slug}`}>
                    {nextArticle.title} →
                </AnimatedButton>
            ) : (
                // Render an empty div or placeholder if no next article to maintain spacing
                <div></div>
            )}
        </NavigationButtons>

    </PageContainer>
  );
};

export default WritingPage;
