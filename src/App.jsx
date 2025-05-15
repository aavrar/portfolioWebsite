import React from 'react';
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

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <ResumeSection />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 