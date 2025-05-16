import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Card = styled.div`
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--card-border);
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
    border-color: var(--accent-color);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent-color);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.$isExpanded ? '1.5rem' : '0'};
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: ${props => props.$isExpanded ? 'column' : 'row'};
    gap: ${props => props.$isExpanded ? '1rem' : '0.75rem'};
  }
`;

const TitleGroup = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--primary-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;

  span.icon {
    font-size: 1.5rem;
    color: var(--accent-color);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover span.icon {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    
    span.icon {
      font-size: 1.3rem;
    }
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.25rem 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const DateRange = styled.span`
  color: var(--text-tertiary);
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--date-badge-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`;

const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: contain;
  background: white;
  padding: 6px;
  border: 1px solid var(--card-border);
  flex-shrink: 0;
  margin-right: 8px;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    padding: 4px;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--secondary-color);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  margin-left: auto;

  &:hover {
    color: var(--accent-color);
    background: var(--button-hover-bg);
  }

  i {
    transition: transform 0.3s ease;
    transform: rotate(${props => props.$isExpanded ? '180deg' : '0deg'});
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
    font-size: 0.85rem;
  }
`;

const Content = styled.div`
  max-height: ${props => props.$isExpanded ? '1000px' : '0'};
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${props => props.$isExpanded ? '1rem' : '0'};
`;

const Description = styled.div`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;

  ul {
    margin: 0.5rem 0;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;

    ul {
      padding-left: 1rem;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--card-border);
`;

const Tag = styled.span`
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: var(--tag-hover-bg);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`;

const ModalDescription = styled.div`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;

  ul {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
    position: relative;
    
    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;

    ul {
      padding-left: 1rem;
    }
  }
`;

const ModalTagsContainer = styled(TagsContainer)`
  margin-top: 2rem;
  padding-top: 1.5rem;
`;

const ResumeCard = ({ 
  icon, 
  title, 
  subtitle, 
  shortDescription, 
  fullDescription,
  startDate,
  endDate,
  companyLogo,
  tags = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (date) => {
    if (!date) return 'Present';
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleReadMoreClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <CardHeader $isExpanded={isExpanded}>
          <TitleGroup>
            <Title>
              <span className="icon">{icon}</span>
              {title}
            </Title>
            <Subtitle>
              {companyLogo && <CompanyLogo src={companyLogo} alt={subtitle} />}
              {subtitle}
              <DateRange>
                {formatDate(startDate)} - {formatDate(endDate)}
              </DateRange>
            </Subtitle>
          </TitleGroup>
          <ExpandButton 
            $isExpanded={isExpanded}
            onClick={handleReadMoreClick}
            aria-label="View full details"
          >
            View Details
            <i className="fas fa-external-link-alt" />
          </ExpandButton>
        </CardHeader>
        <Content $isExpanded={isExpanded}>
          <Description>
            {shortDescription}
            {tags.length > 0 && (
              <TagsContainer>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsContainer>
            )}
          </Description>
        </Content>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        subtitle={subtitle}
        icon={icon}
      >
        <ModalDescription>
          {fullDescription}
          {tags.length > 0 && (
            <ModalTagsContainer>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </ModalTagsContainer>
          )}
        </ModalDescription>
      </Modal>
    </>
  );
};

export default ResumeCard;