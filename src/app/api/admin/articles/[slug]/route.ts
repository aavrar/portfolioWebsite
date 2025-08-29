import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
const authOptions = {
  providers: [
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        if (credentials?.username === process.env.ADMIN_USERNAME && credentials?.password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "Admin", email: "admin@example.com" }
        }
        return null
      }
    }
  ],
  secret: process.env.NEXTAUTH_SECRET,
}
import { getPostBySlug } from '@/lib/blog'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const post = getPostBySlug(params.slug)
    
    if (!post) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error fetching article:', error)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, content, excerpt, tags, newSlug } = await request.json()

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const oldFilePath = path.join(postsDirectory, `${params.slug}.md`)
    
    if (!fs.existsSync(oldFilePath)) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    // Read existing file to preserve date if not provided
    const existingContent = fs.readFileSync(oldFilePath, 'utf8')
    const existingMatter = matter(existingContent)
    
    // Create updated frontmatter
    const frontmatter = {
      title,
      date: existingMatter.data.date || new Date().toISOString().split('T')[0],
      tags: tags || [],
      excerpt: excerpt || ''
    }

    // Create markdown content with frontmatter
    const markdownContent = matter.stringify(content, frontmatter)

    // Handle slug change
    const finalSlug = newSlug || params.slug
    const newFilePath = path.join(postsDirectory, `${finalSlug}.md`)

    // If slug changed, delete old file
    if (newSlug && newSlug !== params.slug) {
      if (fs.existsSync(newFilePath)) {
        return NextResponse.json({ error: 'Article with new slug already exists' }, { status: 409 })
      }
      fs.unlinkSync(oldFilePath)
    }

    // Write updated content
    fs.writeFileSync(newFilePath, markdownContent, 'utf8')

    return NextResponse.json({ 
      message: 'Article updated successfully',
      slug: finalSlug 
    })
  } catch (error) {
    console.error('Error updating article:', error)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const filePath = path.join(postsDirectory, `${params.slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    fs.unlinkSync(filePath)

    return NextResponse.json({ message: 'Article deleted successfully' })
  } catch (error) {
    console.error('Error deleting article:', error)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}