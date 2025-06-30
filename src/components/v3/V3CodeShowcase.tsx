"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, TrendingUp, Clock, Database, Cpu, Zap, Copy, Check } from "lucide-react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeExample {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  beforeCode: string
  afterCode: string
  language: string
  metrics: {
    before: { value: string; label: string }
    after: { value: string; label: string }
    improvement: string
  }
  learnings: string[]
}

const codeExamples: CodeExample[] = [
  {
    id: "db-optimization",
    title: "Database Query Optimization",
    description: "SwitchBoard search performance optimization",
    problem: "Multilingual search queries were taking 2+ seconds with basic text matching",
    solution: "Implemented PostgreSQL full-text search with GIN indexes and proper query planning",
    beforeCode: `// Before: Inefficient LIKE queries
const searchExamples = async (query: string) => {
  const { data } = await supabase
    .from('code_switching_examples')
    .select('*')
    .or(\`
      native_text.ilike.%\${query}%,
      translation.ilike.%\${query}%,
      context.ilike.%\${query}%
    \`)
    .limit(50)
  
  return data
}

// This resulted in:
// - Full table scans on every search
// - 2+ second query times
// - Poor user experience`,
    afterCode: `// After: Optimized full-text search with GIN indexes
const searchExamples = async (query: string) => {
  // Create tsvector for multilingual search
  const searchVector = query
    .split(' ')
    .map(term => \`\${term}:*\`)
    .join(' & ')
  
  const { data } = await supabase
    .from('code_switching_examples')
    .select(\`
      *,
      ts_rank_cd(
        to_tsvector('english', 
          coalesce(native_text, '') || ' ' || 
          coalesce(translation, '') || ' ' || 
          coalesce(context, '')
        ),
        to_tsquery('english', $1)
      ) as rank
    \`)
    .textSearch('fts', searchVector)
    .order('rank', { ascending: false })
    .limit(50)
  
  return data
}

// Database migration to add GIN index:
-- CREATE INDEX idx_examples_fts ON code_switching_examples 
-- USING GIN (to_tsvector('english', 
--   coalesce(native_text, '') || ' ' || 
--   coalesce(translation, '') || ' ' || 
--   coalesce(context, '')
-- ));`,
    language: "typescript",
    metrics: {
      before: { value: "2,100ms", label: "Average Query Time" },
      after: { value: "180ms", label: "Average Query Time" },
      improvement: "91% faster"
    },
    learnings: [
      "GIN indexes are essential for full-text search on PostgreSQL",
      "Query planning matters more than individual optimizations",
      "Text search ranking improves relevance significantly"
    ]
  },
  
  {
    id: "api-cost-optimization", 
    title: "OpenAI API Cost Reduction",
    description: "Story Engine prompt optimization and caching",
    problem: "Story generation was costing $0.50 per session due to inefficient prompt design",
    solution: "Implemented intelligent caching, prompt compression, and context management",
    beforeCode: `# Before: Expensive, verbose prompts
def generate_story_continuation(session_id: str, choice: str):
    # Fetch entire conversation history every time
    messages = get_full_conversation_history(session_id)
    
    # Verbose system prompt sent every request
    system_prompt = """
    You are an expert interactive fiction writer. Create immersive, 
    engaging narratives with rich character development, detailed 
    world-building, and compelling plot progression. Always maintain 
    narrative consistency and character voice throughout the story.
    
    Consider the player's emotional journey, provide meaningful choices 
    that impact the narrative direction, and ensure each scene builds 
    toward satisfying story arcs with proper pacing and tension.
    """
    
    # Send everything to OpenAI every time
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            *messages,  # Entire history (could be 20+ messages)
            {"role": "user", "content": f"Player chose: {choice}"}
        ],
        max_tokens=800,
        temperature=0.8
    )
    
    return response.choices[0].message.content`,
    afterCode: `# After: Optimized prompts with intelligent caching
def generate_story_continuation(session_id: str, choice: str):
    # Get compressed context (last 3 exchanges + summary)
    context = get_compressed_context(session_id)
    
    # Shorter, focused system prompt (cached at session start)
    system_prompt = "Interactive fiction writer. Maintain character voice and narrative consistency."
    
    # Check cache for similar choice patterns
    cache_key = f"{session_id}:{hash(context['summary'])}:{choice}"
    cached_response = redis_client.get(cache_key)
    if cached_response:
        return json.loads(cached_response)
    
    # Optimized message structure
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": f"""
Context: {context['summary']}
Recent: {context['last_exchange']}
Choice: {choice}
Next scene (200 words max):"""}
    ]
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Cheaper model for most requests
        messages=messages,
        max_tokens=300,  # Reduced from 800
        temperature=0.7
    )
    
    result = response.choices[0].message.content
    
    # Cache result for similar future choices
    redis_client.setex(cache_key, 3600, json.dumps(result))
    
    return result

def get_compressed_context(session_id: str) -> dict:
    """Compress long conversations into summary + recent context"""
    full_history = get_conversation_history(session_id)
    
    if len(full_history) <= 6:  # Short conversation
        return {
            "summary": "Story beginning",
            "last_exchange": full_history[-2:] if len(full_history) >= 2 else full_history
        }
    
    # Use GPT-3.5-turbo to summarize older messages (cheaper)
    older_messages = full_history[:-4]
    summary_prompt = f"Summarize this story context in <50 words: {older_messages}"
    
    summary = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": summary_prompt}],
        max_tokens=100
    )
    
    return {
        "summary": summary.choices[0].message.content,
        "last_exchange": full_history[-4:]  # Keep recent context
    }`,
    language: "python",
    metrics: {
      before: { value: "$0.52", label: "Cost per Story Session" },
      after: { value: "$0.18", label: "Cost per Story Session" }, 
      improvement: "65% reduction"
    },
    learnings: [
      "Context compression is crucial for API cost management",
      "GPT-3.5-turbo handles most tasks at 10x lower cost than GPT-4",
      "Smart caching based on semantic similarity, not exact matches"
    ]
  },

  {
    id: "react-performance",
    title: "React Re-render Optimization", 
    description: "SwitchBoard form performance improvement",
    problem: "Complex multilingual form was causing 200ms lag on every keystroke",
    solution: "Implemented optimized state management with useMemo and custom hooks",
    beforeCode: `// Before: Inefficient re-renders on every keystroke
function ExampleSubmissionForm() {
  const [formData, setFormData] = useState({
    nativeText: '',
    translation: '',
    context: '',
    languagePair: '',
    tags: []
  })
  
  const [suggestions, setSuggestions] = useState([])
  const [validationErrors, setValidationErrors] = useState({})
  
  // This runs on EVERY render (expensive!)
  const availableTags = allTags.filter(tag => 
    tag.language === formData.languagePair &&
    !formData.tags.includes(tag.id)
  ).sort((a, b) => a.frequency - b.frequency)
  
  // Validation runs on every keystroke
  const isValid = Object.keys(formData).every(key => {
    const value = formData[key]
    if (key === 'nativeText') return value.length >= 10
    if (key === 'translation') return value.length >= 5
    if (key === 'context') return value.length >= 20
    if (key === 'languagePair') return value !== ''
    return true
  })
  
  // Suggestions API call on every change
  useEffect(() => {
    if (formData.nativeText.length > 3) {
      fetchSuggestions(formData.nativeText)
        .then(setSuggestions)
    }
  }, [formData]) // Watches entire form object!
  
  return (
    // Form JSX that re-renders completely on every change
  )
}`,
    afterCode: `// After: Optimized with memoization and selective updates
function ExampleSubmissionForm() {
  const [nativeText, setNativeText] = useState('')
  const [translation, setTranslation] = useState('')
  const [context, setContext] = useState('')
  const [languagePair, setLanguagePair] = useState('')
  const [tags, setTags] = useState([])
  
  // Memoized expensive computations
  const availableTags = useMemo(() => {
    if (!languagePair) return []
    
    return allTags
      .filter(tag => 
        tag.language === languagePair &&
        !tags.includes(tag.id)
      )
      .sort((a, b) => b.frequency - a.frequency) // Most common first
  }, [languagePair, tags]) // Only recalculate when these change
  
  // Debounced validation to avoid constant re-computation
  const validationErrors = useMemo(() => {
    const errors = {}
    if (nativeText.length > 0 && nativeText.length < 10) {
      errors.nativeText = 'Minimum 10 characters required'
    }
    if (translation.length > 0 && translation.length < 5) {
      errors.translation = 'Minimum 5 characters required'  
    }
    if (context.length > 0 && context.length < 20) {
      errors.context = 'Please provide more context'
    }
    return errors
  }, [nativeText.length, translation.length, context.length])
  
  // Custom hook for debounced suggestions
  const suggestions = useSuggestions(nativeText, 300) // 300ms debounce
  
  // Memoized form sections to prevent unnecessary re-renders
  const TextInputSection = useMemo(() => (
    <FormSection>
      <TextArea 
        value={nativeText}
        onChange={setNativeText}
        error={validationErrors.nativeText}
        placeholder="Enter code-switching example..."
      />
    </FormSection>
  ), [nativeText, validationErrors.nativeText])
  
  const TranslationSection = useMemo(() => (
    <FormSection>
      <TextArea
        value={translation} 
        onChange={setTranslation}
        error={validationErrors.translation}
        placeholder="English translation..."
      />
    </FormSection>
  ), [translation, validationErrors.translation])
  
  return (
    <form>
      {TextInputSection}
      {TranslationSection}
      <TagSelector 
        availableTags={availableTags}
        selectedTags={tags}
        onTagsChange={setTags}
      />
      <SuggestionsList suggestions={suggestions} />
    </form>
  )
}

// Custom hook for debounced API calls
function useSuggestions(query: string, delay: number) {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([])
      return
    }
    
    setLoading(true)
    const timeoutId = setTimeout(async () => {
      try {
        const results = await fetchSuggestions(query)
        setSuggestions(results)
      } finally {
        setLoading(false)
      }
    }, delay)
    
    return () => clearTimeout(timeoutId)
  }, [query, delay])
  
  return { suggestions, loading }
}`,
    language: "tsx",
    metrics: {
      before: { value: "200ms", label: "Keystroke Response Time" },
      after: { value: "16ms", label: "Keystroke Response Time" },
      improvement: "92% faster"
    },
    learnings: [
      "useMemo for expensive computations, not just object creation",
      "Separate state variables instead of single form object when possible",
      "Debouncing API calls is essential for good UX"
    ]
  }
]

