import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';

const Section = styled.section`
  background: var(--background);
  padding: var(--space-2xl) 0 var(--space-3xl) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const CardWrapper = styled(AnimatedCard)`
  padding: var(--space-2xl) var(--space-lg);
  text-align: center;
  position: relative;
  animation: fadeInUp 0.9s cubic-bezier(0.4,0,0.2,1) both;
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: var(--space-md);
  color: var(--accent);
  font-weight: 800;
  letter-spacing: -0.01em;
`;

const Input = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: var(--space-md);
  font-size: 1.08rem;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--card-border);
  background: var(--background-alt);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  resize: vertical;
  transition: border-color var(--transition);

  &:focus {
    border-color: var(--accent);
    outline: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

const StoryOutput = styled.blockquote`
  margin-top: var(--space-xl);
  font-style: italic;
  color: var(--text-primary);
  background: var(--background-alt);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  white-space: pre-wrap;
  line-height: 1.7;
  font-size: 1.13rem;
  box-shadow: 0 2px 8px rgba(44,62,80,0.06);
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
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  animation: ${progressAnimation} 1.5s linear infinite;
`;

const ModelNote = styled.div`
  margin-top: var(--space-lg);
  font-size: 0.95rem;
  color: var(--text-tertiary);
  opacity: 0.85;
`;

const Prompt = styled.p`
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-md);
  font-style: italic;
  opacity: 0.92;
`;

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
      setStory('Failed to generate story.');
    }

    setLoading(false);
  };

  return (
    <Section id="microfiction">
      <Container>
        <CardWrapper className="fade-in-up">
          <Heading>Microfiction Generator</Heading>
          <Prompt>
            What do you want to see in a story? Describe a mood, a moment, or a mystery.
          </Prompt>
          <Input
            placeholder="e.g. a forgotten machine, the last sunrise, a secret beneath the sea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Describe your story prompt"
            disabled={loading}
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
