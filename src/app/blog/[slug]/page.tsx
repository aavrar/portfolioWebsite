import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Aahad Vakani`,
    description: post.excerpt || `Read ${post.title} by Aahad Vakani`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} by Aahad Vakani`,
      type: "article",
      publishedTime: post.date,
      authors: ["Aahad Vakani"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} by Aahad Vakani`,
    },
  }
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <MarkdownRenderer
      content={post.content}
      title={post.title}
      date={post.date}
      readTime={post.readTime}
      tags={post.tags}
    />
  )
}
