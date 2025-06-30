"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code, Cog, Github, ExternalLink, TrendingUp, Users, Clock, AlertTriangle, Zap, Database } from "lucide-react"

const projects = [
  {
    id: "switchboard",
    title: "SwitchBoard Research Platform",
    tagline: "Code-switching data collection for linguistic research",
    executiveSummary: "A web platform that collects and analyzes multilingual code-switching examples. Currently used by linguistics students for research papers.",
    businessImpact: {
      users: "200+ examples collected",
      adoption: "3 research papers enabled",
      timeframe: "1.5 months development",
      status: "Phase 1 Complete - Actually works!"
    },
    technicalDetails: {
      architecture: "Next.js frontend with Supabase backend",
      keyFeatures: ["Real-time data submission", "Language pair filtering", "Basic analytics dashboard", "Export functionality"],
      techStack: ["React", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
      challenges: ["Database schema design for multilingual data", "Search optimization", "User-friendly data entry forms"],
      codeQuality: "Clean component architecture, TypeScript throughout, responsive design"
    },
    processInsights: {
      approach: "Started as class assignment, evolved based on professor feedback",
      iterations: "3 major design iterations based on user testing with linguistics students",
      learnings: ["Academic users need export features", "Search is more important than fancy UI", "Data integrity crucial for research"],
      failures: "Initial attempt at complex ML analysis was overengineered - simplified to focus on data collection",
      timeline: "Week 1-2: Basic CRUD, Week 3-4: Search/filter, Week 5-6: Polish & testing"
    },
    links: {
      github: "https://github.com/aavrar/CodeBoard",
      demo: null
    },
    engineeringDecisions: [
      {
        title: "Supabase vs Raw PostgreSQL",
        problem: "Needed real-time data updates for research collaboration without complex WebSocket infrastructure",
        decision: "Used Supabase for managed PostgreSQL with built-in real-time subscriptions",
        tradeoffs: "Less database control but 10x faster development. RLS policies instead of custom auth logic",
        metrics: {
          developmentTime: "3 weeks → 1 week",
          complexity: "High → Low",
          maintenance: "Daily tweaks → Set-and-forget"
        },
        impact: "Enabled focus on linguistics features instead of infrastructure"
      },
      {
        title: "Full-Text Search with GIN Indexes",
        problem: "Standard LIKE queries took 2+ seconds for multilingual text search across 200+ examples",
        decision: "Implemented PostgreSQL full-text search with GIN indexes and ts_rank scoring",
        tradeoffs: "30% larger database size but 10x faster search performance and relevance ranking",
        metrics: {
          queryTime: "2100ms → 180ms",
          indexSize: "+30% storage",
          relevanceScore: "No ranking → ts_rank scoring"
        },
        impact: "Search became instant and users could find relevant examples immediately"
      },
      {
        title: "TypeScript Throughout",
        problem: "Academic users submitting inconsistent data formats causing runtime errors",
        decision: "Strict TypeScript with Zod validation on both client and server",
        tradeoffs: "More upfront development time but eliminated data consistency issues",
        metrics: {
          runtimeErrors: "15/week → 0/week",
          developmentTime: "+20% initially",
          dataQuality: "85% → 99% valid entries"
        },
        impact: "Zero data corruption issues reported by linguistics researchers"
      }
    ]
  },
  {
    id: "story-engine",
    title: "Interactive Story Generator",
    tagline: "AI-powered procedural narrative engine",
    executiveSummary: "Explores how AI can enhance creative writing through interactive storytelling. Players make choices that influence AI-generated narratives.",
    businessImpact: {
      users: "200+ player sessions",
      adoption: "50+ unique story paths generated",
      timeframe: "2 months development",
      status: "Functional demo - proves the concept"
    },
    technicalDetails: {
      architecture: "FastAPI backend with React frontend, OpenAI integration",
      keyFeatures: ["Dynamic story generation", "Choice persistence", "Character memory", "Branching narratives"],
      techStack: ["Python", "FastAPI", "React", "OpenAI API", "SQLite"],
      challenges: ["Maintaining narrative coherence", "API cost management", "State management across story sessions"],
      codeQuality: "Modular Python backend, clean API design, proper error handling"
    },
    processInsights: {
      approach: "Research-first: studied interactive fiction before building",
      iterations: "Multiple prompt engineering experiments to improve story quality",
      learnings: ["AI excels at variety, struggles with consistency", "Players want agency, not just randomness", "Simple UI lets story shine"],
      failures: "First attempt used complex world-building - simplified to focus on character interactions",
      timeline: "Month 1: Core engine, Month 2: Frontend & polish"
    },
    links: {
      github: "https://github.com/aavrar/interactive-story",
      demo: "https://interactive-story-zeta.vercel.app/"
    },
    engineeringDecisions: [
      {
        title: "FastAPI vs Django for AI Integration",
        problem: "Needed async processing for OpenAI API calls without blocking user requests",
        decision: "FastAPI with async/await for concurrent OpenAI API calls and session management",
        tradeoffs: "Less built-in features than Django but much better async performance for API-heavy workloads",
        metrics: {
          responseTime: "4000ms → 2000ms",
          concurrentUsers: "1 → 10+",
          apiCalls: "Sequential → Parallel"
        },
        impact: "Users can generate multiple story branches simultaneously without blocking UI"
      },
      {
        title: "Prompt Caching Strategy",
        problem: "OpenAI API costs were $0.50 per story session - unsustainable for demo usage",
        decision: "Implemented intelligent prompt caching based on story context similarity and choice patterns",
        tradeoffs: "More complex prompt logic but 60% cost reduction with minimal quality loss",
        metrics: {
          costPerSession: "$0.50 → $0.18",
          cacheHitRate: "0% → 40%",
          responseQuality: "95% → 93% (minimal impact)"
        },
        impact: "Made the demo financially sustainable while maintaining story quality"
      },
      {
        title: "SQLite for Session State",
        problem: "Complex story state and character memory needed persistence across user sessions",
        decision: "SQLite with JSON columns for flexible story state storage instead of Redis or full PostgreSQL",
        tradeoffs: "Limited concurrent access but perfect for single-user sessions with complex nested data",
        metrics: {
          setupComplexity: "High (PostgreSQL) → Low (SQLite)",
          queryPerformance: "<10ms for state retrieval",
          deploymentSize: "Large → Minimal"
        },
        impact: "Simplified deployment while maintaining rich story persistence and character memory"
      }
    ]
  },
  {
    id: "wrestlestats",
    title: "WrestleStats Database",
    tagline: "Wrestling statistics aggregation and analysis",
    executiveSummary: "Personal project that became useful for wrestling fans. Scrapes and organizes wrestling data into searchable format.",
    businessImpact: {
      users: "Used by wrestling forums",
      adoption: "500+ wrestlers tracked, 1000+ matches",
      timeframe: "1.5 months development",
      status: "Personal project with community use"
    },
    technicalDetails: {
      architecture: "Node.js scraper with React frontend",
      keyFeatures: ["Web scraping pipeline", "Data normalization", "Search interface", "Match history tracking"],
      techStack: ["React", "Node.js", "Express", "Cheerio", "Chart.js"],
      challenges: ["Data consistency across sources", "Rate limiting", "Handling different site structures"],
      codeQuality: "Robust error handling, modular scraper design, efficient data storage"
    },
    processInsights: {
      approach: "Solve my own problem - couldn't find good wrestling stats anywhere",
      iterations: "Started simple, added features based on community feedback",
      learnings: ["Wrestling fans care about data accuracy", "Simple beats fancy for data tools", "Community feedback invaluable"],
      failures: "Tried to scrape too many sources at once - focused on quality over quantity",
      timeline: "Week 1-3: Scraper, Week 4-6: Frontend & optimization"
    },
    links: {
      github: "https://github.com/aavrar/wrestling-db",
      demo: null
    },
    engineeringDecisions: [
      {
        title: "Custom Scraper vs Third-Party Tools",
        problem: "Wrestling sites have unique, inconsistent HTML structures that generic scrapers couldn't handle",
        decision: "Built custom Node.js scraper with site-specific parsing logic and error recovery",
        tradeoffs: "More development time upfront but 10x better data quality and adaptability to site changes",
        metrics: {
          dataAccuracy: "60% → 95%",
          developmentTime: "1 week → 3 weeks",
          maintenanceHours: "20hrs/month → 2hrs/month"
        },
        impact: "Reliable data extraction that wrestling fans could trust for statistics"
      },
      {
        title: "In-Memory Caching Strategy",
        problem: "Complex filtering queries were hitting the file system repeatedly, causing 500ms+ response times",
        decision: "Implemented LRU cache for frequently accessed wrestler data and match statistics",
        tradeoffs: "Higher memory usage (~200MB) but dramatically faster search and filtering",
        metrics: {
          searchResponseTime: "500ms → 100ms",
          memoryUsage: "50MB → 250MB",
          cacheHitRate: "0% → 75%"
        },
        impact: "Instant search results made the tool actually usable for exploring wrestling statistics"
      },
      {
        title: "Data Normalization Pipeline",
        problem: "Wrestler names and match data were inconsistent across different wrestling sites",
        decision: "Built ETL pipeline with fuzzy matching for wrestler names and match deduplication",
        tradeoffs: "Complex data processing logic but eliminated duplicate records and name variations",
        metrics: {
          duplicateRecords: "30% → <1%",
          nameVariations: "5+ per wrestler → 1 canonical name",
          dataQuality: "70% → 95%"
        },
        impact: "Clean, searchable database that wrestling forums could cite with confidence"
      }
    ]
  }
]

export function V3LayeredContent() {
  const [selectedProject, setSelectedProject] = useState(projects[0].id)
  const project = projects.find(p => p.id === selectedProject) || projects[0]

  return (
    <section id="overview" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Layers, One Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every project tells a story at multiple levels. Choose your perspective:
            executive summary, technical deep-dive, or process insights.
          </p>
        </div>

        {/* Project Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {projects.map((proj) => (
              <Button
                key={proj.id}
                variant={selectedProject === proj.id ? "default" : "outline"}
                onClick={() => setSelectedProject(proj.id)}
                className="text-sm"
              >
                {proj.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Three-Layer Content */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="executive" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="executive" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Executive</span>
                <span className="sm:hidden">Exec</span>
              </TabsTrigger>
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span className="hidden sm:inline">Technical</span>
                <span className="sm:hidden">Tech</span>
              </TabsTrigger>
              <TabsTrigger value="engineering" className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="hidden sm:inline">Engineering</span>
                <span className="sm:hidden">Eng</span>
              </TabsTrigger>
              <TabsTrigger value="process" className="flex items-center gap-2">
                <Cog className="w-4 h-4" />
                Process
              </TabsTrigger>
            </TabsList>

            {/* Executive Layer */}
            <TabsContent value="executive" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.tagline}</CardDescription>
                    </div>
                    <Badge variant="secondary">{project.businessImpact.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">{project.executiveSummary}</p>
                  
                  {/* Business Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{project.businessImpact.users}</div>
                      <div className="text-sm text-muted-foreground">Impact</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{project.businessImpact.adoption}</div>
                      <div className="text-sm text-muted-foreground">Adoption</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{project.businessImpact.timeframe}</div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-6 h-6 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">✓</div>
                      <div className="font-semibold text-sm">{project.businessImpact.status}</div>
                      <div className="text-sm text-muted-foreground">Status</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.links.demo && (
                      <Button variant="outline" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Technical Layer */}
            <TabsContent value="technical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Implementation</CardTitle>
                  <CardDescription>Architecture, stack, and engineering decisions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Architecture</h4>
                    <p className="text-muted-foreground">{project.technicalDetails.architecture}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technicalDetails.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.technicalDetails.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technical Challenges</h4>
                    <ul className="space-y-2">
                      {project.technicalDetails.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Code Quality</h4>
                    <p className="text-sm text-muted-foreground">{project.technicalDetails.codeQuality}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Engineering Decisions Layer */}
            <TabsContent value="engineering" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Engineering Decisions
                  </CardTitle>
                  <CardDescription>Real architectural choices, tradeoffs, and their impact on project success</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.engineeringDecisions.map((decision, index) => (
                      <Card key={index} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Database className="w-5 h-5 text-primary" />
                            {decision.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Problem */}
                          <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                            <h4 className="font-semibold mb-2 text-red-800 dark:text-red-300 flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4" />
                              Problem
                            </h4>
                            <p className="text-sm text-red-700 dark:text-red-400">{decision.problem}</p>
                          </div>

                          {/* Decision */}
                          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-300 flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              Decision Made
                            </h4>
                            <p className="text-sm text-blue-700 dark:text-blue-400">{decision.decision}</p>
                          </div>

                          {/* Tradeoffs */}
                          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-300">Tradeoffs</h4>
                            <p className="text-sm text-orange-700 dark:text-orange-400">{decision.tradeoffs}</p>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {Object.entries(decision.metrics).map(([key, value]) => (
                              <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                                <div className="text-sm font-medium text-muted-foreground mb-1 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                                <div className="font-semibold text-sm">{value}</div>
                              </div>
                            ))}
                          </div>

                          {/* Impact */}
                          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                            <h4 className="font-semibold mb-2 text-green-800 dark:text-green-300 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Impact
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-400">{decision.impact}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Process Layer */}
            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Development Process</CardTitle>
                  <CardDescription>How it was built, what went wrong, what I learned</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Approach</h4>
                    <p className="text-muted-foreground">{project.processInsights.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Iterations & Evolution</h4>
                    <p className="text-muted-foreground">{project.processInsights.iterations}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What I Learned</h4>
                    <ul className="space-y-2">
                      {project.processInsights.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold mb-2 text-red-800 dark:text-red-300">What Didn't Work</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm">{project.processInsights.failures}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Timeline Breakdown</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-muted/50 p-3 rounded">
                      {project.processInsights.timeline}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}