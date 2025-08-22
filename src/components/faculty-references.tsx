"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { 
  Mail, 
  BookOpen,
  Copy,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

interface FacultyReference {
  id: number
  name: string
  title: string
  department: string
  relationship?: string
  courses?: string[]
  email: string
  canSpeakTo: string[]
  yearsKnown: string
  imageUrl?: string
}

const facultyReferences: FacultyReference[] = [
  {
    id: 1,
    name: "Dr. Amity Reading",
    title: "Professor of English",
    department: "English Department",
    relationship: "Academic Advisor & Course Instructor",
    courses: ["Applied Linguistics", "Reading World Literature", "Writing for the Real World", "Discourses of Disability"],
    email: "amityreading@depauw.edu",
    canSpeakTo: ["Technical writing abilities", "Research Skills", "Research potential", "Inter-personal skills"],
    yearsKnown: "3+ years",
    imageUrl: "/faculty/amity-reading.jpg" // Optional
  },
  {
    id: 2,
    name: "Dr. Dave Berque",
    title: "Professor of Computer Science",
    department: "Computer Science Department", 
    relationship: "Mentor & Professional Advisor",
    courses: [""],
    email: "dberque@depauw.edu",
    canSpeakTo: ["Communication skills", "Critical thinking", "Problem-solving skills", "Technical skills", "Research skills"],
    yearsKnown: "1+ years"
  },
  {
    id: 3,
    name: "Dr. Eugene Gloria",
    title: "Professor of English and Chair of the English Department",
    department: "English Department",
    relationship: "First-Year Seminar Professor & Course Instructor",
    courses: ["Blood Will Tell", "Form & Genre"],
    email: "egloria@depauw.edu",
    canSpeakTo: ["Writing skills", "Independent research capabilities", "Innovation and creativity", "Literary Analytical skills"],
    yearsKnown: "3+ years"
  },
  {
    id: 4,
    name: "Dr. Harry Brown",
    title: "Professor of English",
    department: "English Department",
    relationship: "Course Instructor",
    courses: ["The Devil in Literature", "AI and The Future of Writing"],
    email: "hbrown@depauw.edu",
    canSpeakTo: ["Writing skills", "Critical thinking", "Research skills", "Inter-personal skills"],
    yearsKnown: "1+ years"
  },
  {
    id: 5,
    name: "Dr. Gloria Townsend",
    title: "Professor of Computer Science and Chair of the Computer Science Department",
    department: "Computer Science Department",
    relationship: "Academic Advisor",
    courses: [""],
    email: "gct@depauw.edu",
    canSpeakTo: ["Interdisciplinary research", "Academic presentation skills", "Research ethics"],
    yearsKnown: "1+ years"
  },
  {
    id: 6,
    name: "Dr. Scott Thede",
    title: "Professor of Computer Science",
    department: "Computer Science Department",
    relationship: "Course Instructor",
    courses: ["Foundations of Computation", "Computer Systems", "Theory of Computation"],
    email: "sthede@depauw.edu",
    canSpeakTo: ["Technical skills", "Professional work ethic", "Real-world problem solving", "Inter-personal skills"],
    yearsKnown: "2+ years"
  },
  {
    id: 7,
    name: "Rachel Haines Cowart",
    title: "Housing and Residence Life Coordinator",
    department: "Housing and Residence Life",
    relationship: "Housing and Residence Life Coordinator",
    email: "rachelhaines@depauw.edu",
    canSpeakTo: ["Professional Skills", "Professional work ethic", "Real-world problem solving", "Inter-personal skills"],
    yearsKnown: "2+ years"
  },
  {
    id: 8,
    name: "Jeff Shoup",
    title: "Director of Housing and Residence Life",
    department: "Housing and Residence Life",
    relationship: "Director of Housing and Residence Life",
    email: "jeffreyshoup@depauw.edu",
    canSpeakTo: ["Professional Skills", "Professional work ethic", "Real-world problem solving", "Inter-personal skills"],
    yearsKnown: "2+ years"
  }
]

const REFERENCES_PER_PAGE = 2

export function FacultyReferences() {
  const { toast } = useToast()
  const [currentPage, setCurrentPage] = useState(0)
  
  const totalPages = Math.ceil(facultyReferences.length / REFERENCES_PER_PAGE)
  const startIndex = currentPage * REFERENCES_PER_PAGE
  const endIndex = startIndex + REFERENCES_PER_PAGE
  const currentReferences = facultyReferences.slice(startIndex, endIndex)

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied to clipboard!",
        description: `${label} has been copied to your clipboard.`,
      })
    } catch (err) {
      toast({
        title: "Copy failed", 
        description: "Please copy the information manually.",
        variant: "destructive",
      })
    }
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Faculty References</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
            Academic mentors who can speak to my technical abilities, work ethic, and potential
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto min-h-[400px]">
          {currentReferences.map((ref) => (
            <Card key={ref.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header with Avatar */}
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16 flex-shrink-0">
                      {ref.imageUrl && (
                        <AvatarImage 
                          src={ref.imageUrl} 
                          alt={`${ref.name} profile picture`}
                        />
                      )}
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {getInitials(ref.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {ref.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{ref.title}</p>
                      <p className="text-sm text-muted-foreground">{ref.department}</p>
                    </div>
                  </div>

                  {/* Relationship & Duration */}
                  <div className="grid gap-2">
                    {ref.relationship && (
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-medium">Relationship:</span>
                        <span className="text-muted-foreground">{ref.relationship}</span>
                      </div>
                    )}
                    <div className={`text-sm text-muted-foreground ${ref.relationship ? 'ml-6' : ''}`}>
                      Known for {ref.yearsKnown}
                    </div>
                  </div>

                  {/* Courses */}
                  {ref.courses && ref.courses.length > 0 && ref.courses.some(course => course.trim()) && (
                    <div>
                      <div className="text-sm font-medium mb-2">Relevant Courses:</div>
                      <div className="flex flex-wrap gap-2">
                        {ref.courses.filter(course => course.trim()).map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Can Speak To */}
                  <div>
                    <div className="text-sm font-medium mb-2">Can speak to:</div>
                    <ul className="space-y-1">
                      {ref.canSpeakTo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-2 pt-2 border-t">
                    <Button
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link href={`mailto:${ref.email}?subject=Reference Request for Aahad Vakani&body=Dear ${ref.name},%0D%0A%0D%0AI am reaching out regarding Aahad Vakani, who has listed you as a reference. I would appreciate the opportunity to discuss Aahad's qualifications and experience.%0D%0A%0D%0AThank you for your time.%0D%0A%0D%0ABest regards,`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(ref.email, `${ref.name}'s email`)}
                      className="px-3"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="h-8 w-8 rounded-full transition-all duration-300"
              aria-label="Previous references"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === currentPage ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="h-8 w-8 rounded-full transition-all duration-300"
              aria-label="Next references"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Page indicator and note */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground mb-2">
            Page {currentPage + 1} of {totalPages} • Showing {currentReferences.length} of {facultyReferences.length} references
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            📧 References are available upon request. Please feel free to contact these faculty members directly, 
            or I can facilitate introductions as needed.
          </p>
        </div>
      </div>
    </section>
  )
}