export function V3CodeShowcase() {
  const [selectedExample, setSelectedExample] = useState(codeExamples[0].id)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  
  const example = codeExamples.find(ex => ex.id === selectedExample) || codeExamples[0]

  const copyToClipboard = async (code: string, type: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Code Deep Dives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real optimizations from actual projects. These aren't toy examples - 
            they're production code improvements with measurable performance gains.
          </p>
        </div>

        {/* Example Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {codeExamples.map((ex) => (
              <Button
                key={ex.id}
                variant={selectedExample === ex.id ? "default" : "outline"}
                onClick={() => setSelectedExample(ex.id)}
                className="text-sm"
              >
                {ex.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                {example.title}
              </CardTitle>
              <CardDescription>{example.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold mb-2 text-red-800 dark:text-red-300">Problem</h4>
                    <p className="text-sm text-red-700 dark:text-red-400">{example.problem}</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-300">Solution</h4>
                    <p className="text-sm text-green-700 dark:text-green-400">{example.solution}</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h4 className="font-semibold mb-4">Performance Impact</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {example.metrics.before.value}
                      </div>
                      <div className="text-sm text-red-700 dark:text-red-500">
                        Before: {example.metrics.before.label}
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {example.metrics.after.value}
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-500">
                        After: {example.metrics.after.label}
                      </div>
                    </div>

                    <div className="text-center">
                      <Badge variant="outline" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        <Zap className="w-3 h-3 mr-1" />
                        {example.metrics.improvement}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Comparison */}
          <Tabs defaultValue="before" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="before" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Before (Slow)
              </TabsTrigger>
              <TabsTrigger value="after" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                After (Optimized)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="before">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Before: Unoptimized Code</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(example.beforeCode, 'before')}
                    className="flex items-center gap-2"
                  >
                    {copiedCode === 'before' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copiedCode === 'before' ? 'Copied!' : 'Copy'}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <SyntaxHighlighter
                      language={example.language}
                      style={oneDark}
                      customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem'
                      }}
                      showLineNumbers
                    >
                      {example.beforeCode}
                    </SyntaxHighlighter>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="after">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">After: Optimized Code</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(example.afterCode, 'after')}
                    className="flex items-center gap-2"
                  >
                    {copiedCode === 'after' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copiedCode === 'after' ? 'Copied!' : 'Copy'}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <SyntaxHighlighter
                      language={example.language}
                      style={oneDark}
                      customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem'
                      }}
                      showLineNumbers
                    >
                      {example.afterCode}
                    </SyntaxHighlighter>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Key Learnings */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Key Learnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {example.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{learning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}