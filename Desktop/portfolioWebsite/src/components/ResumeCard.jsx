import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Card = styled.div`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--card-border);
  padding: var(--space-xl) var(--space-lg);
  transition: box-shadow var(--transition), border var(--transition), transform var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;

  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 8px 32px rgba(44,62,80,0.10);
    border-color: var(--accent);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.$isExpanded ? '1.2rem' : '0'};
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const TitleGroup = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.18rem;
  color: var(--accent);
  margin: 0;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;

  span.icon {
    font-size: 1.4rem;
    color: var(--accent-light);
    flex-shrink: 0;
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.98rem;
  margin: 0.25rem 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  line-height: 1.5;
`;

const DateRange = styled.span`
  color: var(--text-tertiary);
  font-size: 0.85rem;
  font-weight: 600;
  background: var(--accent-light);
  padding: 0.22rem 0.8rem;
  border-radius: 12px;
  margin-left: 0.5rem;
  white-space: nowrap;
`;

const CompanyLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: contain;
  background: #fff;
  padding: 5px;
  border: 1px solid var(--card-border);
  flex-shrink: 0;
  margin-right: 8px;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  font-size: 0.98rem;
  font-weight: 600;
  border-radius: 8px;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background var(--transition), color var(--transition), transform var(--transition);

  &:hover, &:focus {
    background: var(--accent-light);
    color: var(--accent-hover);
    outline: none;
    transform: translateY(-2px) scale(1.04);
  }

  i {
    transition: transform 0.3s;
    transform: rotate(${props => props.$isExpanded ? '180deg' : '0deg'});
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
  color: var(--text-primary);
  font-size: 1.02rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;

  ul {
    margin: 0.5rem 0;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    &::before {
      content: '•';
      color: var(--accent);
      position: absolute;
      left: -1rem;
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
  background: var(--accent-light);
  color: var(--accent-hover);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background var(--transition), color var(--transition), transform var(--transition);

  &:hover {
    background: var(--accent-hover);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ModalDescription = styled.div`
  color: var(--text-primary);
  font-size: 1.05rem;
  line-height: 1.7;

  ul {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
    position: relative;
    &::before {
      content: '•';
      color: var(--accent);
      position: absolute;
      left: -1rem;
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
      <Card onClick={handleCardClick} className="fade-in-up">
        <CardHeader $isExpanded={isExpanded}>
          <TitleGroup>
            <Title>
              {icon && <span className="icon">{icon}</span>}
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
            tabIndex={0}
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
