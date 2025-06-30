"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Globe, Cpu, ArrowRight, GitBranch, Zap, Clock, AlertTriangle } from "lucide-react"
import { V3EnhancedArchitecture } from "./V3EnhancedArchitecture"

interface ArchitectureNode {
  id: string
  label: string
  type: "frontend" | "backend" | "database" | "external" | "api"
  description: string
  tech: string
  performance?: string
  challenges?: string[]
}

interface ArchitectureFlow {
  from: string
  to: string
  label: string
  latency?: string
  volume?: string
}

const architectures = {
  switchboard: {
    title: "SwitchBoard Research Platform",
    description: "Real-time multilingual data collection with instant search and filtering",
    nodes: [
      {
        id: "user",
        label: "Research Interface",
        type: "frontend" as const,
        description: "Next.js frontend with real-time form validation and instant search",
        tech: "React + TypeScript",
        performance: "~200ms initial load",
        challenges: ["Multilingual input validation", "Real-time search UX", "Mobile form optimization"]
      },
      {
        id: "api",
        label: "API Layer",
        type: "backend" as const,
        description: "RESTful API with automatic data validation and search optimization",  
        tech: "Next.js API Routes",
        performance: "~50ms response time",
        challenges: ["Search query optimization", "Rate limiting", "Data validation"]
      },
      {
        id: "supabase",
        label: "Supabase",
        type: "api" as const,
        description: "Managed PostgreSQL with real-time subscriptions and row-level security",
        tech: "Supabase + PostgreSQL",
        performance: "~100ms query time",
        challenges: ["Query optimization", "RLS policies", "Real-time scaling"]
      },
      {
        id: "postgres",
        label: "PostgreSQL",
        type: "database" as const,
        description: "Optimized schema for multilingual text search with GIN indexes",
        tech: "PostgreSQL 15",
        performance: "Full-text search <200ms",
        challenges: ["Multilingual indexing", "Search relevance", "Schema migrations"]
      }
    ],
    flows: [
      { from: "user", to: "api", label: "Form Submit", latency: "~50ms", volume: "200+ submissions" },
      { from: "api", to: "supabase", label: "Data Validation", latency: "~30ms", volume: "Low latency" },
      { from: "supabase", to: "postgres", label: "SQL Queries", latency: "~100ms", volume: "Complex searches" },
      { from: "postgres", to: "supabase", label: "Search Results", latency: "~200ms", volume: "Filtered data" },
      { from: "supabase", to: "user", label: "Real-time Updates", latency: "~50ms", volume: "Live data" }
    ],
    decisions: [
      {
        title: "Supabase over Raw PostgreSQL",
        reasoning: "Needed real-time subscriptions and didn't want to manage WebSocket infrastructure",
        tradeoff: "Less control over DB optimizations, but 10x faster development",
        impact: "Reduced development time from 3 weeks to 1 week"
      },
      {
        title: "GIN Indexes for Multilingual Search",
        reasoning: "Standard B-tree indexes failed for multilingual full-text search",
        tradeoff: "Larger index size but 5x faster search performance",
        impact: "Search queries went from 1s+ to ~200ms"
      }
    ]
  },
  
  storyengine: {
    title: "Interactive Story Generator",
    description: "AI-powered narrative engine with persistent character memory and branching logic",
    nodes: [
      {
        id: "player",
        label: "Story Interface",
        type: "frontend" as const,
        description: "React SPA with choice persistence and narrative state management",
        tech: "React + Context API",
        performance: "Instant choice selection",
        challenges: ["State persistence", "Narrative flow UX", "Choice visualization"]
      },
      {
        id: "fastapi",
        label: "FastAPI Backend",
        type: "backend" as const,
        description: "Async Python API with prompt optimization and session management",
        tech: "FastAPI + Python 3.11",
        performance: "~2s story generation",
        challenges: ["Async prompt processing", "Session management", "Error handling"]
      },
      {
        id: "openai",
        label: "OpenAI API",
        type: "external" as const,
        description: "GPT-4 with fine-tuned prompts for narrative coherence",
        tech: "OpenAI GPT-4",
        performance: "~1.5s generation time",
        challenges: ["API cost management", "Prompt engineering", "Rate limiting"]
      },
      {
        id: "sqlite",
        label: "SQLite",
        type: "database" as const,
        description: "Lightweight session storage with character memory and choice history",
        tech: "SQLite 3",
        performance: "<10ms queries",
        challenges: ["Session cleanup", "Memory optimization", "Concurrent access"]
      }
    ],
    flows: [
      { from: "player", to: "fastapi", label: "Choice Selection", latency: "~10ms", volume: "50+ sessions" },
      { from: "fastapi", to: "sqlite", label: "Save Context", latency: "<10ms", volume: "Every choice" },
      { from: "fastapi", to: "openai", label: "Generate Story", latency: "~1.5s", volume: "Cost-optimized" },
      { from: "openai", to: "fastapi", label: "New Narrative", latency: "~1.5s", volume: "Rich content" },
      { from: "fastapi", to: "player", label: "Story + Choices", latency: "~2s total", volume: "Streaming response" }
    ],
    decisions: [
      {
        title: "FastAPI over Django",
        reasoning: "Needed async processing for OpenAI API calls without blocking",
        tradeoff: "Less built-in features but better performance for API-heavy workloads",
        impact: "Reduced response time from 4s to 2s with concurrent API calls"
      },
      {
        title: "Prompt Caching Strategy",
        reasoning: "OpenAI costs were $0.50 per story session - unsustainable",
        tradeoff: "More complex prompt logic but 60% cost reduction",
        impact: "Cost per session dropped from $0.50 to $0.20"
      }
    ]
  },

  wrestlestats: {
    title: "WrestleStats Database",
    description: "High-volume web scraping pipeline with data normalization and search optimization",
    nodes: [
      {
        id: "scraper",
        label: "Web Scraper",
        type: "backend" as const,
        description: "Node.js scraper with rate limiting and error recovery",
        tech: "Node.js + Cheerio",
        performance: "~50 wrestlers/hour",
        challenges: ["Rate limiting", "Site structure changes", "Data consistency"]
      },
      {
        id: "normalizer",
        label: "Data Pipeline",
        type: "backend" as const,
        description: "ETL pipeline for cleaning and normalizing wrestling data",
        tech: "Node.js + Custom Logic",
        performance: "~1000 matches/minute",
        challenges: ["Name normalization", "Duplicate detection", "Data validation"]
      },
      {
        id: "express",
        label: "Express API",
        type: "backend" as const,
        description: "RESTful API with advanced search and filtering capabilities",
        tech: "Express.js",
        performance: "~100ms search queries",
        challenges: ["Complex filtering", "Pagination", "Response optimization"]
      },
      {
        id: "frontend",
        label: "Search Interface",
        type: "frontend" as const,
        description: "React interface with advanced filtering and data visualization",
        tech: "React + Chart.js",
        performance: "Instant filtering",
        challenges: ["Complex UI state", "Chart rendering", "Mobile optimization"]
      }
    ],
    flows: [
      { from: "scraper", to: "normalizer", label: "Raw Data", latency: "~1s", volume: "500+ wrestlers" },
      { from: "normalizer", to: "express", label: "Clean Data", latency: "~100ms", volume: "1000+ matches" },
      { from: "frontend", to: "express", label: "Search Query", latency: "~50ms", volume: "Complex filters" },
      { from: "express", to: "frontend", label: "Search Results", latency: "~100ms", volume: "Paginated data" }
    ],
    decisions: [
      {
        title: "Custom Scraper vs Third-Party Tools",
        reasoning: "Wrestling sites have unique structures that generic scrapers couldn't handle",
        tradeoff: "More development time but 10x better data quality",
        impact: "Data accuracy improved from 60% to 95%"
      },
      {
        title: "In-Memory Caching Strategy",
        reasoning: "Search queries were hitting the file system for every request",
        tradeoff: "Higher memory usage but much faster search performance",
        impact: "Search response time improved from 500ms to 100ms"
      }
    ]
  }
}

