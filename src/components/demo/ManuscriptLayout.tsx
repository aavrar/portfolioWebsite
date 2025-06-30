"use client"

import { ReactNode } from "react"

interface ManuscriptLayoutProps {
  children: ReactNode
}

export function ManuscriptLayout({ children }: ManuscriptLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      {/* Manuscript Paper Texture */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(27, 54, 93, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            linear-gradient(90deg, transparent 0%, rgba(27, 54, 93, 0.03) 50%, transparent 100%)
          `
        }}
      />
      
      {/* Main Manuscript Container */}
      <div className="relative max-w-5xl mx-auto px-8 py-12">
        {/* Manuscript Margins */}
        <div className="relative">
          {/* Left Margin Line */}
          <div 
            className="absolute left-4 top-0 bottom-0 w-px opacity-30"
            style={{ backgroundColor: 'var(--gold)' }}
          />
          
          {/* Right Annotation Area */}
          <div 
            className="absolute -right-8 top-0 bottom-0 w-32 opacity-20 border-l-2 border-dashed"
            style={{ borderColor: 'var(--ink)' }}
          >
            {/* Code Annotations */}
            <div className="p-2 text-xs text-code-poetry" style={{ color: 'var(--ink)' }}>
              <div className="mb-4">// portfolio.init()</div>
              <div className="mb-4">/* skills.compile() */</div>
              <div className="mb-4">// projects.run()</div>
              <div className="mb-4">/* experience.log() */</div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="pl-12 pr-4">
            {children}
          </div>
        </div>
      </div>
      
      {/* Subtle Paper Shadow at Bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-8 pointer-events-none"
        style={{
          background: `linear-gradient(to top, rgba(27, 54, 93, 0.1) 0%, transparent 100%)`
        }}
      />
    </div>
  )
}