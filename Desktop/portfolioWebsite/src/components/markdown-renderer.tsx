"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"

interface MarkdownRendererProps {
  content: string
  title: string
  date: string
  readTime: string
  tags: string[]
}

export function MarkdownRenderer({ content, title, date, readTime, tags }: MarkdownRendererProps) {
  const [renderedContent, setRenderedContent] = useState("")

  useEffect(() => {
    // Simple markdown parser for basic formatting
    const parseMarkdown = (md: string) => {
      return (
        md
          // Headers
          .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
          .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
          .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-12 mb-8">$1</h1>')

          // Code blocks
          .replace(
            /```([\s\S]*?)```/gim,
            '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm"><code>$1</code></pre>',
          )

          // Inline code
          .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')

          // Bold
          .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')

          // Italic
          .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')

          // Links
          .replace(
            /\[([^\]]+)\]$$([^)]+)$$/gim,
            '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
          )

          // Lists
          .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">• $1</li>')
          .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">• $1</li>')

          // Paragraphs
          .replace(/\n\n/gim, '</p><p class="mb-4">')

          // Line breaks
          .replace(/\n/gim, "<br>")
      )
    }

    setRenderedContent(`<p class="mb-4">${parseMarkdown(content)}</p>`)
  }, [content])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this article: ${title}`,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/#writing">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <Button variant="outline" onClick={handleShare} className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <main className="container py-12">
        <article className="mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">{title}</h1>

            <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} read</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article Body */}
          <Card>
            <CardContent className="p-8">
              <div
                className="prose prose-lg max-w-none leading-relaxed text-foreground"
                dangerouslySetInnerHTML={{ __html: renderedContent }}
              />
            </CardContent>
          </Card>

          {/* Author Bio */}
          <Card className="mt-12">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  AV
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Aahad Vakani</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experienced Full-Stack Developer specializing in React, Next.js, and modern JavaScript frameworks.
                Passionate about sharing knowledge and helping developers build better applications.
              </p>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/#about">View Portfolio</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="mailto:aahad@example.com">Contact Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  )
}
