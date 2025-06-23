// components/Header.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1.5px solid var(--card-border);
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 4px 24px rgba(44,62,80,0.08)' : 'none'};
  transition: 
    background var(--transition), 
    box-shadow var(--transition), 
    transform var(--transition), 
    opacity var(--transition);
  transform: translateY(${({ isHidden }) => isHidden ? '-100%' : '0'});
  opacity: ${({ isHidden }) => isHidden ? '0' : '1'};
`;

const Nav = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`;

const Logo = styled(Link)`
  font-size: 1.7rem;
  font-weight: 900;
  color: var(--accent);
  letter-spacing: -0.03em;
  text-decoration: none;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  background: none;
  transition: color var(--transition), background var(--transition);

  &:hover, &:focus {
    color: var(--accent-hover);
    background: var(--accent-light);
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--space-lg);
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  font-size: 1.05rem;
  font-weight: 600;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  text-decoration: none;
  background: none;
  transition: color var(--transition), background var(--transition);

  &:hover, &:focus {
    color: var(--accent);
    background: var(--accent-light);
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: var(--space-sm);
  color: var(--text-primary);
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 900px) {
    display: block;
  }

  span {
    display: block;
    width: 28px;
    height: 2.5px;
    background-color: var(--text-primary);
    border-radius: 2px;
    position: relative;
    transition: all var(--transition);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 28px;
      height: 2.5px;
      background-color: var(--text-primary);
      border-radius: 2px;
      transition: all var(--transition);
    }

    &::before {
      top: -9px;
      left: 0;
    }

    &::after {
      top: 9px;
      left: 0;
    }
  }

  ${({ isOpen }) => isOpen && `
    span {
      background-color: transparent;
    }
    span::before {
      transform: translateY(9px) rotate(45deg);
    }
    span::after {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}
`;

const MobileNavLinks = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--background);
  padding: var(--space-3xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  transform: translateX(${({ isOpen }) => isOpen ? '0' : '100%'});
  transition: transform var(--transition);
  z-index: 1050;
  box-shadow: 0 8px 32px rgba(44,62,80,0.10);

  @media (min-width: 901px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: var(--accent);
  font-size: 1.25rem;
  font-weight: 700;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  text-decoration: none;
  background: none;
  transition: color var(--transition), background var(--transition);

  &:hover, &:focus {
    background: var(--accent-light);
    color: var(--accent-hover);
    text-decoration: none;
  }
`;



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsHidden(window.scrollY > 60 && window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
    setIsMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer isScrolled={isScrolled} isHidden={isHidden}>
      <Nav>
        <LeftGroup>
          <Logo to="/">AV</Logo>
        </LeftGroup>
        <NavLinks>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
          <NavLink to="/codeswitching">Code-Switching</NavLink>
          <NavLink to="/#resume">Resume</NavLink>
          <NavLink to="/#writing">Research & Writing</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
        </NavLinks>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} aria-label="Toggle menu">
          <span />
        </MenuButton>
      </Nav>
      <MobileNavLinks isOpen={isMenuOpen}>
        <MobileNavLink to="/#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
        <MobileNavLink to="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
        <MobileNavLink to="/codeswitching" onClick={() => setIsMenuOpen(false)}>Code-Switching</MobileNavLink>
        <MobileNavLink to="/#resume" onClick={() => setIsMenuOpen(false)}>Resume</MobileNavLink>
        <MobileNavLink to="/#writing" onClick={() => setIsMenuOpen(false)}>Research & Writing</MobileNavLink>
        <MobileNavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
      </MobileNavLinks>
    </HeaderContainer>
  );
};

export default Header;
