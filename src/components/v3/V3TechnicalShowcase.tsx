"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Brain, Palette, GitBranch, TestTube, Zap, Award } from "lucide-react"

const skillCategories = [
  {
    id: "languages",
    title: "Languages & Fundamentals",
    icon: Code,
    description: "Core programming languages and computer science fundamentals",
    skills: [
      { name: "Python", level: 90, experience: "2+ years", projects: ["Story Engine", "ML Projects", "Data Analysis"] },
      { name: "TypeScript/JavaScript", level: 85, experience: "2 years", projects: ["SwitchBoard", "Portfolio", "React Apps"] },
      { name: "Java", level: 75, experience: "Academic", projects: ["Data Structures", "OOP Projects"] },
      { name: "SQL", level: 80, experience: "1.5 years", projects: ["Database Design", "Data Analytics"] }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & User Experience", 
    icon: Palette,
    description: "Building interfaces that users actually want to use",
    skills: [
      { name: "React/Next.js", level: 88, experience: "2 years", projects: ["SwitchBoard", "Portfolio v3", "Story UI"] },
      { name: "Tailwind CSS", level: 92, experience: "2 years", projects: ["All Recent Projects", "Component Libraries"] },
      { name: "Responsive Design", level: 85, experience: "2 years", projects: ["Mobile-First Approach", "Cross-Browser"] },
      { name: "Accessibility (WCAG)", level: 78, experience: "Learning", projects: ["Portfolio v3", "Inclusive Design"] }
    ]
  },
  {
    id: "backend",
    title: "Backend & Infrastructure",
    icon: Database,
    description: "Server-side architecture and data management",
    skills: [
      { name: "FastAPI/Node.js", level: 82, experience: "1.5 years", projects: ["Story Engine API", "Web Services"] },
      { name: "PostgreSQL/SQLite", level: 80, experience: "1.5 years", projects: ["SwitchBoard DB", "Data Modeling"] },
      { name: "REST API Design", level: 85, experience: "1.5 years", projects: ["Multiple APIs", "Documentation"] },
      { name: "Supabase/Cloud", level: 75, experience: "1 year", projects: ["SwitchBoard", "Deployment"] }
    ]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Natural language processing and intelligent systems",
    skills: [
      { name: "OpenAI API Integration", level: 88, experience: "1 year", projects: ["Story Engine", "Prompt Engineering"] },
      { name: "Natural Language Processing", level: 80, experience: "Academic + Projects", projects: ["Text Analysis", "Research"] },
      { name: "Prompt Engineering", level: 85, experience: "1 year", projects: ["Story Generation", "AI Interactions"] },
      { name: "PyTorch/Scikit-learn", level: 70, experience: "Academic", projects: ["ML Coursework", "Experiments"] }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Process",
    icon: GitBranch,
    description: "Professional development workflow and collaboration",
    skills: [
      { name: "Git/GitHub", level: 88, experience: "2+ years", projects: ["Version Control", "Open Source"] },
      { name: "VS Code/Development", level: 90, experience: "2+ years", projects: ["Efficient Workflow", "Extensions"] },
      { name: "Testing & Debugging", level: 75, experience: "1.5 years", projects: ["Unit Tests", "Error Handling"] },
      { name: "Documentation", level: 85, experience: "2 years", projects: ["API Docs", "README Files"] }
    ]
  }
]

const achievements = [
  {
    title: "Academic Excellence",
    items: ["Dean's List", "Honor's Program", "Presidential Ambassador"],
    icon: Award,
    color: "text-yellow-600"
  },
  {
    title: "Research Impact",
    items: ["3 research papers enabled", "200+ linguistic examples collected", "Professor recommendations"],
    icon: TestTube,
    color: "text-blue-600"
  },
  {
    title: "Technical Growth",
    items: ["50+ GitHub repositories", "200+ commits this year", "Multiple live projects"],
    icon: Zap,
    color: "text-green-600"
  }
]

export function V3TechnicalShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("languages")
  const category = skillCategories.find(cat => cat.id === selectedCategory) || skillCategories[0]

  return (
    <section id="technical" className="py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Depth & Honest Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No inflated claims, no buzzword bingo. Here's what I actually know, 
            how well I know it, and what I've built with it.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {skillCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.title}</span>
                  <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
                </Button>
              )
            })}
          </div>

          {/* Selected Category Details */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <category.icon className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.experience}</p>
                      </div>
                      <Badge variant="secondary">{skill.level}% proficiency</Badge>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    {/* Projects Using This Skill */}
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((project, projIndex) => (
                        <Badge 
                          key={projIndex} 
                          variant="outline" 
                          className="text-xs"
                        >
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements & Recognition */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className={`w-8 h-8 mx-auto mb-4 ${achievement.color}`} />
                    <h4 className="font-semibold mb-3">{achievement.title}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Honest Self-Assessment */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Honest Self-Assessment</CardTitle>
            <CardDescription>What I'm great at, what I'm learning, and what I need to improve</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-3">Strengths</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Full-stack web development</li>
                  <li>• AI integration & prompt engineering</li>
                  <li>• Research-to-implementation</li>
                  <li>• Clean, maintainable code</li>
                  <li>• Creative problem-solving</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 mb-3">Currently Learning</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Advanced accessibility patterns</li>
                  <li>• DevOps & deployment strategies</li>
                  <li>• System design at scale</li>
                  <li>• Advanced ML techniques</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-600 mb-3">Areas for Growth</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Large-scale system architecture</li>
                  <li>• Advanced testing strategies</li>
                  <li>• Team collaboration workflows</li>
                  <li>• Mobile app development</li>
                  <li>• Data structures optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Philosophy */}
        <div className="text-center mt-12">
          <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            "I'd rather be honest about what I don't know than pretend to be an expert. 
            But what I do know, I know well — and I'm always eager to learn more."
          </blockquote>
        </div>
      </div>
    </section>
  )
}