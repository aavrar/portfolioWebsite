import React from 'react';
import styled from 'styled-components';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';

const ContactSection = styled.section`
  background-color: var(--background);
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
      var(--accent-secondary) 100%
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

const CardWrapper = styled(AnimatedCard)`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-2xl);
  text-align: center;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: center;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <h2>Get in Touch</h2>
          <p>
            Have a question or want to collaborate? Feel free to reach out through
            any of the following channels.
          </p>
        </SectionHeader>

        <CardWrapper>
          <ContactButtons>
            <AnimatedButton href="mailto:aahadvakani@gmail.com">
              📧 Email Me
            </AnimatedButton>
            <AnimatedButton
              href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/"
              target="_blank"
            >
              💼 LinkedIn Profile
            </AnimatedButton>
            <AnimatedButton href="https://github.com/aavrar" target="_blank">
              💻 View GitHub
            </AnimatedButton>
          </ContactButtons>
        </CardWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
