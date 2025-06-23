// components/PortfolioChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

const ChatSection = styled(motion.section)`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, var(--background) 0%, var(--background-alt) 100%);
  padding: var(--space-2xl) 0 var(--space-3xl) 0;
`;

const ChatContainer = styled(motion.div)`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--card-shadow);
  border: 1.5px solid var(--card-border);
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  position: relative;
`;

const ChatLog = styled.div`
  min-height: 180px;
  max-height: 320px;
  overflow-y: auto;
  margin-bottom: var(--space-md);
  font-size: 1.05rem;
  background: var(--background-alt);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: 0 2px 8px rgba(44,62,80,0.06);
`;

const UserMsg = styled.div`
  text-align: right;
  color: var(--accent);
  margin-bottom: 0.5em;
  font-weight: 600;
  word-break: break-word;
`;

const BotMsg = styled.div`
  text-align: left;
  color: var(--text-primary);
  background: var(--background-elevated);
  border-radius: var(--radius-md);
  padding: 0.5em 1em;
  margin-bottom: 0.5em;
  display: inline-block;
  box-shadow: 0 1px 4px rgba(44,62,80,0.04);
  word-break: break-word;
`;

const InputRow = styled.form`
  display: flex;
  gap: var(--space-sm);
`;

const Input = styled.input`
  flex: 1;
  padding: 0.7em 1em;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--card-border);
  font-size: 1rem;
  background: var(--background-alt);
  color: var(--text-primary);
  transition: border-color var(--transition);

  &:focus {
    border-color: var(--accent);
    outline: none;
  }
`;

const SendButton = styled(AnimatedButton).attrs({ as: 'button', type: 'submit' })`
  padding: 0.7em 1.5em;
  font-size: 1rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  min-width: 90px;
`;

const ChatTitle = styled.h3`
  color: var(--accent);
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: var(--space-md);
  letter-spacing: -0.01em;
  text-align: center;
`;

const ChatSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-md);
  text-align: center;
`;

const portfolioAnswers = [
  {
    keywords: ['project', 'projects', 'engine', 'adventure', 'story'],
    answer: "You can view my featured projects below, including my Procedural Story Adventure Engine (a full-stack, AI-powered text adventure), and other work in AI, writing, and software."
  },
  {
    keywords: ['writing', 'essay', 'research', 'article', 'poetry', 'fiction'],
    answer: "Check out my Research & Writing section for essays, creative work, and research at the intersection of technology and language."
  },
  {
    keywords: ['experience', 'intern', 'work', 'job', 'resume', 'cv'],
    answer: "You can find my work experience, resume, and leadership roles in the Resume section. I've interned in IT, mentored students, and led community-building initiatives."
  },
  {
    keywords: ['contact', 'email', 'linkedin', 'connect', 'reach'],
    answer: "You can email me at aahadvakani@gmail.com, connect on LinkedIn, or use the Contact section below."
  },
  {
    keywords: ['ai', 'machine learning', 'ml', 'data', 'analysis'],
    answer: "I'm passionate about AI and machine learning. My projects include ML models for text/image data, code-switching research, and generative writing tools."
  },
  {
    keywords: ['about', 'who are you', 'bio', 'background'],
    answer: "I'm Aahad Vakani, a Computer Science and English Writing student who loves building things at the intersection of code and story. I believe the best technology tells a story."
  }
];

const fallbackBotMsg = "I'm not sure about that, but you can ask me about my projects, writing, or experience!";

const PortfolioChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your portfolio guide. Ask me about my projects, writing, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input.trim() };
    setMessages(msgs => [...msgs, userMsg]);
    setLoading(true);

    // Simple keyword match
    const lower = input.trim().toLowerCase();
    const matched = portfolioAnswers.find(entry =>
      entry.keywords.some(keyword => lower.includes(keyword))
    );
    if (matched) {
      setMessages(msgs => [...msgs, { sender: 'bot', text: matched.answer }]);
      setInput('');
      setLoading(false);
      return;
    }

    // No AI fallback, just a default message
    setMessages(msgs => [...msgs, { sender: 'bot', text: fallbackBotMsg }]);
    setInput('');
    setLoading(false);
  };

  return (
    <ChatSection
      id="chatbot"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <ChatContainer>
        <ChatTitle>Portfolio Chatbot</ChatTitle>
        <ChatSubtitle>
          Ask me about my projects, writing, or experience.
        </ChatSubtitle>
        <ChatLog ref={chatLogRef}>
          {messages.map((msg, idx) =>
            msg.sender === 'user' ? (
              <UserMsg key={idx}>{msg.text}</UserMsg>
            ) : (
              <BotMsg key={idx}>{msg.text}</BotMsg>
            )
          )}
        </ChatLog>
        <InputRow onSubmit={sendMessage}>
          <Input
            type="text"
            placeholder="Ask me about my work..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            aria-label="Ask the portfolio chatbot"
            autoComplete="off"
          />
          <SendButton disabled={loading || !input.trim()}>
            {loading ? "..." : "Send"}
          </SendButton>
        </InputRow>
      </ChatContainer>
    </ChatSection>
  );
};

export default PortfolioChatbot;
