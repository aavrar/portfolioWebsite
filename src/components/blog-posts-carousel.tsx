import { getAllPosts, BlogPost } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface BlogPostCardProps {
  post: BlogPost
  featured?: boolean
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, featured = false }) => (
  <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer h-full ${featured ? 'border-primary/50 bg-primary/5' : ''}`}>
    <Link href={`/blog/${post.slug}`}>
      <CardHeader>
        {featured && (
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="default" className="text-xs">
              Latest
            </Badge>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <Clock className="h-4 w-4" />
          <span>{post.readTime} read</span>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 text-lg">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags && post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>Read article</span>
          <ExternalLink className="h-3 w-3" />
        </div>
      </CardContent>
    </Link>
  </Card>
)

export function BlogPostsCarousel() {
  const posts = getAllPosts() // Already sorted by date (newest first)

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <p className="text-muted-foreground">
          No blog posts found. Add your markdown files to the <code>content/blog</code> directory.
        </p>
      </div>
    )
  }

  // Single post - show as featured card
  if (posts.length === 1) {
    return (
      <div className="mx-auto max-w-md py-12">
        <BlogPostCard post={posts[0]} featured={true} />
      </div>
    )
  }

  return (
    <div className="py-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {posts.map((post, index) => (
            <CarouselItem key={post.slug} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <BlogPostCard 
                post={post} 
                featured={index === 0} // First post (newest) is featured
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation buttons */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <CarouselPrevious className="static translate-y-0" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {posts.length} article{posts.length !== 1 ? 's' : ''}
            </span>
          </div>
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  )
}