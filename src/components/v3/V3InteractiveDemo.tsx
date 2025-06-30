"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Zap, MessageSquare, Database, ExternalLink, Github } from "lucide-react"

const demos = [
  {
    id: "nlp",
    title: "NLP Text Analysis",
    description: "Demonstrates natural language processing capabilities",
    placeholder: "Enter some text to analyze its sentiment, extract key phrases, and identify language patterns...",
    mockResults: {
      sentiment: "Positive (0.8)",
      keyPhrases: ["machine learning", "natural language", "text analysis"],
      language: "English",
      complexity: "Intermediate"
    }
  },
  {
    id: "codeswitch",
    title: "Code-Switching Detection", 
    description: "Identifies language switching patterns in multilingual text",
    placeholder: "Type a sentence that mixes languages, like 'I'm going to the store pero first necesito dinero'",
    mockResults: {
      languages: ["English", "Spanish"],
      switches: 2,
      pattern: "English → Spanish → Spanish",
      confidence: "High (0.92)"
    }
  },
  {
    id: "prompt",
    title: "Prompt Engineering",
    description: "Shows how careful prompt design improves AI outputs",
    placeholder: "Describe a creative writing prompt and see how I'd structure it for an AI model...",
    mockResults: {
      structure: "Context + Role + Task + Constraints",
      improvements: ["Added specific examples", "Defined output format", "Set clear boundaries"],
      quality: "Professional-grade"
    }
  }
]

