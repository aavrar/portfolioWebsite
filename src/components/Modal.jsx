import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled.div`
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--hover-shadow);
  border: 1px solid var(--card-border);
  transform: ${props => props.$isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--card-bg);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 4px;
    
    &:hover {
      background: var(--gray-400);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--button-hover-bg);
    color: var(--accent-color);
    transform: rotate(90deg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color);
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-right: 2.5rem;
`;

const ModalTitle = styled.h2`
  color: var(--primary-color);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span.icon {
    color: var(--accent-color);
  }
`;

const ModalSubtitle = styled.p`
  color: var(--text-secondary);
  margin: 0.5rem 0 0;
  font-size: 1rem;
`;

const ModalContent = styled.div`
  color: var(--text-color);
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
      // Store the currently focused element
      previousActiveElement.current = document.activeElement;
      
      // Focus the modal or the specified element
      const elementToFocus = initialFocus?.current || modalRef.current;
      elementToFocus?.focus();

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Add escape key listener
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        // Cleanup
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