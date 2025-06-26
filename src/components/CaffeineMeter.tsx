
"use client"

import React, { useEffect, useState, useRef } from "react";

const GLITCH_CHARS = [
  "⍑", "ᓵ", "↸", "╎", "⋮", "⎓", "ꖌ", "⌖", "⨸", "⚞", "⨠", "⎈", "⏣", "⧇"
];

function getRandomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

export function CaffeineMeter() {
  const [displayValue, setDisplayValue] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let current = 0;

    intervalRef.current = setInterval(() => {
      current += Math.floor(Math.random() * 150) + 30; // slower increments
      if (current >= 9999) {
        current = 9999;
        setDisplayValue(current);
        setIsGlitching(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setDisplayValue(current);
      }
    }, 40); 

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Glitch only on the '9999mg+' part, keep " of caffeine..." stable
  const [glitchText, setGlitchText] = useState("9999mg+");
  useEffect(() => {
    if (!isGlitching) return;
  
    const glitchInterval = setInterval(() => {
      const baseNumberText = "9999";
      let glitchedNumberText = "";
  
      for (let i = 0; i < baseNumberText.length; i++) {
        if (Math.random() < 0.6 && baseNumberText[i] !== " ") {
          glitchedNumberText += getRandomChar();
        } else {
          glitchedNumberText += baseNumberText[i];
        }
      }
  
      setGlitchText(glitchedNumberText);
    }, 150);
  
    return () => clearInterval(glitchInterval);
  }, [isGlitching]);
  return (
    <div
      className="font-unifont text-primary font-bold text-xl select-none leading-tight text-center"
      style={{ textShadow: "-1px 0 #ff00ff, 1px 0 #00ffff" }}
    >
      <div className="inline-block whitespace-nowrap">
        <span>{isGlitching ? glitchText : `${displayValue}`}</span>
        <span>mg+</span>
      </div>
      <div className="text-base font-normal font-sans text-muted-foreground">
        of caffeine consumed this year
      </div>
    </div>
  );
}

