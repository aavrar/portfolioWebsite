"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, MessageCircle, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <Card className="w-80 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Quick Contact</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <Button className="w-full gap-2" size="sm">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="w-full" size="sm" asChild>
                <a href="mailto:aahad@example.com">Email Me</a>
              </Button>
              <Button variant="outline" className="w-full" size="sm" asChild>
                <a href="https://calendly.com/aahadv" target="_blank" rel="noopener noreferrer">
                  Schedule Call
                </a>
              </Button>
              <div className="text-xs text-muted-foreground text-center pt-2">Available for immediate start</div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
