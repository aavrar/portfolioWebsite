import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  background: linear-gradient(135deg, var(--background-alt) 60%, var(--background) 100%);
  padding: var(--space-xl) 0 var(--space-2xl) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const AboutCard = styled.div`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--card-shadow);
  border: 1.5px solid var(--card-border);
  padding: var(--space-xl) var(--space-lg);
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--accent);
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const Paragraph = styled.p`
  margin-bottom: var(--space-md);
  color: var(--text-secondary);
  font-size: 1.18rem;
  line-height: 1.8;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid var(--card-border);
  margin: var(--space-md) 0;
  width: 60px;
`;

const Quote = styled.blockquote`
  margin: var(--space-lg) 0 0 0;
  padding-left: var(--space-md);
  border-left: 4px solid var(--accent);
  color: var(--text-primary);
  font-size: 1.15rem;
  font-style: italic;
  background: rgba(245,246,250,0.25);
`;

const About = () => {
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <Container>
        <AboutCard>
          <Heading>About Me</Heading>
          <Paragraph>
            I’m a Computer Science student and a writer, passionate about artificial intelligence, machine learning, and the art of storytelling. My journey is driven by curiosity—whether I’m building software or crafting essays, I love exploring the intersection of logic and creativity.
          </Paragraph>
          <Paragraph>
            Currently, I’m focused on AI research and developing innovative solutions that make a real impact. I thrive on learning new technologies, contributing to open-source, and using narrative to make complex ideas accessible.
          </Paragraph>
          <Divider />
          <Quote>
            “I believe the best technology tells a story—and the best stories are shaped by the world’s most creative minds.”
          </Quote>
        </AboutCard>
      </Container>
    </AboutSection>
  );
};

export default About;
