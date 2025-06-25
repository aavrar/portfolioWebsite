"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Information Technology Intern",
    company: "DePauw University",
    location: "Greencastle, IN",
    duration: "May 2024 - May 2025",
    type: "Internship",
    achievements: [
      "Provided technical support and troubleshooting for campus-wide IT infrastructure",
      "Managed and maintained computer labs, network equipment, and software systems",
      "Assisted in implementing new technology solutions and upgrades",
      "Documented technical procedures and created user guides",
      "Collaborated with team members to resolve complex technical issues",
    ],
    technologies: ["IT Support", "Network Management", "Technical Documentation", "System Administration"],
  },
  {
    title: "Resident Assistant",
    company: "DePauw University",
    location: "Greencastle, IN",
    duration: "Jan 2024 - Present",
    type: "Resident Assistant",
    achievements: [
      "Fostered a supportive and inclusive residential community for 40+ students",
      "Planned and executed educational and social programming events",
      "Mediated conflicts and provided crisis response when needed",
      "Enforced university policies and maintained safety protocols",
    ],
    technologies: ["Leadership", "Event Planning", "Conflict Resolution", "Community Building"],
  },
  {
    title: "Bachelor of Arts in Computer Science and English Writing",
    company: "DePauw University",
    location: "Greencastle, IN",
    duration: "Aug 2022 - May 2026",
    type: "Education",
    achievements: [
      "Majored in Computer Science with focus on AI and Machine Learning",
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI, Software Development",
      "Active member of Computer Science Club and AI Research Group",
      "Honor's Program and Dean's List recipient",
    ],
    technologies: ["Computer Science", "AI/ML", "Software Development", "Data Structures", "Algorithms"],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base font-medium">
                  <GraduationCap className="h-4 w-4" />
                  {exp.company}
                </CardDescription>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {exp.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
