
// Full enhanced CodeSwitching.jsx implementation goes here
// For demonstration, the placeholder here is replaced by actual code from our working state
// Includes all features discussed
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale
  );
import React from 'react';
import styled from 'styled-components';
import { Pie, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';

const Page = styled.div`
  width: 100%;
  padding: var(--space-3xl) var(--space-lg);
  background-color: var(--background);
  color: var(--text-secondary);
`;

const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto var(--space-4xl);
  padding-top: var(--space-lg);
  scroll-margin-top: 80px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 2.5vw, 2.5rem);
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  border-bottom: 2px solid var(--accent-secondary);
  padding-bottom: var(--space-xs);
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
`;

const TOC = styled.nav`
  position: sticky;
  top: 100px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-3xl);
  box-shadow: var(--shadow-sm);
  max-width: 300px;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--space-3xl);
  max-width: 1440px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const TOCLink = styled.a`
  display: block;
  margin: var(--space-xs) 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-decoration: none;

  &:hover {
    color: var(--accent-primary);
    text-decoration: underline;
  }
`;

const ChartFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
`;

const ChartCard = styled(AnimatedCard)`
  flex: 1 1 380px;
  max-width: 480px;
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-lg);
`;

const SampleTweet = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
`;

const TweetText = styled.p`
  font-size: 1rem;
  margin-bottom: var(--space-sm);
  line-height: 1.5;
`;

const Highlight = styled.span`
  background-color: var(--accent-secondary);
  padding: 0 4px;
  border-radius: 4px;
  font-weight: bold;
  color: var(--text-primary);
`;

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: { color: '#aaa', font: { size: 12 } },
    },
    title: {
      display: true,
      text: 'Token Language Breakdown',
      color: '#fff',
      font: { size: 16 },
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.formattedValue} tokens`,
      },
    },
  },
  animation: { animateScale: true },
};

const barOptions = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Code Switch Frequency (%)',
      color: '#fff',
      font: { size: 16 },
    },
    tooltip: {
      callbacks: {
        label: (context) => `Switch Rate: ${context.formattedValue}%`,
      },
    },
  },
  scales: {
    x: { ticks: { color: '#ccc' }, grid: { color: '#333' } },
    y: { ticks: { color: '#ccc' }, grid: { color: '#333' } },
  },
  animation: { duration: 1000, easing: 'easeOutQuart' },
};

const CodeSwitching = () => {
  const langData = {
    labels: ['Hindi Tokens', 'English Tokens'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [830801, 330978],
        backgroundColor: ['#ff9b9b', '#ffe680'],
        borderColor: ['#2b2a33', '#2b2a33'],
        borderWidth: 1,
      },
    ],
  };

  const switchData = {
    labels: ['Code Switch Rate'],
    datasets: [
      {
        label: 'Switches (%)',
        data: [30.54],
        backgroundColor: ['#b8f2e6'],
      },
    ],
  };

  return (
    <Page>
    <Layout>
      <TOC>
        <strong>Sections</strong>
        <TOCLink href="#overview">Overview</TOCLink>
        <TOCLink href="#charts">Charts</TOCLink>
        <TOCLink href="#insights">Insights</TOCLink>
        <TOCLink href="#applications">Applications</TOCLink>
        <TOCLink href="#examples">Examples</TOCLink>
      </TOC>
      </Layout>

      <Section id="overview">
        <SectionTitle>Code-Switching in Online Contexts</SectionTitle>
        <Paragraph>
          Drawing on the L3Cube-HingCorpus, this analysis explores over 60,000 Hinglish tweets to study
          code-switching as a strategy of identity performance.
        </Paragraph>
        <StatGrid>
          <AnimatedCard title="Total Tokens" value="1,161,779" />
          <AnimatedCard title="Unique Tokens" value="69,503" />
          <AnimatedCard title="Hindi Tokens" value="830,801" />
          <AnimatedCard title="English Tokens" value="330,978" />
          <AnimatedCard title="Switch Rate" value="30.54%" />
        </StatGrid>
      </Section>

      <Section id="charts">
        <SectionTitle>Language Distribution & Frequency</SectionTitle>
        <Paragraph>The following charts illustrate token distribution and switching behavior.</Paragraph>
        <ChartFlex>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }}>
            <ChartCard><Pie data={langData} options={pieOptions} /></ChartCard>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <ChartCard><Bar data={switchData} options={barOptions} /></ChartCard>
          </motion.div>
        </ChartFlex>
      </Section>

      <Section id="insights">
        <SectionTitle>Insights & Implications</SectionTitle>
        <Paragraph>
          Most switches occur mid-sentence and tag-level, acting as expressive social signals — supporting theories by Auer and Myers-Scotton.
        </Paragraph>
      </Section>

      <Section id="applications">
        <SectionTitle>Applications for AI & Society</SectionTitle>
        <Paragraph>
          These patterns can inform better multilingual NLP systems, teaching policy, and inclusive tech tools.
        </Paragraph>
        <Paragraph>
          Dataset:
          <a href="https://github.com/l3cube-pune/code-mixed-nlp" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: 'var(--accent-primary)' }}>
            L3Cube HingCorpus
          </a>
        </Paragraph>
        <AnimatedButton
          as="a"
          href="https://raw.githubusercontent.com/l3cube-pune/code-mixed-nlp/main/hinglish/hinglish_code_mixed.txt"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Dataset
        </AnimatedButton>
        <Paragraph>
          <i>This project is part of an Honors course on Applied Linguistics at DePauw University.</i>
        </Paragraph>
      </Section>

      <Section id="examples">
        <SectionTitle>Sample Tweets with Code-Switching</SectionTitle>
        <Paragraph>Highlighted examples from the dataset:</Paragraph>
        <SampleTweet>
          <TweetText>Movie <Highlight>dekhne gaya tha</Highlight> with my friends.</TweetText>
          <TweetText>Please <Highlight>yaar</Highlight>, kal mat aana late.</TweetText>
        </SampleTweet>
      </Section>
    
    </Page>
  );
};

export default CodeSwitching;
