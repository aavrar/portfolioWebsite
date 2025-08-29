import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getAllPosts } from '@/lib/blog'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (credentials?.username === process.env.ADMIN_USERNAME && credentials?.password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "Admin", email: "admin@example.com" }
        } else {
          return null
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const posts = getAllPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, content, excerpt, tags, slug } = await request.json()

    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Ensure content/blog directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }

    // Check if file already exists
    const filePath = path.join(postsDirectory, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Article with this slug already exists' }, { status: 409 })
    }

    // Create frontmatter
    const frontmatter = {
      title,
      date: new Date().toISOString().split('T')[0],
      tags: tags || [],
      excerpt: excerpt || ''
    }

    // Create markdown content with frontmatter
    const markdownContent = matter.stringify(content, frontmatter)

    // Write file
    fs.writeFileSync(filePath, markdownContent, 'utf8')

    return NextResponse.json({ 
      message: 'Article created successfully',
      slug 
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}