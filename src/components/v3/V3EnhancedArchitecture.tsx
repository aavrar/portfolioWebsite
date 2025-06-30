"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, Cpu, ArrowRight, GitBranch, Zap, Clock, AlertTriangle, Activity } from "lucide-react"

interface ArchNode {
  id: string
  label: string
  type: "frontend" | "backend" | "database" | "external" | "api"
  description: string
  tech: string
  performance?: string
  challenges?: string[]
  x: number
  y: number
  width: number
  height: number
}

interface ArchFlow {
  from: string
  to: string
  label: string
  latency?: string
  volume?: string
  animated?: boolean
}

const switchboardArchitecture = {
  title: "SwitchBoard Research Platform",
  description: "Real-time multilingual data collection with instant search",
  nodes: [
    {
      id: "user",
      label: "Research Interface",
      type: "frontend" as const,
      description: "Next.js frontend with real-time validation",
      tech: "React + TypeScript",
      performance: "~200ms load",
      x: 50,
      y: 80,
      width: 160,
      height: 100
    },
    {
      id: "api",
      label: "API Layer",
      type: "backend" as const,
      description: "RESTful API with data validation",
      tech: "Next.js API Routes",
      performance: "~50ms response",
      x: 300,
      y: 80,
      width: 160,
      height: 100
    },
    {
      id: "supabase",
      label: "Supabase",
      type: "api" as const,
      description: "Managed PostgreSQL with real-time subscriptions",
      tech: "Supabase + PostgreSQL",
      performance: "~100ms query",
      x: 550,
      y: 80,
      width: 160,
      height: 100
    },
    {
      id: "postgres",
      label: "PostgreSQL",
      type: "database" as const,
      description: "Optimized schema with GIN indexes",
      tech: "PostgreSQL 15",
      performance: "<200ms search",
      x: 300,
      y: 240,
      width: 160,
      height: 100
    }
  ],
  flows: [
    { from: "user", to: "api", label: "Form Submit", latency: "50ms", animated: true },
    { from: "api", to: "supabase", label: "Validate", latency: "30ms", animated: true },
    { from: "supabase", to: "postgres", label: "Query", latency: "100ms", animated: false },
    { from: "postgres", to: "supabase", label: "Results", latency: "200ms", animated: false },
    { from: "supabase", to: "user", label: "Real-time", latency: "50ms", animated: true }
  ]
}

