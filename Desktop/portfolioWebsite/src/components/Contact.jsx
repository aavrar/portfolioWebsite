import React from 'react';
import styled from 'styled-components';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';

const ContactSection = styled.section`
  background: linear-gradient(135deg, var(--background-alt) 60%, var(--background) 100%);
  padding: var(--space-2xl) 0 var(--space-3xl) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-xl);

  h2 {
    font-size: 2.3rem;
    font-weight: 900;
    color: var(--accent);
    margin-bottom: var(--space-md);
    letter-spacing: -0.01em;
  }

  p {
    color: var(--text-secondary);
    max-width: 520px;
    margin: 0 auto;
    font-size: 1.13rem;
    line-height: 1.7;
  }
`;

const CardWrapper = styled(AnimatedCard)`
  max-width: 480px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
  text-align: center;
  background: var(--background-elevated);
  border: 1.5px solid var(--card-border);
  box-shadow: var(--card-shadow);
  animation: fadeInUp 0.9s cubic-bezier(0.4,0,0.2,1) both;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: center;
  margin-top: var(--space-md);
`;

const Note = styled.p`
  color: var(--text-secondary);
  font-size: 0.98rem;
  margin-top: var(--space-lg);
  opacity: 0.85;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <h2>Get in Touch</h2>
          <p>
            Whether you want to talk about a project, share a story, or just say hello, I’m always open to thoughtful conversations. Let’s connect and see what we can build or imagine together.
          </p>
        </SectionHeader>

        <CardWrapper className="fade-in-up">
          <ContactButtons>
            <AnimatedButton href="mailto:aahadvakani@gmail.com">
              📧 Email Me
            </AnimatedButton>
            <AnimatedButton
              href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn Profile
            </AnimatedButton>
            <AnimatedButton href="https://github.com/aavrar" target="_blank" rel="noopener noreferrer">
              💻 View GitHub
            </AnimatedButton>
          </ContactButtons>
          <Note>
            I love collaborating on projects that blend technology and narrative. If you have an idea, a question, or just want to chat about AI, writing, or creative tech, drop me a line.
          </Note>
        </CardWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
