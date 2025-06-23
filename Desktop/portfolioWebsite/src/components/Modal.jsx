import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(44, 62, 80, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1), visibility 0.3s cubic-bezier(0.4,0,0.2,1);
  backdrop-filter: blur(6px);
`;

const ModalContainer = styled.div`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl) var(--space-xl);
  width: 92%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 16px 48px rgba(44,62,80,0.16);
  border: 1.5px solid var(--card-border);
  animation: fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) both;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transform: ${props => props.$isOpen ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(24px)'};
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);

  @media (max-width: 600px) {
    padding: var(--space-lg) var(--space-md);
    max-width: 98vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.18s, color 0.18s, transform 0.18s;

  &:hover, &:focus {
    background: var(--accent-light);
    color: var(--accent-hover);
    transform: rotate(90deg) scale(1.1);
    outline: none;
  }
`;

const ModalHeader = styled.div`
  margin-bottom: var(--space-md);
  padding-right: 2.5rem;
`;

const ModalTitle = styled.h2`
  color: var(--accent);
  margin: 0;
  font-size: 1.45rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span.icon {
    color: var(--accent-light);
    font-size: 1.3em;
  }
`;

const ModalSubtitle = styled.p`
  color: var(--text-secondary);
  margin: 0.5rem 0 0;
  font-size: 1.05rem;
`;

const ModalContent = styled.div`
  color: var(--text-primary);
  font-size: 1.08rem;
  line-height: 1.7;
`;

const Modal = ({ 
  isOpen, 
  onClose, 
  title,
  subtitle,
  icon,
  children,
  initialFocus = null
}) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      const elementToFocus = initialFocus?.current || modalRef.current;
      elementToFocus?.focus();
      document.body.style.overflow = 'hidden';

      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose, initialFocus]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay 
      ref={overlayRef}
      onClick={handleOverlayClick}
      $isOpen={isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <ModalContainer 
        ref={modalRef}
        $isOpen={isOpen}
        tabIndex="-1"
      >
        <CloseButton 
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="fas fa-times" />
        </CloseButton>
        
        <ModalHeader>
          <ModalTitle id="modal-title">
            {icon && <span className="icon">{icon}</span>}
            {title}
          </ModalTitle>
          {subtitle && (
            <ModalSubtitle>{subtitle}</ModalSubtitle>
          )}
        </ModalHeader>

        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
