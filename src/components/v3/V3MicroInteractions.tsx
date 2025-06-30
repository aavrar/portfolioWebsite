"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  MousePointer, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Heart,
  Star,
  Zap,
  TrendingUp
} from "lucide-react"

interface InteractionDemo {
  id: string
  title: string
  description: string
  component: React.ReactNode
}

const StaggeredList = () => {
  const [visibleItems, setVisibleItems] = useState(0)
  const items = [
    "Hover effects that provide instant feedback",
    "Staggered animations for list items", 
    "Progressive disclosure of content",
    "Micro-feedback on user actions",
    "Smooth transitions between states"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => prev < items.length ? prev + 1 : 0)
    }, 600)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
            index < visibleItems 
              ? 'opacity-100 translate-x-0 bg-green-50 dark:bg-green-950/20' 
              : 'opacity-0 translate-x-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
  )
}

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 transform ${
        isHovered ? 'scale-105 shadow-lg border-primary/50' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <MousePointer className={`w-4 h-4 transition-colors ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
          <span className="font-medium text-sm">Hover me!</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {isHovered ? '🎉 Nice hover! Notice the subtle scale and shadow?' : 'Move your cursor over this card'}
        </p>
        <div className={`mt-2 h-1 bg-primary/20 rounded transition-all duration-300 ${
          isHovered ? 'w-full' : 'w-0'
        }`} />
      </CardContent>
    </Card>
  )
}

const ProgressiveReveal = () => {
  const [revealStep, setRevealStep] = useState(0)
  const steps = [
    { title: "Project Planning", description: "Research and user needs analysis" },
    { title: "Development", description: "Building with iterative feedback" },
    { title: "Testing", description: "Quality assurance and optimization" },
    { title: "Deployment", description: "Launch and monitoring" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setRevealStep(prev => (prev + 1) % (steps.length + 1))
    }, 2000)
    return () => clearInterval(timer)
  }, [steps.length])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Eye className="w-4 h-4 text-primary" />
        <span className="font-medium text-sm">Progressive Disclosure</span>
      </div>
      
      {steps.map((step, index) => (
        <div
          key={index}
          className={`border rounded-lg p-3 transition-all duration-500 ${
            index < revealStep 
              ? 'opacity-100 translate-y-0 border-primary/30 bg-primary/5' 
              : 'opacity-30 translate-y-2'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
              index < revealStep ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
            }`}>
              {index + 1}
            </div>
            <div>
              <div className="font-medium text-sm">{step.title}</div>
              <div className="text-xs text-muted-foreground">{step.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const SkillMeter = () => {
  const [animatedValues, setAnimatedValues] = useState({ react: 0, typescript: 0, design: 0 })
  const targetValues = { react: 88, typescript: 85, design: 78 }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(targetValues)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="font-medium text-sm">Animated Progress Bars</span>
      </div>
      
      {Object.entries(targetValues).map(([skill, target]) => (
        <div key={skill} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="capitalize font-medium">{skill}</span>
            <span className="text-muted-foreground">{animatedValues[skill as keyof typeof animatedValues]}%</span>
          </div>
          <Progress 
            value={animatedValues[skill as keyof typeof animatedValues]} 
            className="h-2"
          />
        </div>
      ))}
    </div>
  )
}

const PulsingBadges = () => {
  const [activeBadge, setActiveBadge] = useState(0)
  const badges = ["React", "TypeScript", "AI Integration", "User Research", "System Design"]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBadge(prev => (prev + 1) % badges.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [badges.length])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="font-medium text-sm">Attention-Drawing Elements</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant={index === activeBadge ? "default" : "outline"}
            className={`transition-all duration-300 ${
              index === activeBadge ? 'animate-pulse scale-110' : 'scale-100'
            }`}
          >
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  )
}

const LoadingStates = () => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleStart = () => {
    setLoading(true)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-primary" />
        <span className="font-medium text-sm">Loading & Feedback States</span>
      </div>
      
      <Button 
        onClick={handleStart} 
        disabled={loading}
        className="w-full gap-2"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            Start Demo
          </>
        )}
      </Button>
      
      {loading && (
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground text-center">
            {progress < 50 ? 'Initializing...' : progress < 100 ? 'Processing...' : 'Complete!'}
          </p>
        </div>
      )}
    </div>
  )
}

export function V3MicroInteractions() {
  const demos: InteractionDemo[] = [
    {
      id: "stagger",
      title: "Staggered Animations",
      description: "Items appear with a gentle cascade effect",
      component: <StaggeredList />
    },
    {
      id: "hover",
      title: "Hover Feedback",
      description: "Immediate visual response to user interaction",
      component: <HoverCard />
    },
    {
      id: "reveal",
      title: "Progressive Disclosure",
      description: "Information revealed step by step for better comprehension",
      component: <ProgressiveReveal />
    },
    {
      id: "progress",
      title: "Animated Metrics",
      description: "Data visualization that comes to life",
      component: <SkillMeter />
    },
    {
      id: "badges",
      title: "Attention Direction",
      description: "Subtle animations guide user focus",
      component: <PulsingBadges />
    },
    {
      id: "loading",
      title: "Loading States",
      description: "Clear feedback during processes",
      component: <LoadingStates />
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MousePointer className="w-5 h-5" />
          Micro-Interactions Showcase
        </CardTitle>
        <CardDescription>
          Subtle animations and interactions that enhance user experience without overwhelming
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <Card key={demo.id} className="border-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">{demo.title}</CardTitle>
                <CardDescription className="text-xs">{demo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {demo.component}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-muted/50">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            Design Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Purpose-Driven</h4>
              <p className="text-muted-foreground">
                Every animation serves a purpose: guiding attention, providing feedback, or reducing cognitive load.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Accessibility First</h4>
              <p className="text-muted-foreground">
                Respects user preferences for reduced motion and maintains keyboard navigation.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}