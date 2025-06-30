"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, XCircle, BarChart3, Zap } from "lucide-react"

interface ComparisonData {
  project: string
  description: string
  before: {
    title: string
    problems: string[]
    metrics: { label: string; value: string; trend: "bad" }[]
    approach: string
    screenshot?: string
  }
  after: {
    title: string
    solutions: string[]
    metrics: { label: string; value: string; trend: "good" }[]
    approach: string
    screenshot?: string
  }
  impact: {
    summary: string
    keyLearning: string
    timeToFix: string
  }
}

const comparisons: ComparisonData[] = [
  {
    project: "SwitchBoard Research Platform",
    description: "From over-engineered ML complexity to simple, useful data collection",
    before: {
      title: "v1.0 - The 'Smart' Version",
      problems: [
        "Built complex ML classification before users needed basic search",
        "Overwhelming UI with too many advanced features",
        "3 weeks of development time on unused functionality",
        "Users couldn't figure out how to just submit data"
      ],
      metrics: [
        { label: "User Adoption Rate", value: "15%", trend: "bad" },
        { label: "Average Session Time", value: "45 seconds", trend: "bad" },
        { label: "Feature Utilization", value: "30%", trend: "bad" },
        { label: "Development Time", value: "3 weeks", trend: "bad" }
      ],
      approach: "Technology-first: 'Let's add ML to make it intelligent!'"
    },
    after: {
      title: "v2.0 - The Useful Version",
      solutions: [
        "Stripped back to core CRUD operations with instant search",
        "Simple, clean interface focused on data entry",
        "Added CSV export that professors actually wanted",
        "Fast, responsive search that works in real-time"
      ],
      metrics: [
        { label: "User Adoption Rate", value: "85%", trend: "good" },
        { label: "Average Session Time", value: "4 minutes", trend: "good" },
        { label: "Feature Utilization", value: "90%", trend: "good" },
        { label: "Development Time", value: "1 week", trend: "good" }
      ],
      approach: "User-first: 'What do linguistics students actually need?'"
    },
    impact: {
      summary: "Transformed from academic experiment to research tool actually used by 3+ research papers",
      keyLearning: "Users want simple solutions to complex problems, not complex solutions to simple problems",
      timeToFix: "2 weeks of refactoring"
    }
  },
  {
    project: "Interactive Story Generator",
    description: "From API cost nightmare to sustainable, cached storytelling",
    before: {
      title: "v1.0 - The Expensive Version",
      problems: [
        "$200 unexpected OpenAI bill in first week",
        "Every story choice triggered new API call",
        "No caching or optimization strategies",
        "Demo became financially unsustainable"
      ],
      metrics: [
        { label: "Cost per Session", value: "$0.50", trend: "bad" },
        { label: "API Calls per Story", value: "12-15", trend: "bad" },
        { label: "Cache Hit Rate", value: "0%", trend: "bad" },
        { label: "Demo Sustainability", value: "1 week", trend: "bad" }
      ],
      approach: "Build first, optimize later (classic mistake)"
    },
    after: {
      title: "v2.0 - The Smart Version",
      solutions: [
        "Intelligent prompt caching based on story context",
        "Batch API calls for similar story branches",
        "Added user quotas and cost monitoring",
        "Optimized prompt engineering to reduce token usage"
      ],
      metrics: [
        { label: "Cost per Session", value: "$0.18", trend: "good" },
        { label: "API Calls per Story", value: "4-6", trend: "good" },
        { label: "Cache Hit Rate", value: "40%", trend: "good" },
        { label: "Demo Sustainability", value: "Ongoing", trend: "good" }
      ],
      approach: "Measure, optimize, then scale"
    },
    impact: {
      summary: "60% cost reduction while maintaining story quality, enabling sustainable demo usage",
      keyLearning: "Always implement cost monitoring and optimization from day one with AI services",
      timeToFix: "1 week of optimization work"
    }
  },
  {
    project: "Portfolio Website",
    description: "From animation overload to accessible, user-friendly design",
    before: {
      title: "v2.0 - The Flashy Version",
      problems: [
        "Excessive animations causing motion sickness",
        "5+ second loading times due to heavy effects",
        "Poor accessibility and keyboard navigation",
        "Users complained about 'trying too hard'"
      ],
      metrics: [
        { label: "Page Load Time", value: "5.2 seconds", trend: "bad" },
        { label: "Accessibility Score", value: "68/100", trend: "bad" },
        { label: "Bounce Rate", value: "78%", trend: "bad" },
        { label: "User Feedback", value: "Mixed", trend: "bad" }
      ],
      approach: "Show off technical skills with every animation library"
    },
    after: {
      title: "v3.0 - The Professional Version",
      solutions: [
        "Subtle, purposeful animations that enhance UX",
        "Respect for reduced motion preferences",
        "Fast loading with progressive enhancement",
        "Clean, content-focused design"
      ],
      metrics: [
        { label: "Page Load Time", value: "1.8 seconds", trend: "good" },
        { label: "Accessibility Score", value: "94/100", trend: "good" },
        { label: "Bounce Rate", value: "32%", trend: "good" },
        { label: "User Feedback", value: "Professional", trend: "good" }
      ],
      approach: "User experience over developer ego"
    },
    impact: {
      summary: "Professional presentation that focuses on content rather than effects",
      keyLearning: "Animations should enhance usability, not showcase technical ability",
      timeToFix: "Complete redesign over 1 month"
    }
  }
]

