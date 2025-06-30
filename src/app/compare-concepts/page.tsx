import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Terminal, Eye, Palette, Zap, Smartphone } from "lucide-react"

export default function CompareConcepts() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Portfolio Design Concepts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience two unique approaches to portfolio design. Choose the one that resonates with your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Literary Fusion Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Literary-Code Fusion</CardTitle>
              </div>
              <CardDescription className="text-base">
                Blend CS and English Writing into a cohesive visual language that treats code as literature
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Interactive Terminal</Badge>
                  <Badge variant="secondary">Text Compilation</Badge>
                  <Badge variant="secondary">Manuscript Design</Badge>
                  <Badge variant="secondary">Parchment Palette</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Perfect For:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Highlighting your dual CS/Writing background</li>
                  <li>• Standing out from typical dev portfolios</li>
                  <li>• Creative, literary-minded employers</li>
                  <li>• Storytelling-focused roles</li>
                </ul>
              </div>

              <Button asChild className="w-full group-hover:bg-primary/90">
                <Link href="/literary-fusion">
                  Experience Literary Fusion <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Narrative Timeline Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Narrative Timeline</CardTitle>
              </div>
              <CardDescription className="text-base">
                Structure your portfolio like an interactive story with chapter-based navigation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Chapter Navigation</Badge>
                  <Badge variant="secondary">Story Progress</Badge>
                  <Badge variant="secondary">Character Growth</Badge>
                  <Badge variant="secondary">Plot Reveals</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Perfect For:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Showcasing professional journey</li>
                  <li>• Engaging storytelling experience</li>
                  <li>• Gaming/Entertainment industry</li>
                  <li>• Product management roles</li>
                </ul>
              </div>

              <Button asChild className="w-full group-hover:bg-primary/90">
                <Link href="/narrative-timeline">
                  Experience Narrative Timeline <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Matrix */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Quick Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Aspect</th>
                    <th className="text-left p-2">Literary Fusion</th>
                    <th className="text-left p-2">Narrative Timeline</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-2 font-medium">Visual Style</td>
                    <td className="p-2">Manuscript/Academic</td>
                    <td className="p-2">Modern/Cinematic</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Navigation</td>
                    <td className="p-2">Traditional scrolling</td>
                    <td className="p-2">Chapter-based</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Uniqueness</td>
                    <td className="p-2">Very High</td>
                    <td className="p-2">High</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Technical Complexity</td>
                    <td className="p-2">Medium</td>
                    <td className="p-2">Medium-High</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Target Audience</td>
                    <td className="p-2">Creative/Literary</td>
                    <td className="p-2">Product/Gaming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Technical Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Design System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Both concepts include comprehensive design systems with custom color palettes, typography, and component libraries.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Animations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Smooth micro-interactions, page transitions, and loading states that enhance user experience without being distracting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Responsive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fully responsive designs that adapt beautifully to desktop, tablet, and mobile devices with optimized interactions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/">Back to Current Portfolio</Link>
          </Button>
          <Button asChild>
            <Link href="/literary-fusion">Start with Literary Fusion</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}