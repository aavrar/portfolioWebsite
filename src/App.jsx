import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MicrofictionGenerator from './components/MicrofictionGenerator';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  transition: padding-left var(--transition-slow);
  padding-left: ${props => props.sidebarVisible ? '240px' : '0'};

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

function App() {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setSidebarVisible(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Sidebar />
        <MainContent sidebarVisible={sidebarVisible}>
          <Hero />
          <About />
          <Projects />
          <ResumeSection />
          <Writing />
          <MicrofictionGenerator />
          <Contact />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; 