export function V3BeforeAfterComparison() {
  const [selectedComparison, setSelectedComparison] = useState(0)
  const [activeView, setActiveView] = useState<'before' | 'after' | 'impact'>('before')
  
  const comparison = comparisons[selectedComparison]

  const getTrendIcon = (trend: 'good' | 'bad') => {
    return trend === 'good' ? 
      <TrendingUp className="w-4 h-4 text-green-500" /> : 
      <TrendingDown className="w-4 h-4 text-red-500" />
  }

  const getTrendColor = (trend: 'good' | 'bad') => {
    return trend === 'good' ? 'text-green-600 bg-green-50 dark:bg-green-950' : 'text-red-600 bg-red-50 dark:bg-red-950'
  }

  return (
    <div className="space-y-8">
      {/* Comparison Selector */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold">Real Iteration Stories</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every project goes through failures and improvements. Here's the honest story of what went wrong and how I fixed it.
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {comparisons.map((comp, index) => (
            <Button
              key={index}
              variant={selectedComparison === index ? "default" : "outline"}
              onClick={() => setSelectedComparison(index)}
              className="text-sm"
            >
              {comp.project.split(' ')[0]}
            </Button>
          ))}
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center">
        <div className="bg-muted p-1 rounded-lg flex gap-1">
          <Button
            size="sm"
            variant={activeView === 'before' ? 'default' : 'ghost'}
            onClick={() => setActiveView('before')}
            className="gap-2"
          >
            <XCircle className="w-4 h-4" />
            What Went Wrong
          </Button>
          <Button
            size="sm"
            variant={activeView === 'after' ? 'default' : 'ghost'}
            onClick={() => setActiveView('after')}
            className="gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            How I Fixed It
          </Button>
          <Button
            size="sm"
            variant={activeView === 'impact' ? 'default' : 'ghost'}
            onClick={() => setActiveView('impact')}
            className="gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            Impact & Learning
          </Button>
        </div>
      </div>

      {/* Main Comparison Card */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            {comparison.project}
          </CardTitle>
          <CardDescription>{comparison.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Before View */}
          {activeView === 'before' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-destructive" />
                <h4 className="text-lg font-semibold text-destructive">{comparison.before.title}</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Problems */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-sm">What Went Wrong:</h5>
                  <ul className="space-y-2">
                    {comparison.before.problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Metrics */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-sm">Performance Metrics:</h5>
                  <div className="space-y-3">
                    {comparison.before.metrics.map((metric, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${getTrendColor(metric.trend)}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{metric.label}</span>
                          {getTrendIcon(metric.trend)}
                        </div>
                        <div className="text-lg font-bold">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">My Approach Back Then:</h5>
                <p className="text-sm text-muted-foreground italic">"{comparison.before.approach}"</p>
              </div>
            </div>
          )}

          {/* After View */}
          {activeView === 'after' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="text-lg font-semibold text-green-600">{comparison.after.title}</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Solutions */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-sm">How I Fixed It:</h5>
                  <ul className="space-y-2">
                    {comparison.after.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Improved Metrics */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-sm">Improved Results:</h5>
                  <div className="space-y-3">
                    {comparison.after.metrics.map((metric, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${getTrendColor(metric.trend)}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{metric.label}</span>
                          {getTrendIcon(metric.trend)}
                        </div>
                        <div className="text-lg font-bold">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-medium mb-2 text-green-800 dark:text-green-300">My Approach Now:</h5>
                <p className="text-sm text-green-700 dark:text-green-400 italic">"{comparison.after.approach}"</p>
              </div>
            </div>
          )}

          {/* Impact View */}
          {activeView === 'impact' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold">Impact & Key Learning</h4>
              </div>
              
              <div className="grid gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold mb-3 text-blue-800 dark:text-blue-300">Overall Impact</h5>
                  <p className="text-blue-700 dark:text-blue-400">{comparison.impact.summary}</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold mb-3 text-purple-800 dark:text-purple-300">Key Learning</h5>
                  <p className="text-purple-700 dark:text-purple-400 italic">"{comparison.impact.keyLearning}"</p>
                </div>
                
                <div className="text-center">
                  <Badge variant="outline" className="gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Time to Fix: {comparison.impact.timeToFix}
                  </Badge>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              {selectedComparison + 1} of {comparisons.length} failure stories
            </div>
            <div className="flex gap-2">
              {selectedComparison > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedComparison(selectedComparison - 1)}
                >
                  Previous
                </Button>
              )}
              {selectedComparison < comparisons.length - 1 && (
                <Button
                  size="sm"
                  onClick={() => setSelectedComparison(selectedComparison + 1)}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}