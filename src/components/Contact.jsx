import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';

const ContactSection = styled.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);

  h2 {
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-secondary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const ContactCard = styled(AnimatedCard)`
  padding: 0;
  overflow: visible;
`;

const ContactMethod = styled(AnimatedButton)`
  width: 100%;
  justify-content: flex-start;
  padding: var(--space-md);
  font-size: 0.9rem;
  background: var(--card-bg);
  
  div {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--text-primary);
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  span {
    font-size: 1.25rem;
  }
`;

const ContactForm = styled(AnimatedCard)`
  padding: var(--space-xl);
`;

const FormGroup = styled.div`
  margin-bottom: var(--space-lg);

  label {
    display: block;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
    font-size: 0.875rem;
  }

  input,
  textarea {
    width: 100%;
    padding: var(--space-md);
    background-color: var(--background);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-size: 1rem;
    transition: all var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 2px var(--accent-primary-hover);
    }

    &::placeholder {
      color: var(--text-tertiary);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(AnimatedButton)`
  width: auto;
  padding: var(--space-sm) var(--space-xl);
  font-size: 0.9rem;
  background: var(--card-bg);
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <h2>Get in Touch</h2>
          <p>
            Have a question or want to collaborate? Feel free to reach out through
            any of the following channels or send me a message directly.
          </p>
        </SectionHeader>
        <ContactGrid>
          <ContactInfo>
            <ContactCard>
              <ContactMethod href="mailto:aahavakani@gmail.com">
                <span>📧</span>
                <div>
                  <h3>Email</h3>
                  <p>aahadvakani@gmail.com</p>
                </div>
              </ContactMethod>
            </ContactCard>
            <ContactCard>
              <ContactMethod href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/" target="_blank">
                <span>💼</span>
                <div>
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </div>
              </ContactMethod>
            </ContactCard>
            <ContactCard>
              <ContactMethod href="https://github.com/aavrar" target="_blank">
                <span>💻</span>
                <div>
                  <h3>GitHub</h3>
                  <p>Check out my code</p>
                </div>
              </ContactMethod>
            </ContactCard>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              />
            </FormGroup>
            <SubmitButton as="button" type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 