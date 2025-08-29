'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Plus, Save, Eye } from 'lucide-react'
import { toast } from 'sonner'

interface ArticleEditorProps {
  slug?: string
  onSave?: () => void
  onCancel?: () => void
}

interface ArticleData {
  title: string
  content: string
  excerpt: string
  tags: string[]
  slug: string
}

export default function ArticleEditor({ slug, onSave, onCancel }: ArticleEditorProps) {
  const [article, setArticle] = useState<ArticleData>({
    title: '',
    content: '',
    excerpt: '',
    tags: [],
    slug: ''
  })
  const [newTag, setNewTag] = useState('')
  const [loading, setLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(!!slug)
  const [previewMode, setPreviewMode] = useState(false)

  useEffect(() => {
    if (slug) {
      loadArticle()
    }
  }, [slug])

  const loadArticle = async () => {
    if (!slug) return
    
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/articles/${slug}`)
      
      if (!response.ok) {
        throw new Error('Failed to load article')
      }
      
      const data = await response.json()
      setArticle({
        title: data.post.title,
        content: data.post.content,
        excerpt: data.post.excerpt || '',
        tags: data.post.tags || [],
        slug: data.post.slug
      })
    } catch (error) {
      console.error('Error loading article:', error)
      toast.error('Failed to load article')
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim()
  }

  const handleTitleChange = (value: string) => {
    setArticle(prev => ({
      ...prev,
      title: value,
      slug: !isEditing ? generateSlug(value) : prev.slug
    }))
  }

  const addTag = () => {
    if (newTag.trim() && !article.tags.includes(newTag.trim())) {
      setArticle(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setArticle(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleSave = async () => {
    if (!article.title.trim() || !article.content.trim()) {
      toast.error('Title and content are required')
      return
    }

    try {
      setLoading(true)
      
      const url = isEditing ? `/api/admin/articles/${slug}` : '/api/admin/articles'
      const method = isEditing ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...article,
          newSlug: isEditing ? article.slug : undefined
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to save article')
      }

      toast.success(isEditing ? 'Article updated successfully!' : 'Article created successfully!')
      onSave?.()
    } catch (error: any) {
      console.error('Error saving article:', error)
      toast.error(error.message || 'Failed to save article')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!slug || !confirm('Are you sure you want to delete this article?')) {
      return
    }

    try {
      setLoading(true)
      
      const response = await fetch(`/api/admin/articles/${slug}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete article')
      }

      toast.success('Article deleted successfully!')
      onSave?.()
    } catch (error) {
      console.error('Error deleting article:', error)
      toast.error('Failed to delete article')
    } finally {
      setLoading(false)
    }
  }

  if (loading && isEditing) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {isEditing ? 'Edit Article' : 'New Article'}
          </h2>
          <p className="text-muted-foreground">
            {isEditing ? 'Update your article content' : 'Create a new blog post'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setPreviewMode(!previewMode)}
          >
            <Eye className="h-4 w-4 mr-2" />
            {previewMode ? 'Edit' : 'Preview'}
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Saving...' : 'Save Article'}
          </Button>
        </div>
      </div>

      {previewMode ? (
        <Card>
          <CardHeader>
            <CardTitle>{article.title || 'Untitled Article'}</CardTitle>
            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground italic mb-4">
                {article.excerpt}
              </p>
              <div className="whitespace-pre-wrap">
                {article.content}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Article Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={article.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter article title"
                    className="text-lg font-medium"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="content">Content (Markdown supported)</Label>
                  <Textarea
                    id="content"
                    value={article.content}
                    onChange={(e) => setArticle(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your article content here..."
                    className="min-h-[400px] font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Article Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={article.slug}
                    onChange={(e) => setArticle(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="article-slug"
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    This will be used in the URL: /blog/{article.slug}
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={article.excerpt}
                    onChange={(e) => setArticle(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description for preview..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                    >
                      {tag}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {isEditing && (
              <Card>
                <CardHeader>
                  <CardTitle>Danger Zone</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="destructive" 
                    onClick={handleDelete}
                    disabled={loading}
                    className="w-full"
                  >
                    Delete Article
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}