export function V3ArchitectureDiagram() {
  const [selectedArchitecture, setSelectedArchitecture] = useState<keyof typeof architectures>("switchboard")
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  
  const architecture = architectures[selectedArchitecture]
  const selectedNodeData = selectedNode ? architecture.nodes.find(n => n.id === selectedNode) : null

  const getNodeColor = (type: string) => {
    switch (type) {
      case "frontend": return "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700"
      case "backend": return "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700"
      case "database": return "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700"
      case "external": return "bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700"
      case "api": return "bg-cyan-100 dark:bg-cyan-900/30 border-cyan-300 dark:border-cyan-700"
      default: return "bg-gray-100 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700"
    }
  }

  const getNodeIcon = (type: string) => {
    switch (type) {
      case "frontend": return <Globe className="w-4 h-4" />
      case "backend": return <Cpu className="w-4 h-4" />
      case "database": return <Database className="w-4 h-4" />
      case "external": return <GitBranch className="w-4 h-4" />
      case "api": return <Zap className="w-4 h-4" />
      default: return <Cpu className="w-4 h-4" />
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            System Architecture Deep Dive
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive diagrams showing real system architectures, performance bottlenecks, 
            and engineering decisions. Click on components to see implementation details.
          </p>
        </div>

        {/* Architecture Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(architectures).map(([key, arch]) => (
              <Button
                key={key}
                variant={selectedArchitecture === key ? "default" : "outline"}
                onClick={() => {
                  setSelectedArchitecture(key as keyof typeof architectures)
                  setSelectedNode(null)
                }}
                className="text-sm"
              >
                {arch.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="enhanced" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="enhanced" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Interactive Flow
              </TabsTrigger>
              <TabsTrigger value="diagram" className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                Architecture Details
              </TabsTrigger>
              <TabsTrigger value="decisions" className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Engineering Decisions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enhanced" className="space-y-6">
              <V3EnhancedArchitecture />
            </TabsContent>

            <TabsContent value="diagram" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {getNodeIcon("backend")}
                    {architecture.title}
                  </CardTitle>
                  <CardDescription>{architecture.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Architecture Diagram */}
                    <div className="lg:col-span-2">
                      <div className="relative p-8 bg-muted/20 rounded-lg border-2 border-dashed border-muted-foreground/20">
                        <div className="grid grid-cols-2 gap-6">
                          {architecture.nodes.map((node) => (
                            <div
                              key={node.id}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${
                                getNodeColor(node.type)
                              } ${
                                selectedNode === node.id 
                                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                                  : ""
                              }`}
                              onClick={() => setSelectedNode(node.id)}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                {getNodeIcon(node.type)}
                                <span className="font-semibold text-sm">{node.label}</span>
                              </div>
                              <div className="text-xs text-muted-foreground mb-2">
                                {node.tech}
                              </div>
                              {node.performance && (
                                <Badge variant="outline" className="text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {node.performance}
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Flow Arrows */}
                        <div className="absolute inset-0 pointer-events-none">
                          <svg className="w-full h-full">
                            {architecture.flows.map((flow, index) => (
                              <g key={index}>
                                <defs>
                                  <marker
                                    id={`arrowhead-${index}`}
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="9"
                                    refY="3.5"
                                    orient="auto"
                                  >
                                    <polygon
                                      points="0 0, 10 3.5, 0 7"
                                      fill="currentColor"
                                      className="text-primary"
                                    />
                                  </marker>
                                </defs>
                                <path
                                  d={`M ${100 + index * 20} ${100 + index * 30} L ${200 + index * 20} ${150 + index * 30}`}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  className="text-primary"
                                  markerEnd={`url(#arrowhead-${index})`}
                                />
                              </g>
                            ))}
                          </svg>
                        </div>
                      </div>

                      {/* Flow Details */}
                      <div className="mt-6 space-y-3">
                        <h4 className="font-semibold">Data Flow Details</h4>
                        {architecture.flows.map((flow, index) => (
                          <div key={index} className="flex items-center gap-3 text-sm">
                            <ArrowRight className="w-4 h-4 text-primary" />
                            <span className="font-medium">{flow.label}</span>
                            {flow.latency && (
                              <Badge variant="outline" className="text-xs">
                                {flow.latency}
                              </Badge>
                            )}
                            {flow.volume && (
                              <Badge variant="secondary" className="text-xs">
                                {flow.volume}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Component Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Component Details</h4>
                      {selectedNodeData ? (
                        <Card className="border-primary/20">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {getNodeIcon(selectedNodeData.type)}
                              {selectedNodeData.label}
                            </CardTitle>
                            <Badge variant="outline" className="w-fit">
                              {selectedNodeData.tech}
                            </Badge>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                              {selectedNodeData.description}
                            </p>
                            
                            {selectedNodeData.performance && (
                              <div>
                                <h5 className="font-medium text-sm mb-2">Performance</h5>
                                <Badge variant="outline" className="text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {selectedNodeData.performance}
                                </Badge>
                              </div>
                            )}

                            {selectedNodeData.challenges && (
                              <div>
                                <h5 className="font-medium text-sm mb-2">Technical Challenges</h5>
                                <ul className="space-y-1">
                                  {selectedNodeData.challenges.map((challenge, index) => (
                                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                      <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                      {challenge}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ) : (
                        <Card className="border-dashed">
                          <CardContent className="p-6 text-center text-muted-foreground">
                            <GitBranch className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Click on a component to see detailed information</p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="decisions" className="space-y-6">
              <div className="grid gap-6">
                {architecture.decisions.map((decision, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        {decision.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Reasoning</h4>
                        <p className="text-sm text-muted-foreground">{decision.reasoning}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Tradeoffs</h4>
                        <p className="text-sm text-muted-foreground">{decision.tradeoff}</p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-medium mb-2 text-green-800 dark:text-green-300">Impact</h4>
                        <p className="text-sm text-green-700 dark:text-green-400">{decision.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}