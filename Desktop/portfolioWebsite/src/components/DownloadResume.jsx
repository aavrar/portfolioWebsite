// components/DownloadResume.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const DownloadContainer = styled.div`
  text-align: center;
  margin: var(--space-2xl) auto 0 auto;
  padding: var(--space-xl) var(--space-lg);
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--card-border);
  box-shadow: var(--card-shadow);
  max-width: 480px;
  animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;
`;

const Title = styled.h3`
  color: var(--accent);
  margin-bottom: var(--space-md);
  font-size: 1.45rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span.icon {
    font-size: 1.6rem;
    color: var(--accent-light);
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  font-size: 1.08rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 2.2rem;
  border-radius: var(--radius-full);
  font-size: 1.08rem;
  font-weight: 700;
  text-decoration: none;
  border: none;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  transition: 
    background var(--transition), 
    color var(--transition), 
    box-shadow var(--transition), 
    transform var(--transition);

  &:hover, &:focus {
    background: var(--accent-hover);
    color: #fff;
    box-shadow: 0 8px 24px rgba(44,62,80,0.12);
    transform: translateY(-2px) scale(1.04);
    outline: none;
  }

  i {
    font-size: 1.2rem;
    transition: transform 0.3s;
  }

  &:hover i {
    transform: translateY(2px) scale(1.1);
  }
`;

const FileInfo = styled.div`
  margin-top: var(--space-md);
  color: var(--text-tertiary);
  font-size: 0.98rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  i {
    color: var(--accent-light);
    font-size: 1.1rem;
  }
`;

const DownloadResume = ({ 
  pdfUrl = 'assets/resume.pdf', 
  fileSize = '45 KB', 
  lastUpdated = 'June 2025' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DownloadContainer className="fade-in-up">
      <Title>
        Download Complete Resume
      </Title>
      <Description>
        Get a detailed overview of my experience, skills, and achievements.
      </Description>
      <DownloadButton
        href={pdfUrl}
        download="Aahad_Vakani_Resume.pdf"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="animated-button"
      >
        <i className={`fas ${isHovered ? 'fa-file-download' : 'fa-file-pdf'}`} />
        Download PDF
      </DownloadButton>
      <FileInfo>
        <i className="fas fa-info-circle" />
        {fileSize} • Last updated: {lastUpdated}
      </FileInfo>
    </DownloadContainer>
  );
};

export default DownloadResume;
