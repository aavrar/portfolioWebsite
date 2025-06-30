"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Calendar, 
  Github, 
  Linkedin, 
  Coffee, 
  MessageSquare,
  Clock,
  MapPin,
  Download,
  ExternalLink,
  CheckCircle
} from "lucide-react"

const contactMethods = [
  {
    method: "Email",
    icon: Mail,
    primary: true,
    title: "Best for: Detailed discussions, project proposals",
    action: "aahadvakani@gmail.com",
    href: "mailto:aahadvakani@gmail.com",
    description: "I actually read and respond to emails. Usually within 24 hours.",
    availability: "24/7"
  },
  {
    method: "Calendar",
    icon: Calendar, 
    primary: true,
    title: "Best for: Interviews, technical discussions",
    action: "Schedule 30min call",
    href: "https://calendly.com/avakani_2026-depauw",
    description: "Direct access to my calendar. Perfect for interviews or project discussions.",
    availability: "Mon-Fri, 9 AM - 6 PM EST"
  },
  {
    method: "LinkedIn",
    icon: Linkedin,
    primary: false,
    title: "Best for: Professional networking",
    action: "Connect with me",
    href: "https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/",
    description: "Professional updates and industry connections.",
    availability: "Weekly"
  },
  {
    method: "GitHub",
    icon: Github,
    primary: false,
    title: "Best for: Code reviews, technical collaboration",
    action: "View my work",
    href: "https://github.com/aavrar",
    description: "All my code is here. Feel free to explore, fork, or contribute.",
    availability: "Daily commits"
  }
]

const workingPreferences = [
  {
    title: "Remote-First",
    icon: MapPin,
    description: "I work best remotely but am happy to collaborate in person when it matters.",
    details: ["Highly effective in async communication", "Comfortable with video calls", "Open to occasional in-person meetings"]
  },
  {
    title: "Flexible Hours",
    icon: Clock, 
    description: "I'm most productive in non-traditional hours but can adapt to team schedules.",
    details: ["Peak productivity: 10 PM - 2 AM", "Available for meetings: 9 AM - 6 PM EST", "Quick responses during business hours"]
  },
  {
    title: "Collaborative Spirit",
    icon: MessageSquare,
    description: "I believe the best work happens when smart people challenge each other's ideas.",
    details: ["Love pair programming sessions", "Enjoy technical discussions", "Value honest feedback"]
  }
]

const quickFacts = [
  { label: "Location", value: "Indiana, USA (EST)" },
  { label: "Available", value: "Immediately" },
  { label: "Work Authorization", value: "US Citizen" },
  { label: "Education", value: "DePauw University, Class of 2026" },
  { label: "Preferred Role", value: "Full-Stack Developer" },
  { label: "Ideal Company", value: "AI/ML focused, collaborative culture" }
]

export function V3Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("aahadvakani@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're hiring, collaborating, or just want to chat about AI and development, 
            I'd love to hear from you. Here's how to reach me:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Methods</h3>
              
              <div className="grid gap-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <Card key={method.method} className={method.primary ? "border-primary/50 bg-primary/5" : ""}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${method.primary ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{method.method}</h4>
                              {method.primary && <Badge variant="default" className="text-xs">Preferred</Badge>}
                              <Badge variant="outline" className="text-xs">{method.availability}</Badge>
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-3">{method.title}</p>
                            <p className="text-sm mb-4">{method.description}</p>
                            
                            <div className="flex gap-2">
                              {method.method === "Email" ? (
                                <>
                                  <Button asChild>
                                    <a href={method.href}>
                                      <Mail className="w-4 h-4 mr-2" />
                                      Send Email
                                    </a>
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    onClick={copyEmail}
                                    className="gap-2"
                                  >
                                    {copiedEmail ? (
                                      <>
                                        <CheckCircle className="w-4 h-4" />
                                        Copied!
                                      </>
                                    ) : (
                                      <>
                                        Copy Email
                                      </>
                                    )}
                                  </Button>
                                </>
                              ) : (
                                <Button asChild variant={method.primary ? "default" : "outline"}>
                                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                                    <Icon className="w-4 h-4 mr-2" />
                                    {method.action}
                                    <ExternalLink className="w-3 h-3 ml-2" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              
              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{fact.label}:</span>
                      <span className="font-medium text-right">{fact.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Need a formal resume?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download the traditional version for your HR systems.
                  </p>
                  <Button asChild className="w-full">
                    <a href="/resources/resume/resume.pdf" download>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Coffee Chat */}
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-6 text-center">
                  <Coffee className="w-8 h-8 mx-auto mb-3 text-orange-600" />
                  <h4 className="font-semibold mb-2">Just want to chat?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm always up for discussing AI, development, or life in general over coffee (virtual or real).
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="mailto:aahadvakani@gmail.com?subject=Coffee Chat">
                      <Coffee className="w-4 h-4 mr-2" />
                      Grab Coffee
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Working Preferences */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">How I Work Best</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {workingPreferences.map((pref) => {
                const Icon = pref.icon
                return (
                  <Card key={pref.title}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg">{pref.title}</CardTitle>
                      </div>
                      <CardDescription>{pref.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {pref.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-8">
                I'm looking for opportunities where I can contribute to meaningful projects, 
                learn from experienced developers, and help build technology that actually matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:aahadvakani@gmail.com?subject=Job Opportunity">
                    <Mail className="w-4 h-4 mr-2" />
                    Start the Conversation
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" asChild>
                  <a href="https://calendly.com/avakani_2026-depauw" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Interview
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}