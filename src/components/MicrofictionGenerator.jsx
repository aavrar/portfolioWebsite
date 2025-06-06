import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';

// Styled Components
const Section = styled.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const CardWrapper = styled(AnimatedCard)`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-2xl);
  text-align: center;
  position: relative;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
`;

const Input = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: var(--space-md);
  font-size: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  resize: vertical;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

const StoryOutput = styled.blockquote`
  margin-top: var(--space-xl);
  font-style: italic;
  color: var(--text-secondary);
  white-space: pre-wrap;
  line-height: 1.6;
`;

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: var(--card-border);
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
  overflow: hidden;
`;

const progressAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--accent-secondary), var(--accent-primary));
  animation: ${progressAnimation} 2s linear infinite;
`;

const ModelNote = styled.div`
  margin-top: var(--space-lg);
  font-size: 0.75rem;
  color: var(--text-tertiary);
`;

// Main Component
const MicrofictionGenerator = () => {
  const [story, setStory] = useState('');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const modelUsed = 'gemini-2.0-flash';

  const generateStory = async () => {
    if (!input.trim()) {
      setStory('Please describe something to write about.');
      return;
    }

    const prompt = `Write a microfiction story about ${input.trim()}. Respond with exactly 3–4 surreal sentences, no explanations.`;

    setLoading(true);
    setStory('');

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const output = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No story generated.';
      setStory(output.trim());
    } catch (err) {
      console.error('Error:', err);
      setStory('Failed to generate story.');
    }

    setLoading(false);
  };

  return (
    <Section id="microfiction">
      <Container>
        <CardWrapper>
          <Heading>Microfiction Generator</Heading>
          <Input
            placeholder="e.g. a forgotten machine, the last sunrise, a secret beneath the sea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ButtonArea>
            <AnimatedButton as="button" onClick={generateStory} disabled={loading}>
              {loading ? 'Generating...' : 'Generate Microfiction'}
            </AnimatedButton>
          </ButtonArea>
          {story && <StoryOutput>“{story}”</StoryOutput>}
          <ModelNote>AI Model: {modelUsed}</ModelNote>
          {loading && (
            <ProgressContainer>
              <ProgressBar />
            </ProgressContainer>
          )}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default MicrofictionGenerator;
