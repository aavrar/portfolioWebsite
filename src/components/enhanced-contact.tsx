"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  Calendar,
  MapPin,
  Clock,
  Copy,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export function EnhancedContact() {
  const { toast } = useToast()

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

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Connect</h2>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
            Interested in discussing opportunities? Choose your preferred way to reach out and I&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Primary Contact Actions */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Email Me</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Best for detailed discussions and formal inquiries
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="mailto:aahadvakani@gmail.com?subject=Job Opportunity&body=Hi Aahad,%0D%0A%0D%0AI'd like to discuss a potential opportunity with you.%0D%0A%0D%0ABest regards,">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => copyToClipboard("aahadvakani@gmail.com", "Email address")}
                  className="w-full"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Email
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Schedule Call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect for interviews and real-time discussions
              </p>
              <Button asChild className="w-full">
                <Link href="https://calendly.com/avakani_2026-depauw" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Meeting
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-6 text-center">
              <ExternalLink className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect professionally and view my full profile
              </p>
              <Button asChild className="w-full">
                <Link href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Connect
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">aahadvakani@gmail.com</div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => copyToClipboard("aahadvakani@gmail.com", "Email address")}
                  className="p-0 h-auto text-xs mt-1"
                >
                  Copy to clipboard
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-sm text-muted-foreground">Greencastle, IN</div>
                <div className="text-xs text-muted-foreground">Open to remote work</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Availability</div>
                <div className="text-sm text-muted-foreground">Graduating May 2026</div>
                <div className="text-xs text-muted-foreground">Full-time preferred</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ⚡ I typically respond within 24 hours • 📱 Available for immediate interviews
          </p>
        </div>
      </div>
    </section>
  )
}