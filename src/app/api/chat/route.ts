// app/api/chat/route.ts

import { NextResponse } from "next/server";
import { generatePortfolioContext } from "@/lib/prompt-generator";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Generate dynamic portfolio context
    const portfolioContext = generatePortfolioContext();

    // Gemini Flash does not support "system" role, so prepend context as the first user message
    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: portfolioContext }],
        },
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return NextResponse.json({ error: "Gemini API error", details: data }, { status: response.status });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ??
      "Sorry, I couldn't process your request.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 });
  }
}