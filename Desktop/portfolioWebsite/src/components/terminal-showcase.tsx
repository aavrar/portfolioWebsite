"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const terminalCommands = [
  { type: "command", text: "$ git status", delay: 0 },
  { type: "output", text: "On branch main", delay: 800 },
  { type: "output", text: "Your branch is up to date with 'origin/main'", delay: 1000 },
  { type: "output", text: "", delay: 1200 },
  { type: "command", text: "$ npm run build", delay: 2000 },
  { type: "output", text: "✓ Creating an optimized production build", delay: 2800 },
  { type: "output", text: "✓ Compiled successfully", delay: 3200 },
  { type: "output", text: "✓ Linting and checking validity of types", delay: 3600 },
  { type: "output", text: "✓ Collecting page data", delay: 4000 },
  { type: "output", text: "✓ Generating static pages (8/8)", delay: 4400 },
  { type: "output", text: "✓ Finalizing page optimization", delay: 4800 },
  { type: "output", text: "", delay: 5000 },
  { type: "success", text: "Build completed successfully! 🚀", delay: 5200 },
]

const codeSnippets = [
  {
    filename: "hooks/useAuth.ts",
    code: `export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
  
  return { user, loading, signIn, signOut }
}`,
  },
  {
    filename: "api/users/route.ts",
    code: `export async function GET(request: Request) {
  try {
    const users = await db.user.findMany({
      select: { id: true, name: true, email: true }
    })
    
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}`,
  },
]

export function TerminalShowcase() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [displayedCommands, setDisplayedCommands] = useState<typeof terminalCommands>([])
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [isTerminalView, setIsTerminalView] = useState(true)

  useEffect(() => {
    if (currentCommandIndex < terminalCommands.length) {
      const command = terminalCommands[currentCommandIndex]
      const timer = setTimeout(() => {
        setDisplayedCommands((prev) => [...prev, command])
        setCurrentCommandIndex((prev) => prev + 1)
      }, command.delay)

      return () => clearTimeout(timer)
    } else {
      // Switch to code view after terminal commands complete
      const switchTimer = setTimeout(() => {
        setIsTerminalView(false)
      }, 6000)
      return () => clearTimeout(switchTimer)
    }
  }, [currentCommandIndex])

  useEffect(() => {
    if (!isTerminalView) {
      const codeTimer = setInterval(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length)
      }, 4000)
      return () => clearInterval(codeTimer)
    }
  }, [isTerminalView])

  useEffect(() => {
    // Reset animation every 20 seconds
    const resetTimer = setInterval(() => {
      setCurrentCommandIndex(0)
      setDisplayedCommands([])
      setIsTerminalView(true)
      setCurrentCodeIndex(0)
    }, 20000)

    return () => clearInterval(resetTimer)
  }, [])

  return (
    <Card className="bg-gray-900 text-green-400 font-mono text-sm overflow-hidden shadow-2xl border-gray-700">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs ml-4">
          {isTerminalView ? "terminal — zsh — 80×24" : `${codeSnippets[currentCodeIndex].filename}`}
        </div>
      </div>

      <div className="p-4 h-80 overflow-hidden">
        {isTerminalView ? (
          <div className="space-y-1">
            {displayedCommands.map((cmd, index) => (
              <div key={index} className="flex">
                {cmd.type === "command" && (
                  <div className="flex">
                    <span className="text-blue-400">aahad@macbook</span>
                    <span className="text-white">:</span>
                    <span className="text-purple-400">~/projects</span>
                    <span className="text-white mr-2">$</span>
                    <span className="text-green-400">{cmd.text.replace("$ ", "")}</span>
                    <span className="animate-pulse ml-1">▊</span>
                  </div>
                )}
                {cmd.type === "output" && <div className="text-gray-300 ml-4">{cmd.text}</div>}
                {cmd.type === "success" && <div className="text-green-400 ml-4 font-semibold">{cmd.text}</div>}
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full">
            <div className="text-gray-400 text-xs mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {codeSnippets[currentCodeIndex].filename}
            </div>
            <pre className="text-sm leading-relaxed">
              <code className="text-gray-300">
                {codeSnippets[currentCodeIndex].code.split("\n").map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">{index + 1}</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(
                            /export|const|async|function|return|try|catch/g,
                            '<span class="text-purple-400">$&</span>',
                          )
                          .replace(/useState|useEffect|NextResponse/g, '<span class="text-blue-400">$&</span>')
                          .replace(/'[^']*'/g, '<span class="text-green-300">$&</span>')
                          .replace(/\/\/.*$/g, '<span class="text-gray-500">$&</span>')
                          .replace(/\{|\}|\[|\]|$$|$$/g, '<span class="text-yellow-400">$&</span>'),
                      }}
                    />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        )}
      </div>

      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span>⚡ Next.js</span>
            <span>📦 TypeScript</span>
            <span>🔥 Hot Reload</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