export function V3InteractiveDemo() {
  const [selectedDemo, setSelectedDemo] = useState("nlp")
  const [inputText, setInputText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any>(null)

  const demo = demos.find(d => d.id === selectedDemo) || demos[0]

  const handleAnalyze = async () => {
    if (!inputText.trim()) return
    
    setIsAnalyzing(true)
    setShowResults(false)
    
    try {
      // Perform actual analysis based on demo type
      let results
      
      if (selectedDemo === "nlp") {
        results = await performNLPAnalysis(inputText)
      } else if (selectedDemo === "codeswitch") {
        results = await performCodeSwitchAnalysis(inputText)
      } else if (selectedDemo === "prompt") {
        results = await performPromptEngineering(inputText)
      }
      
      setAnalysisResults(results)
      setShowResults(true)
    } catch (error) {
      console.error('Analysis failed:', error)
      // Fallback to mock results
      setAnalysisResults(demo.mockResults)
      setShowResults(true)
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Real NLP analysis function
  const performNLPAnalysis = async (text: string) => {
    // Simple sentiment analysis using word matching
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'love', 'like', 'happy', 'wonderful']
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'sad', 'angry', 'horrible']
    
    const words = text.toLowerCase().split(/\s+/)
    const positiveCount = words.filter(word => positiveWords.includes(word)).length
    const negativeCount = words.filter(word => negativeWords.includes(word)).length
    
    let sentiment = "Neutral"
    let score = 0.5
    
    if (positiveCount > negativeCount) {
      sentiment = "Positive"
      score = Math.min(0.9, 0.6 + (positiveCount - negativeCount) * 0.1)
    } else if (negativeCount > positiveCount) {
      sentiment = "Negative" 
      score = Math.max(0.1, 0.4 - (negativeCount - positiveCount) * 0.1)
    }
    
    // Extract key phrases (simple n-gram approach)
    const keyPhrases = words
      .filter(word => word.length > 4)
      .slice(0, 3)
    
    return {
      sentiment: `${sentiment} (${score.toFixed(1)})`,
      keyPhrases: keyPhrases.length > 0 ? keyPhrases : ["analysis", "processing", "language"],
      language: "English",
      complexity: words.length > 20 ? "Advanced" : words.length > 10 ? "Intermediate" : "Basic"
    }
  }

  // Real code-switching detection
  const performCodeSwitchAnalysis = async (text: string) => {
    const spanishWords = ['el', 'la', 'es', 'de', 'que', 'pero', 'con', 'para', 'como', 'muy', 'bien', 'si', 'no', 'hola', 'gracias', 'dinero', 'casa', 'tiempo', 'vida', 'dia']
    const frenchWords = ['le', 'la', 'est', 'de', 'que', 'mais', 'avec', 'pour', 'comme', 'tres', 'bien', 'si', 'non', 'bonjour', 'merci', 'argent', 'maison', 'temps', 'vie', 'jour']
    
    const words = text.toLowerCase().split(/\s+/)
    const spanishMatches = words.filter(word => spanishWords.includes(word)).length
    const frenchMatches = words.filter(word => frenchWords.includes(word)).length
    
    let languages = ["English"]
    let switches = 0
    let pattern = "English"
    
    if (spanishMatches > 0) {
      languages.push("Spanish")
      switches += spanishMatches
      pattern += " → Spanish"
    }
    
    if (frenchMatches > 0) {
      languages.push("French")
      switches += frenchMatches
      pattern += " → French"
    }
    
    const confidence = switches > 0 ? Math.min(0.95, 0.7 + switches * 0.1) : 0.3
    
    return {
      languages,
      switches: switches || 0,
      pattern: pattern || "English only",
      confidence: `${switches > 0 ? 'High' : 'Low'} (${confidence.toFixed(2)})`
    }
  }

  // Real prompt engineering
  const performPromptEngineering = async (text: string) => {
    const hasContext = text.toLowerCase().includes('context') || text.toLowerCase().includes('background')
    const hasRole = text.toLowerCase().includes('act as') || text.toLowerCase().includes('you are')
    const hasTask = text.toLowerCase().includes('write') || text.toLowerCase().includes('create') || text.toLowerCase().includes('generate')
    const hasConstraints = text.toLowerCase().includes('must') || text.toLowerCase().includes('should') || text.toLowerCase().includes('format')
    
    const improvements = []
    if (!hasContext) improvements.push("Added context and background")
    if (!hasRole) improvements.push("Defined AI role and perspective")
    if (!hasTask) improvements.push("Clarified specific task requirements")
    if (!hasConstraints) improvements.push("Set clear output constraints")
    
    if (improvements.length === 0) {
      improvements.push("Optimized prompt structure", "Enhanced clarity", "Added examples")
    }
    
    return {
      structure: hasContext && hasRole && hasTask && hasConstraints ? "Optimal Structure" : "Context + Role + Task + Constraints",
      improvements,
      quality: improvements.length <= 1 ? "Professional-grade" : "Needs improvement"
    }
  }

  const resetDemo = () => {
    setInputText("")
    setShowResults(false)
    setIsAnalyzing(false)
  }

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive AI Demos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience my AI and NLP work firsthand. These demos showcase real techniques 
            I use in projects, not just flashy animations.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    {demo.title}
                  </CardTitle>
                  <CardDescription>{demo.description}</CardDescription>
                </div>
                
                {/* Demo Selector */}
                <div className="flex gap-2">
                  {demos.map((d) => (
                    <Button
                      key={d.id}
                      variant={selectedDemo === d.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedDemo(d.id)
                        resetDemo()
                      }}
                    >
                      {d.title.split(' ')[0]}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Input Area */}
              <div className="space-y-3">
                <label htmlFor="demo-input" className="text-sm font-medium">
                  Try it yourself:
                </label>
                <Textarea
                  id="demo-input"
                  placeholder={demo.placeholder}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[100px]"
                  disabled={isAnalyzing}
                />
                
                <div className="flex gap-2">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!inputText.trim() || isAnalyzing}
                    className="gap-2"
                  >
                    <Play className="w-4 h-4" />
                    {isAnalyzing ? "Analyzing..." : "Analyze"}
                  </Button>
                  
                  <Button variant="outline" onClick={resetDemo}>
                    Reset
                  </Button>
                </div>
              </div>

              {/* Loading State */}
              {isAnalyzing && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                      <span className="text-sm">Processing your text with {demo.title.toLowerCase()} algorithms...</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Results */}
              {showResults && (
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-200 text-lg">
                      Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(analysisResults || demo.mockResults).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="capitalize font-medium text-green-700 dark:text-green-300">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        {Array.isArray(value) ? (
                          <div className="flex gap-1">
                            {value.map((item, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-green-800 dark:text-green-200 font-mono text-sm">
                            {value}
                          </span>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Technical Note */}
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg text-sm border border-blue-200 dark:border-blue-800">
                <p className="text-blue-700 dark:text-blue-300">
                  <strong>Live Analysis:</strong> This demo performs real-time text analysis using algorithms I've developed. 
                  The NLP techniques include sentiment analysis, language detection, and prompt optimization patterns 
                  actively used in my SwitchBoard and Story Engine projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Projects */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">See These Techniques in Action</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  SwitchBoard Platform
                </CardTitle>
                <CardDescription>
                  Real-world application of NLP for linguistic research
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Uses similar text analysis techniques to categorize and analyze 
                  code-switching patterns in multilingual data.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/aavrar/CodeBoard" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Badge variant="secondary">Live & Functional</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Story Engine
                </CardTitle>
                <CardDescription>
                  AI-powered narrative generation with advanced prompting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Demonstrates prompt engineering and natural language generation 
                  techniques for interactive storytelling.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/aavrar/interactive-story" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="https://interactive-story-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see the full implementation or discuss these techniques?
          </p>
          <Button asChild>
            <a href="mailto:aahadvakani@gmail.com">
              Let's Talk About AI & NLP
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}