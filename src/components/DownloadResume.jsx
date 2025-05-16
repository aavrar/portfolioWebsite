import React, { useState } from 'react';
import styled from 'styled-components';

const DownloadContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--card-border);
  box-shadow: var(--hover-shadow);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span.icon {
    color: var(--accent-color);
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--hover-shadow);
    background: transparent;
    color: var(--primary-color);
  }

  i {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateY(2px);
  }
`;

const FileInfo = styled.div`
  margin-top: 1.5rem;
  color: var(--text-tertiary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const DownloadResume = ({ 
  pdfUrl = 'assets/resume.pdf', 
  fileSize = '245 KB', 
  lastUpdated = 'May 2025' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DownloadContainer>
      <Title>
        <span className="icon">📄</span>
        Download Complete Resume
      </Title>
      <Description>
        Get a detailed overview of my experience, skills, and achievements
      </Description>
      <DownloadButton
        href={pdfUrl}
        download="Aahad_Vakani_Resume.pdf"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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