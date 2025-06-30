"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

const skillsPoetry = [
  {
    prose: "Where user experience meets technical implementation, crafting interfaces that speak the language of their audience...",
    code: "const frontend = {\n  frameworks: ['React', 'Next.js'],\n  languages: ['TypeScript', 'JavaScript'],\n  styling: ['Tailwind CSS', 'CSS3']\n}",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  {
    prose: "In the server-side realm, where data flows and APIs come alive, building the backbone that powers digital experiences...",
    code: "const backend = {\n  languages: ['Python', 'JavaScript'],\n  frameworks: ['FastAPI', 'Node.js'],\n  databases: ['PostgreSQL', 'SQLite']\n}", 
    skills: ["Python", "Node.js", "FastAPI", "PostgreSQL", "RESTful APIs"]
  },
  {
    prose: "At the frontier of artificial intelligence, exploring how machines can enhance human creativity and decision-making...",
    code: "const aiTools = {\n  apis: ['OpenAI', 'Gemini'],\n  frameworks: ['PyTorch'],\n  applications: ['NLP', 'Text Generation']\n}",
    skills: ["OpenAI API", "Machine Learning", "NLP", "AI Integration", "Prompt Engineering"]
  }
]

export function CodePoetrySection() {
  const [compiledSkills, setCompiledSkills] = useState<number[]>([])

  useEffect(() => {
    const timers = skillsPoetry.map((_, index) => 
      setTimeout(() => {
        setCompiledSkills(prev => [...prev, index])
      }, (index + 1) * 2000)
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <div className="manuscript-border manuscript-page p-8 rounded-xl shadow-lg">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <h2 className="text-literary-heading text-4xl mb-4 text-ink">
              Chapter II: The Art of Development
            </h2>
            <p className="text-lg text-literary italic text-ink/70 max-w-2xl mx-auto">
              Where conceptual understanding transforms into practical expertise through careful cultivation and continuous learning.
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {skillsPoetry.map((skill, index) => (
          <div key={index} className="relative group">
            {/* Enhanced Prose Version */}
            <div 
              className={`manuscript-border manuscript-page p-8 rounded-xl transition-all duration-1000 ${
                compiledSkills.includes(index) ? 'opacity-60 transform scale-98' : 'opacity-100'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center text-ink font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xl text-literary italic text-ink/80 leading-relaxed">
                    {skill.prose}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Code Version - Appears after compilation */}
            {compiledSkills.includes(index) && (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 compile-in shadow-2xl border border-gray-700"
                style={{ zIndex: 10 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                  <div className="flex-1 space-y-6">
                    <pre className="font-mono text-green-400 text-lg leading-relaxed overflow-x-auto">
                      <code>{skill.code}</code>
                    </pre>
                    
                    {/* Skills "Execute" into badges */}
                    <div className="flex flex-wrap gap-3">
                      {skill.skills.map((skillName, skillIndex) => (
                        <Badge 
                          key={skillName}
                          className={`compile-in bg-gold text-ink hover:bg-gold/90 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105`}
                          style={{ 
                            animationDelay: `${skillIndex * 150}ms`
                          }}
                        >
                          {skillName}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Compilation Indicator */}
            {compiledSkills.includes(index) && (
              <div 
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 compile-in"
                style={{ zIndex: 15 }}
              >
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-ink text-xl font-bold shadow-lg">
                  ⚡
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Section */}
      {compiledSkills.length === skillsPoetry.length && (
        <div 
          className="mt-16 manuscript-border p-8 rounded-lg compile-in"
          style={{ backgroundColor: 'var(--parchment)' }}
        >
          <h3 
            className="text-2xl font-bold text-literary mb-4 text-center"
            style={{ color: 'var(--ink)' }}
          >
            The Compiled Toolkit
          </h3>
          
          <div className="text-literary text-center" style={{ color: 'var(--ink)' }}>
            <p className="mb-4">
              "From poetic intention to executable reality — a developer's arsenal 
              forged in the fires of curiosity and tempered by the discipline of craft."
            </p>
            
            <blockquote 
              className="border-l-4 pl-6 italic"
              style={{ borderColor: 'var(--gold)' }}
            >
              "Every tool learned is a new word in the vocabulary of creation."
            </blockquote>
          </div>
        </div>
      )}
    </section>
  )
}