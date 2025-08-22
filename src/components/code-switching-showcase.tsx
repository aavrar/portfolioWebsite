"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Languages, Brain, BarChart3 } from "lucide-react"

const codeSwitchingExamples = [
  {
    text: "Hello yaar, how are you आज?",
    analysis: {
      switches: [
        { word: "Hello", language: "English", start: 0, end: 5, confidence: 0.94 },
        { word: "yaar,", language: "Hindi", start: 6, end: 11, confidence: 0.89 },
        { word: "how are you", language: "English", start: 12, end: 23, confidence: 0.96 },
        { word: "आज?", language: "Hindi", start: 24, end: 27, confidence: 0.92 }
      ],
      totalSwitches: 2,
      languages: ["English", "Hindi"],
      dominantLanguage: "English",
      complexity: "Medium"
    }
  },
  {
    text: "Je suis tired aujourd'hui, need some rest",
    analysis: {
      switches: [
        { word: "Je suis", language: "French", start: 0, end: 7, confidence: 0.97 },
        { word: "tired", language: "English", start: 8, end: 13, confidence: 0.91 },
        { word: "aujourd'hui,", language: "French", start: 14, end: 26, confidence: 0.95 },
        { word: "need some rest", language: "English", start: 27, end: 41, confidence: 0.93 }
      ],
      totalSwitches: 3,
      languages: ["French", "English"],
      dominantLanguage: "Mixed",
      complexity: "High"
    }
  },
  {
    text: "Vamos a la store para comprar groceries",
    analysis: {
      switches: [
        { word: "Vamos a la", language: "Spanish", start: 0, end: 10, confidence: 0.96 },
        { word: "store", language: "English", start: 11, end: 16, confidence: 0.88 },
        { word: "para comprar", language: "Spanish", start: 17, end: 29, confidence: 0.94 },
        { word: "groceries", language: "English", start: 30, end: 39, confidence: 0.90 }
      ],
      totalSwitches: 3,
      languages: ["Spanish", "English"],
      dominantLanguage: "Spanish",
      complexity: "High"
    }
  },
  {
    text: "مرحبا! How's your day going heute?",
    analysis: {
      switches: [
        { word: "مرحبا!", language: "Arabic", start: 0, end: 6, confidence: 0.98 },
        { word: "How's your day going", language: "English", start: 7, end: 27, confidence: 0.95 },
        { word: "heute?", language: "German", start: 28, end: 34, confidence: 0.87 }
      ],
      totalSwitches: 3,
      languages: ["Arabic", "English", "German"],
      dominantLanguage: "English",
      complexity: "Very High"
    }
  }
]

const languageColors: { [key: string]: string } = {
  "English": "text-blue-400",
  "Hindi": "text-orange-400", 
  "French": "text-purple-400",
  "Spanish": "text-green-400",
  "Arabic": "text-red-400",
  "German": "text-yellow-400"
}

