import { getAllPosts, BlogPost } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
    <Link href={`/blog/${post.slug}`}>
      <CardHeader>
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
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Link>
  </Card>
)

export function BlogPostsGrid() {
  const posts = getAllPosts()

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <p className="text-muted-foreground">
          No blog posts found. Add your markdown files to the <code>content/blog</code> directory.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
      {posts.slice(0, 6).map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
