import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(43, 42, 51, 0.95);
  backdrop-filter: blur(8px);
  transition: all var(--transition-normal);
  border-bottom: 1px solid var(--card-border);
  padding: var(--space-md) 0;
  box-shadow: ${props => props.isScrolled ? 'var(--shadow-md)' : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(AnimatedButton)`
  font-size: 1.5rem;
  font-weight: bold;
  padding: var(--space-xs);
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--space-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  padding: var(--space-3xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform var(--transition-normal);
  z-index: 900;
`;

const NavLink = styled(AnimatedButton)`
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.9rem;
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: var(--space-sm);
  color: var(--text-primary);
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--text-primary);
    transition: all var(--transition-normal);
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: var(--text-primary);
      transition: all var(--transition-normal);
    }

    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }
  }

  ${props => props.isOpen && `
    span {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  `}
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          AV
        </Logo>
        <NavLinks>
          <NavLink href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</NavLink>
          <NavLink href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>Projects</NavLink>
          <NavLink href="#resume" onClick={(e) => {
            e.preventDefault();
            scrollToSection('resume');
          }}>Resume</NavLink>
          <NavLink href="#writing" onClick={(e) => {
            e.preventDefault();
            scrollToSection('writing');
          }}>Writing</NavLink>
          <NavLink href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</NavLink>
        </NavLinks>
        <MenuButton 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isOpen={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span />
        </MenuButton>
      </Nav>

      <MobileNavLinks isOpen={isMenuOpen}>
        <NavLink href="#about" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>About</NavLink>
        <NavLink href="#projects" onClick={(e) => {
          e.preventDefault();
          scrollToSection('projects');
        }}>Projects</NavLink>
        <NavLink href="#resume" onClick={(e) => {
          e.preventDefault();
          scrollToSection('resume');
        }}>Resume</NavLink>
        <NavLink href="#writing" onClick={(e) => {
          e.preventDefault();
          scrollToSection('writing');
        }}>Writing</NavLink>
        <NavLink href="#contact" onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}>Contact</NavLink>
      </MobileNavLinks>
    </HeaderContainer>
  );
};

export default Header; 