export function CodeSwitchingShowcase() {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)

  const currentExample = codeSwitchingExamples[currentExampleIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnalyzing(true)
      setShowAnalysis(false)
      
      setTimeout(() => {
        setCurrentExampleIndex((prev) => (prev + 1) % codeSwitchingExamples.length)
        setIsAnalyzing(false)
        
        setTimeout(() => {
          setShowAnalysis(true)
        }, 500)
      }, 1000)
    }, 6000)

    // Initial analysis display
    setTimeout(() => setShowAnalysis(true), 1000)

    return () => clearInterval(interval)
  }, [])

  const renderHighlightedText = () => {
    const { text, analysis } = currentExample
    let highlightedText = []
    let currentIndex = 0

    analysis.switches.forEach((switch_, index) => {
      // Add any text before this switch
      if (switch_.start > currentIndex) {
        const beforeText = text.slice(currentIndex, switch_.start)
        highlightedText.push(
          <span key={`before-${index}`} className="text-slate-300">
            {beforeText === ' ' ? '\u00A0' : beforeText}
          </span>
        )
      }

      // Add the highlighted switch
      highlightedText.push(
        <span 
          key={`switch-${index}`} 
          className={`${languageColors[switch_.language]} font-semibold relative group`}
        >
          {text.slice(switch_.start, switch_.end)}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-600">
            {switch_.language} ({Math.round(switch_.confidence * 100)}%)
          </div>
        </span>
      )

      currentIndex = switch_.end
    })

    // Add any remaining text
    if (currentIndex < text.length) {
      highlightedText.push(
        <span key="after" className="text-slate-300">
          {text.slice(currentIndex)}
        </span>
      )
    }

    return highlightedText
  }

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case "Low": return "text-green-400"
      case "Medium": return "text-yellow-400" 
      case "High": return "text-orange-400"
      case "Very High": return "text-red-400"
      default: return "text-gray-400"
    }
  }

  return (
    <Card className="bg-slate-900 text-slate-100 font-mono text-sm overflow-hidden shadow-2xl border-slate-700 w-full max-w-4xl">
      {/* Header Bar */}
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
        </div>
        <div className="text-slate-400 text-xs ml-4 flex items-center gap-2">
          <Languages className="h-3 w-3" />
          SwitchPrint Analyzer — Live Demo
        </div>
      </div>

      <div className="p-6 h-80 overflow-hidden">
        <div className="space-y-4">
          {/* Input Section */}
          <div className="border border-slate-700 rounded bg-slate-800 p-3">
            <div className="text-slate-500 text-xs mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Input Text
            </div>
            <div className="text-base leading-relaxed min-h-[2.5rem] flex items-center">
              {isAnalyzing ? (
                <span className="text-slate-400 animate-pulse">Analyzing linguistic patterns...</span>
              ) : (
                <div className="whitespace-pre-wrap">
                  {renderHighlightedText()}
                </div>
              )}
            </div>
          </div>

          {/* Analysis Results */}
          {showAnalysis && !isAnalyzing && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
              {/* Language Detection */}
              <div className="flex items-center gap-2 text-xs">
                <Brain className="h-3 w-3 text-blue-400" />
                <span className="text-slate-400">Detected Languages:</span>
                <div className="flex gap-2">
                  {currentExample.analysis.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className={`text-xs ${languageColors[lang]} bg-slate-800 border-slate-600`}>
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-3 w-3 text-emerald-400" />
                  <span className="text-slate-400">Switches:</span>
                  <span className="text-emerald-400 font-semibold">{currentExample.analysis.totalSwitches}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Dominant:</span>
                  <span className="text-blue-400">{currentExample.analysis.dominantLanguage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Complexity:</span>
                  <span className={getComplexityColor(currentExample.analysis.complexity)}>
                    {currentExample.analysis.complexity}
                  </span>
                </div>
              </div>

              {/* Confidence Meters */}
              <div className="space-y-2">
                <div className="text-slate-400 text-xs">Detection Confidence:</div>
                <div className="space-y-1">
                  {currentExample.analysis.switches.map((switch_, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <span className={`w-16 ${languageColors[switch_.language]}`}>
                        {switch_.language}:
                      </span>
                      <div className="flex-1 bg-slate-800 rounded h-2 overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${languageColors[switch_.language].replace('text-', 'bg-')}`}
                          style={{ width: `${switch_.confidence * 100}%` }}
                        />
                      </div>
                      <span className="text-slate-400 w-10">
                        {Math.round(switch_.confidence * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Status */}
      <div className="bg-slate-800 px-4 py-2 border-t border-slate-700">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>Demo Analysis</span>
            <span>Multilingual NLP</span>
            <span>12+ Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: codeSwitchingExamples.length }, (_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentExampleIndex ? 'bg-emerald-400 w-4' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse ml-2"></div>
            <span>Active</span>
          </div>
        </div>
      </div>
    </Card>
  )
}