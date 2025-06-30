"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Menu, X, Coffee, Github, Linkedin, Mail } from "lucide-react"

export function V3Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#overview", label: "Overview", ariaLabel: "Jump to overview section" },
    { href: "#technical", label: "Technical", ariaLabel: "Jump to technical showcase" },
    { href: "#live-code", label: "Live Code", ariaLabel: "Jump to live code demonstrations" },
    { href: "#metrics", label: "Metrics", ariaLabel: "Jump to performance dashboard" },
    { href: "#demo", label: "AI Demo", ariaLabel: "Jump to interactive AI demo" },
    { href: "#contact", label: "Contact", ariaLabel: "Jump to contact section" }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b shadow-sm' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Back to original site */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-foreground"
            aria-label="Return to original portfolio"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Original
            </Link>
          </Button>
          
          {/* Developer identifier */}
          <div className="hidden sm:block">
            <span className="font-bold text-lg">AV</span>
            <span className="text-sm text-muted-foreground ml-2">Research-Driven Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
              aria-label={item.ariaLabel}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Links & Actions */}
        <div className="flex items-center gap-2">
          {/* Social Icons - Desktop only */}
          <div className="hidden lg:flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              aria-label="View GitHub profile"
            >
              <a href="https://github.com/aavrar" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              aria-label="Connect on LinkedIn"
            >
              <a href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            asChild
            className="hidden sm:inline-flex"
            aria-label="Send email to start conversation"
          >
            <a href="mailto:aahadvakani@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Let's Talk
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation"
          className="md:hidden bg-background/95 backdrop-blur-md border-b"
          role="menu"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={item.ariaLabel}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <a 
                href="https://github.com/aavrar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View GitHub profile"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href="mailto:aahadvakani@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}