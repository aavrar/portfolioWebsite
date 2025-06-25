// components/Portfolio.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Download,
  Calendar,
  MapPin,
  Clock,
  FileCheck,
  GraduationCap,
  Target,
  Music,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import { FloatingContact } from "@/components/floating-contact"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { InteractiveProjects } from "@/components/interactive-projects"
import { TerminalShowcase } from "@/components/terminal-showcase"
import { BlogPostsGrid } from '../components/blog-posts-grid'
import { EnhancedContact } from "@/components/enhanced-contact"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingContact />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              AV
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#writing" className="transition-colors hover:text-primary">
              Writing
            </Link>
          </nav>

          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6">
        {/* Hero Section with Professional Summary */}
        <section id="about" className="py-24 md:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Aahad Vakani
                  </h1>
                  <p className="text-xl font-semibold text-primary">Undergraduate Software Developer</p>
                </div>

                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Experienced web developer with <strong>over 2 years</strong> of building scalable applications across personal and academic projects. 
                Specialized in the React and Python ecosystems, with a proven track record of delivering high-performance solutions.
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Undertaken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Achieved</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="resources/resume/resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-background text-foreground">
                  <Link href="https://calendly.com/avakani_2026-depauw" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <TerminalShowcase />
            </div>
          </div>
        </section>

        {/* Recruiter-Friendly Quick Info */}
        <section className="py-16 bg-muted/30">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">Greencastle, IN</p>
                <p className="text-xs text-muted-foreground">Open to remote and in-person roles</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Availability</h3>
                <p className="text-sm text-muted-foreground">Graduating May 2026</p>
                <p className="text-xs text-muted-foreground">Full-time preferred</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <GraduationCap className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground">DePauw University</p>
                <p className="text-xs text-muted-foreground">B.A. CS & English Writing, 2026</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Current Focus</h3>
                <p className="text-sm text-muted-foreground">AI-Driven Web Apps</p>
                <p className="text-xs text-muted-foreground">R&D, Game Logic, UX</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-muted/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies with hands-on experience in full-stack development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">HTML5</Badge>
                <Badge variant="secondary">CSS3</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Vue.js</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">REST APIs</Badge>
                <Badge variant="secondary">GraphQL</Badge>
                <Badge variant="secondary">Serverless</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Database & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Tools & Methods</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">GitHub</Badge>
                <Badge variant="secondary">Agile</Badge>
                <Badge variant="secondary">Testing</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Figma</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section id="experience" className="py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              Over 2 years of progressive experience in software development across various languages and frameworks.
            </p>
          </div>
          <ExperienceTimeline />
        </section>

        {/* Interactive Projects Section */}
        <section id="projects" className="py-24 bg-muted/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              Selected projects demonstrating technical expertise, problem-solving abilities, and measurable business
              impact
            </p>
          </div>
          <InteractiveProjects />
        </section>

      {/* Writing Section */}
      <section id="writing" className="py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Writing & Research</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sharing insights about tech trends, AI/ML, and Literature.
              </p>
            </div>
          </div>
         <BlogPostsGrid />
         </div>
        </section>

        {/* Enhanced Resume Section */}
        <section className="py-24 bg-primary/5">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Contribute</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download my comprehensive resume or schedule a call to discuss how I can contribute to your team
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 w-full max-w-2xl">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                <Link href="resources/resume/resume.pdf" download>
                  Resume (PDF)
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-background text-foreground">
                <Link href="https://calendly.com/avakani_2026-depauw" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Call
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-background text-foreground">
                <Link href="mailto:avakani_2026@depauw.edu">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground max-w-md">
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                <span>References available upon request</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Available for immediate start</span>
              </div>
            </div>
          </div>
        </section>

        <EnhancedContact />

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                    AV
                  </div>
                  <span className="font-bold text-xl">Aahad Vakani</span>
                </div>
                <p className="text-muted-foreground max-w-md">
                  Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building scalable
                  applications that drive business growth.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com/aavrar" className="h-9 w-9 p-0">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/" className="h-9 w-9 p-0">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://open.spotify.com/user/ezhvk6bv0gwachsr7ukw7u99u?si=be37301c485a4dd1" className="h-9 w-9 p-0">
                      <Music className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="mailto:aahadvakani@gmail.com" className="h-9 w-9 p-0">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="font-semibold">Quick Links</h3>
                  <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                    <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                      Experience
                    </Link>
                    <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                      Projects
                    </Link>
                    <Link href="#writing" className="text-muted-foreground hover:text-primary transition-colors">
                      Writing
                    </Link>
                  </nav>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Professional</h3>
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <span>Available for hire</span>
                    <span>Full-time preferred</span>
                    <span>Remote & hybrid welcome</span>
                    <span>References available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} Aahad Vakani. All rights reserved. Built with Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