export function V3EnhancedArchitecture() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [flowAnimation, setFlowAnimation] = useState(false)
  const [hoveredFlow, setHoveredFlow] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowAnimation(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const arch = switchboardArchitecture
  const selectedNodeData = selectedNode ? arch.nodes.find(n => n.id === selectedNode) : null

  const getNodeColor = (type: string) => {
    const colors = {
      frontend: { bg: "#dbeafe", border: "#3b82f6", text: "#1e40af" },
      backend: { bg: "#dcfce7", border: "#10b981", text: "#047857" },
      database: { bg: "#f3e8ff", border: "#8b5cf6", text: "#6d28d9" },
      external: { bg: "#fed7aa", border: "#f97316", text: "#c2410c" },
      api: { bg: "#e0f2fe", border: "#06b6d4", text: "#0891b2" }
    }
    return colors[type as keyof typeof colors] || colors.backend
  }

  const getNodeIcon = (type: string) => {
    const icons = {
      frontend: Globe,
      backend: Cpu,
      database: Database,
      external: GitBranch,
      api: Zap
    }
    const Icon = icons[type as keyof typeof icons] || Cpu
    return <Icon className="w-5 h-5" />
  }

  const getFlowPath = (from: string, to: string) => {
    const fromNode = arch.nodes.find(n => n.id === from)
    const toNode = arch.nodes.find(n => n.id === to)
    
    if (!fromNode || !toNode) return ""

    // Calculate connection points at edges, not centers
    let fromX, fromY, toX, toY

    // Determine which edge to connect from/to based on relative positions
    const fromCenterX = fromNode.x + fromNode.width / 2
    const fromCenterY = fromNode.y + fromNode.height / 2
    const toCenterX = toNode.x + toNode.width / 2
    const toCenterY = toNode.y + toNode.height / 2

    // From node connection point
    if (toCenterX > fromCenterX) {
      // Connect from right edge
      fromX = fromNode.x + fromNode.width
      fromY = fromCenterY
    } else if (toCenterX < fromCenterX) {
      // Connect from left edge
      fromX = fromNode.x
      fromY = fromCenterY
    } else if (toCenterY > fromCenterY) {
      // Connect from bottom edge
      fromX = fromCenterX
      fromY = fromNode.y + fromNode.height
    } else {
      // Connect from top edge
      fromX = fromCenterX
      fromY = fromNode.y
    }

    // To node connection point
    if (fromCenterX > toCenterX) {
      // Connect to right edge
      toX = toNode.x + toNode.width
      toY = toCenterY
    } else if (fromCenterX < toCenterX) {
      // Connect to left edge
      toX = toNode.x
      toY = toCenterY
    } else if (fromCenterY > toCenterY) {
      // Connect to bottom edge
      toX = toCenterX
      toY = toNode.y + toNode.height
    } else {
      // Connect to top edge
      toX = toCenterX
      toY = toNode.y
    }

    // Create smooth curved path
    const midX = (fromX + toX) / 2
    const midY = (fromY + toY) / 2
    const offset = Math.abs(fromX - toX) > Math.abs(fromY - toY) ? 20 : 40

    return `M ${fromX} ${fromY} Q ${midX} ${midY - offset} ${toX} ${toY}`
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Enhanced System Architecture
        </CardTitle>
        <CardDescription>
          Interactive architecture diagram with real-time data flow visualization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Architecture Diagram */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-muted/10 to-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 p-4">
              <svg className="w-full h-96 overflow-visible">
                {/* Define gradients and patterns */}
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  
                  <marker
                    id="arrowhead"
                    markerWidth="12"
                    markerHeight="8"
                    refX="11"
                    refY="4"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 12 4, 0 8"
                      fill="#3b82f6"
                    />
                  </marker>
                </defs>

                {/* Flow Lines */}
                {arch.flows.map((flow, index) => {
                  const path = getFlowPath(flow.from, flow.to)
                  const isHovered = hoveredFlow === `${flow.from}-${flow.to}`
                  
                  return (
                    <g key={index}>
                      {/* Main flow line */}
                      <path
                        d={path}
                        stroke="#3b82f6"
                        strokeWidth={isHovered ? "3" : "2"}
                        fill="none"
                        markerEnd="url(#arrowhead)"
                        className="transition-all duration-300"
                        opacity={isHovered ? 1 : 0.6}
                      />
                      
                      {/* Animated flow indicator */}
                      {flow.animated && flowAnimation && (
                        <circle
                          cx="0"
                          cy="0"
                          r="4"
                          fill="#3b82f6"
                          opacity="0.8"
                        >
                          <animateMotion
                            dur="2s"
                            repeatCount="1"
                            path={path}
                          />
                        </circle>
                      )}
                      
                      {/* Flow label */}
                      <text
                        className="text-xs font-medium fill-current text-foreground"
                        textAnchor="middle"
                        onMouseEnter={() => setHoveredFlow(`${flow.from}-${flow.to}`)}
                        onMouseLeave={() => setHoveredFlow(null)}
                      >
                        <textPath href={`#path-${index}`} startOffset="50%">
                          {flow.label}
                        </textPath>
                      </text>
                      
                      {/* Hidden path for text */}
                      <path
                        id={`path-${index}`}
                        d={path}
                        stroke="none"
                        fill="none"
                      />
                    </g>
                  )
                })}

                {/* Architecture Nodes */}
                {arch.nodes.map((node) => {
                  const colors = getNodeColor(node.type)
                  const isSelected = selectedNode === node.id
                  
                  return (
                    <g key={node.id}>
                      {/* Node background */}
                      <rect
                        x={node.x}
                        y={node.y}
                        width={node.width}
                        height={node.height}
                        rx="8"
                        fill={colors.bg}
                        stroke={colors.border}
                        strokeWidth={isSelected ? "3" : "2"}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                      />
                      
                      {/* Selection indicator */}
                      {isSelected && (
                        <rect
                          x={node.x - 4}
                          y={node.y - 4}
                          width={node.width + 8}
                          height={node.height + 8}
                          rx="12"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          opacity="0.6"
                        />
                      )}
                      
                      {/* Node content */}
                      <text
                        x={node.x + node.width / 2}
                        y={node.y + 25}
                        textAnchor="middle"
                        className="text-sm font-semibold fill-current"
                        style={{ color: colors.text }}
                      >
                        {node.label}
                      </text>
                      
                      <text
                        x={node.x + node.width / 2}
                        y={node.y + 45}
                        textAnchor="middle"
                        className="text-xs fill-current text-muted-foreground"
                      >
                        {node.tech}
                      </text>
                      
                      {node.performance && (
                        <text
                          x={node.x + node.width / 2}
                          y={node.y + 65}
                          textAnchor="middle"
                          className="text-xs fill-current text-muted-foreground"
                        >
                          {node.performance}
                        </text>
                      )}
                    </g>
                  )
                })}
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Component Types</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['frontend', 'backend', 'database', 'api'].map(type => {
                    const colors = getNodeColor(type)
                    return (
                      <div key={type} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded border"
                          style={{ backgroundColor: colors.bg, borderColor: colors.border }}
                        />
                        <span className="capitalize">{type}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-blue-500" />
                  <div className="font-semibold">~200ms</div>
                  <div className="text-xs text-muted-foreground">Avg Response</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Database className="w-5 h-5 mx-auto mb-2 text-green-500" />
                  <div className="font-semibold">200+</div>
                  <div className="text-xs text-muted-foreground">Examples Stored</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Activity className="w-5 h-5 mx-auto mb-2 text-purple-500" />
                  <div className="font-semibold">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Component Details Panel */}
          <div className="space-y-4">
            <h4 className="font-semibold">Component Details</h4>
            
            {selectedNodeData ? (
              <Card className="border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {getNodeIcon(selectedNodeData.type)}
                    {selectedNodeData.label}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {selectedNodeData.tech}
                    </Badge>
                    {selectedNodeData.performance && (
                      <Badge variant="secondary" className="text-xs">
                        {selectedNodeData.performance}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {selectedNodeData.description}
                  </p>
                  
                  {/* Technical challenges section - temporarily disabled for type safety */}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed">
                <CardContent className="p-6 text-center text-muted-foreground">
                  <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Click on a component to see detailed information</p>
                </CardContent>
              </Card>
            )}

            {/* Data Flow Legend */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Data Flow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {arch.flows.map((flow, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span className="font-medium">{flow.label}</span>
                    {flow.latency && (
                      <Badge variant="outline" className="text-xs">
                        {flow.latency}
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}