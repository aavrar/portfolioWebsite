import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: var(--background);
  padding: var(--space-lg);
  transform: translateX(${props => props.isVisible ? '0' : '-100%'});
  transition: transform var(--transition-slow) ease-in-out;
  z-index: 100;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 240px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(
      135deg,
      var(--accent-primary) 0%,
      var(--accent-secondary) 100%
    );
    transform: scaleY(0);
    transition: transform var(--transition-fast);
  }

  &:hover {
    color: var(--text-primary);
    background-color: var(--background-alt);
    
    &:before {
      transform: scaleY(1);
    }
  }

  &.active {
    color: var(--text-primary);
    background-color: var(--background-alt);
    
    &:before {
      transform: scaleY(1);
    }
  }
`;

const MobileToggle = styled.button`
  position: fixed;
  left: var(--space-md);
  top: var(--space-md);
  z-index: 101;
  background: var(--background);
  border: none;
  padding: var(--space-sm);
  border-radius: var(--radius-full);
  cursor: pointer;
  display: none;
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--background-alt);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past header (approximately 60px)
      setIsVisible(window.scrollY > 60);

      // Update active section based on scroll position
      const sections = ['about', 'projects', 'writing', 'resume', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMobileOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'writing', label: 'Research & Writing' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <MobileToggle 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMobileOpen ? '✕' : '☰'}
      </MobileToggle>
      
      <SidebarContainer isVisible={isVisible || isMobileOpen}>
        <NavList>
          {navItems.map(({ id, label }) => (
            <NavItem
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </NavItem>
          ))}
        </NavList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar; 