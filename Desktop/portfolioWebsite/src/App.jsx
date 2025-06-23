// App.jsx
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import PortfolioChatbot from './components/PortfolioChatbot';
import ResumeSection from './components/ResumeSection';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MicrofictionGenerator from './components/MicrofictionGenerator';
import CodeSwitching from './components/codeswitching';
import WritingPage from './components/WritingPage';
import { AnimatePresence, motion } from 'framer-motion';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname + location.hash}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <PageTransition>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Projects />
                    <PortfolioChatbot />
                    <ResumeSection />
                    <Writing />
                    <MicrofictionGenerator />
                    <Contact />
                  </>
                } />
                <Route path="/codeswitching" element={<CodeSwitching />} />
                <Route path="/writing/:slug" element={<WritingPage />} />
              </Routes>
            </PageTransition>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
