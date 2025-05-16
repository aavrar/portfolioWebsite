import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import { Link, useLocation } from 'react-router-dom';

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
  transform: translateY(${props => props.isHidden ? '-100%' : '0'});
  opacity: ${props => props.isHidden ? '0' : '1'};
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

const NavLink = styled(AnimatedButton).attrs({ as: Link })`
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.9rem;
  background: none;
  border: none;
  text-decoration: none;

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
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsHidden(window.scrollY > 60);
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
        <Logo as={Link} to="/">AV</Logo>
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
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/codeswitching">Code-Switching</NavLink>
        <NavLink to="/#resume">Resume</NavLink>
        <NavLink to="/#writing">Research & Writing</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </MobileNavLinks>
    </HeaderContainer>
  );
};

export default Header;
