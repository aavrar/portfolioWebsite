// components/CodeSwitching.jsx
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
  padding: var(--space-xl) 0 var(--space-2xl) 0;
  background: var(--background);
  color: var(--text-secondary);
  min-height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--space-3xl);
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: var(--space-xl);
  }
`;

const TOC = styled.nav`
  position: sticky;
  top: 100px;
  background: var(--card-bg);
  border: 1.5px solid var(--card-border);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-3xl);
  box-shadow: var(--card-shadow);
  max-width: 260px;
  min-width: 180px;
  height: fit-content;
  @media (max-width: 1024px) {
    position: static;
    max-width: 100%;
    margin-bottom: var(--space-lg);
  }
`;

const TOCLink = styled.a`
  display: block;
  margin: var(--space-xs) 0;
  font-size: 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-left: 3px solid transparent;
  padding-left: 0.5em;
  transition: color 0.18s, border-color 0.18s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    text-decoration: underline;
  }
`;

const MainContent = styled.div`
  flex: 1 1 700px;
  min-width: 0;
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: var(--space-2xl);
  padding-top: var(--space-lg);
  scroll-margin-top: 80px;
  background: transparent;
  &.fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 2.5vw, 2.5rem);
  color: var(--accent);
  margin-bottom: var(--space-md);
  font-weight: 800;
  letter-spacing: -0.01em;
  border-bottom: 2px solid var(--accent-light);
  padding-bottom: var(--space-xs);
`;

const Paragraph = styled.p`
  font-size: 1.13rem;
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  color: var(--text-secondary);
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
`;

const StatCard = styled(AnimatedCard)`
  text-align: center;
  padding: var(--space-md) var(--space-lg);
  background: var(--background-elevated);
  border: 1.5px solid var(--card-border);
  box-shadow: var(--card-shadow);
  min-width: 140px;
`;

const StatTitle = styled.div`
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 800;
`;

const ChartFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
`;

const ChartCard = styled(AnimatedCard)`
  flex: 1 1 340px;
  max-width: 420px;
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-elevated);
`;

const SampleTweet = styled.div`
  background: var(--card-bg);
  border: 1.5px solid var(--card-border);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  box-shadow: var(--card-shadow);
  margin-bottom: var(--space-md);
`;

const TweetText = styled.p`
  font-size: 1.05rem;
  margin-bottom: var(--space-xs);
  line-height: 1.5;
  color: var(--text-primary);
`;

const Highlight = styled.span`
  background-color: var(--accent-light);
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
      labels: { color: '#23272f', font: { size: 13 } },
    },
    title: {
      display: true,
      text: 'Token Language Breakdown',
      color: '#23272f',
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
      color: '#23272f',
      font: { size: 16 },
    },
    tooltip: {
      callbacks: {
        label: (context) => `Switch Rate: ${context.formattedValue}%`,
      },
    },
  },
  scales: {
    x: { ticks: { color: '#6b7280' }, grid: { color: '#e5e7eb' } },
    y: { ticks: { color: '#6b7280' }, grid: { color: '#e5e7eb' } },
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
        backgroundColor: ['#ff9b9b', '#2d3a8c'],
        borderColor: ['#f5f6fa', '#f5f6fa'],
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
        backgroundColor: ['#3ddad7'],
      },
    ],
  };

  // Stats for the grid
  const stats = [
    { title: 'Total Tokens', value: '1,161,779' },
    { title: 'Unique Tokens', value: '69,503' },
    { title: 'Hindi Tokens', value: '830,801' },
    { title: 'English Tokens', value: '330,978' },
    { title: 'Switch Rate', value: '30.54%' },
  ];

  return (
    <Page>
      <Layout>
        <TOC>
          <strong style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>Sections</strong>
          <TOCLink href="#overview">Overview</TOCLink>
          <TOCLink href="#charts">Charts</TOCLink>
          <TOCLink href="#insights">Insights</TOCLink>
          <TOCLink href="#applications">Applications</TOCLink>
          <TOCLink href="#examples">Examples</TOCLink>
        </TOC>
        <MainContent>
          <Section id="overview" className="fade-in-up">
            <SectionTitle>Code-Switching in Online Contexts</SectionTitle>
            <Paragraph>
              Drawing on the L3Cube-HingCorpus, this analysis explores over 60,000 Hinglish tweets to study
              code-switching as a strategy of identity performance.
            </Paragraph>
            <StatGrid>
              {stats.map((stat, idx) => (
                <StatCard key={stat.title} className="fade-in-up" style={{ animationDelay: `${0.1 + idx * 0.07}s` }}>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatValue>{stat.value}</StatValue>
                </StatCard>
              ))}
            </StatGrid>
          </Section>

          <Section id="charts" className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SectionTitle>Language Distribution & Frequency</SectionTitle>
            <Paragraph>The following charts illustrate token distribution and switching behavior.</Paragraph>
            <ChartFlex>
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }}>
                <ChartCard>
                  <Pie data={langData} options={pieOptions} />
                </ChartCard>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <ChartCard>
                  <Bar data={switchData} options={barOptions} />
                </ChartCard>
              </motion.div>
            </ChartFlex>
          </Section>

          <Section id="insights" className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <SectionTitle>Insights & Implications</SectionTitle>
            <Paragraph>
              Most switches occur mid-sentence and tag-level, acting as expressive social signals — supporting theories by Auer and Myers-Scotton.
            </Paragraph>
          </Section>

          <Section id="applications" className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <SectionTitle>Applications for AI & Society</SectionTitle>
            <Paragraph>
              These patterns can inform better multilingual NLP systems, teaching policy, and inclusive tech tools.
            </Paragraph>
            <Paragraph>
              Dataset:
              <a href="https://github.com/l3cube-pune/code-mixed-nlp" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: 'var(--accent)' }}>
                L3Cube HingCorpus
              </a>
            </Paragraph>
            <AnimatedButton
              as="a"
              href="https://raw.githubusercontent.com/l3cube-pune/code-mixed-nlp/main/hinglish/hinglish_code_mixed.txt"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: 'var(--space-md)' }}
            >
              Download Dataset
            </AnimatedButton>
            <Paragraph>
              <i>This project is part of an Honors course on Applied Linguistics at DePauw University.</i>
            </Paragraph>
          </Section>

          <Section id="examples" className="fade-in-up" style={{ animationDelay: '0.5s' }}>
            <SectionTitle>Sample Tweets with Code-Switching</SectionTitle>
            <Paragraph>Highlighted examples from the dataset:</Paragraph>
            <SampleTweet>
              <TweetText>Movie <Highlight>dekhne gaya tha</Highlight> with my friends.</TweetText>
              <TweetText>Please <Highlight>yaar</Highlight>, kal mat aana late.</TweetText>
            </SampleTweet>
          </Section>
        </MainContent>
      </Layout>
    </Page>
  );
};

export default CodeSwitching;
