"use client";

import React, { useState, useEffect, useRef } from "react";
import { Bot, X, Sparkles, AlertCircle } from "lucide-react";

const MAX_MESSAGES = 30; // Limit the number of messages shown in the chat window

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Ask me anything about Aahad's projects or skills." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => {
      const next = [...prev, { sender: "user", text: userMessage }];
      return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
    });
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();
      const aiText = data.reply ?? "Sorry, I didn't understand that.";

      setMessages((prev) => {
        const next = [...prev, { sender: "ai", text: aiText }];
        return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
      });
    } catch (error) {
      setMessages((prev) => {
        const next = [...prev, { sender: "ai", text: "Error: Could not fetch AI response." }];
        return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
      });
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Keep-alive ping to backend every 5 minutes
  useEffect(() => {
    const pingBackend = () => {
      fetch("/api/ping").catch(() => {
        /* ignore errors */
      });
    };

    pingBackend(); // ping immediately on mount
    const interval = setInterval(pingBackend, 5 * 60 * 1000); // every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div
          className="w-80 max-w-full shadow-2xl rounded-2xl bg-background border border-muted p-4 flex flex-col relative animate-fade-in"
          style={{
            maxHeight: "64rem",
            minHeight: "28rem",
            transition: "max-height 0.2s",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex justify-between items-center mb-2 pr-8">
            <h3 className="text-lg font-bold text-primary">Ask the AI Assistant</h3>
          </div>
          <div
            className="flex-1 overflow-y-auto space-y-2 text-sm custom-scrollbar mb-2"
            style={{
              maxHeight: "36rem",
              minHeight: "12rem",
              paddingRight: "2px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-xs break-words ${
                  m.sender === "ai"
                    ? "bg-muted text-left"
                    : "bg-primary text-primary-foreground ml-auto text-right"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="px-3 py-2 rounded-lg max-w-xs bg-muted text-left italic text-sm">
                AI is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-3 flex gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-md border text-sm bg-background"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
              disabled={loading}
            >
              Send
            </button>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full py-2 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 transition font-medium"
            aria-label="Close chat"
          >
            Close Chat
          </button>
          <div className="mt-3 flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Powered by{" "}
              <a
                href="https://ai.google.dev/gemini-api/docs/models/gemini"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary ml-1"
              >
                Gemini Flash 1.5
              </a>
            </div>
            <div className="flex items-center justify-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3 text-yellow-500" />
              <span>This model can make mistakes. Reach out to Aahad directly for serious inquiries.</span>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition"
          aria-label="Open chat"
        >
          <Bot className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
