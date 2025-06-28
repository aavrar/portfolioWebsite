import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AnalyticsWrapper } from './providers'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aahad Vakani - Portfolio",
  description:
    "Experienced Full-Stack Developer specializing in React, Next.js, and modern JavaScript frameworks. 5+ years building scalable web applications for enterprise clients.",
  keywords:
    "Full-Stack Developer, React Developer, Next.js, TypeScript, JavaScript, Web Developer, Frontend Developer, Backend Developer, Software Engineer",
  authors: [{ name: "Aahad Vakani" }],
  creator: "Aahad Vakani",
  publisher: "Aahad Vakani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aahadv.dev",
    title: "Aahad Vakani - Portfolio",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, and modern JavaScript frameworks.",
    siteName: "Aahad Vakani Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aahad Vakani - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aahad Vakani - Portfolio",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, and modern JavaScript frameworks.",
    creator: "@aahadv",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aahad Vakani",
              jobTitle: "Full-Stack Developer",
              description:
                "Experienced Full-Stack Developer specializing in React, Next.js, and modern JavaScript frameworks.",
              url: "https://aahadv.dev",
              sameAs: ["https://linkedin.com/in/aahadv", "https://github.com/aahadv", "https://twitter.com/aahadv"],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full-Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
