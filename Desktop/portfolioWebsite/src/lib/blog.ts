import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  content: string
  excerpt?: string
}

export function getAllPosts(): BlogPost[] {
  // Create content/blog directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = matterResult.content.split(/\s+/).length
      const readTime = Math.ceil(wordCount / 200)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || new Date().toISOString(),
        readTime: matterResult.data.estimatedReadingTime ? `${matterResult.data.estimatedReadingTime} min` : `${readTime} min`,
        tags: matterResult.data.tags || [],
        content: matterResult.content,
        excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 200) + "...",
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    const wordCount = matterResult.content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      readTime: matterResult.data.estimatedReadingTime ? `${matterResult.data.estimatedReadingTime} min` : `${readTime} min`,
      tags: matterResult.data.tags || [],
      content: matterResult.content,
      excerpt: matterResult.data.excerpt,
    }
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.filter((fileName) => fileName.endsWith(".md")).map((fileName) => fileName.replace(/\.md$/, ""))
}
