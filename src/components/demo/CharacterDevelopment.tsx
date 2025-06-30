"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Zap, Code, BookOpen, Coffee, Trophy } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: Code,
    color: "bg-blue-500",
    skills: [
      { name: "React", level: 90, experience: "2+ years" },
      { name: "Next.js", level: 85, experience: "1.5 years" },
      { name: "TypeScript", level: 80, experience: "1 year" },
      { name: "Tailwind CSS", level: 95, experience: "2 years" }
    ]
  },
  {
    title: "Backend Wizardry", 
    icon: Zap,
    color: "bg-green-500",
    skills: [
      { name: "Python", level: 95, experience: "2+ years" },
      { name: "Node.js", level: 75, experience: "1 year" },
      { name: "FastAPI", level: 80, experience: "6 months" },
      { name: "PostgreSQL", level: 70, experience: "1 year" }
    ]
  },
  {
    title: "Literary Arts",
    icon: BookOpen,
    color: "bg-purple-500", 
    skills: [
      { name: "Creative Writing", level: 90, experience: "Lifelong" },
      { name: "Technical Writing", level: 85, experience: "2 years" },
      { name: "Research", level: 80, experience: "Academic" },
      { name: "Storytelling", level: 95, experience: "Natural talent" }
    ]
  },
  {
    title: "Caffeine Tolerance",
    icon: Coffee,
    color: "bg-orange-500",
    skills: [
      { name: "Coffee Consumption", level: 100, experience: "Legendary" },
      { name: "Energy Management", level: 60, experience: "Work in progress" },
      { name: "Late Night Coding", level: 95, experience: "Too much" },
      { name: "Morning Person", level: 5, experience: "Does not compute" }
    ]
  }
]

export function CharacterDevelopment() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const [levelProgress, setLevelProgress] = useState<{[key: string]: number}>({})

  useEffect(() => {
    // Reveal skills gradually
    const timer = setTimeout(() => {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setVisibleSkills(prev => [...prev, categoryIndex * 10 + skillIndex])
            
            // Animate progress bars
            setTimeout(() => {
              setLevelProgress(prev => ({
                ...prev,
                [`${categoryIndex}-${skillIndex}`]: skill.level
              }))
            }, 300)
          }, (categoryIndex * 500) + (skillIndex * 200))
        })
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="development" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Character Development Arc</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leveling Up Through Experience
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every great character has an origin story. Here's how this developer 
            evolved from curious beginner to code-wielding storyteller.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = categoryIndex * 10 + skillIndex
                  const progressKey = `${categoryIndex}-${skillIndex}`
                  const isVisible = visibleSkills.includes(skillId)
                  
                  return (
                    <div 
                      key={skillIndex}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.experience}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1">
                        <Progress 
                          value={levelProgress[progressKey] || 0} 
                          className="h-2"
                        />
                        <div className="text-right text-sm text-muted-foreground">
                          Level {skill.level}/100
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Character Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Character Summary</h3>
            <p className="text-muted-foreground">
              The story so far: A unique blend of technical prowess and creative expression
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Cups of Coffee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Unique Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}