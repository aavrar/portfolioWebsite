'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sidebar } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  Home,
  Plus,
  Eye,
  Edit,
  Calendar,
  Tag,
  Trash2
} from "lucide-react"
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'
import ArticleEditor from '@/components/admin/ArticleEditor'
import { toast } from 'sonner'

type AdminView = 'dashboard' | 'articles' | 'settings' | 'new-article' | 'edit-article'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [currentView, setCurrentView] = useState<AdminView>('dashboard')
  const [articles, setArticles] = useState<BlogPost[]>([])
  const [editingSlug, setEditingSlug] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      loadArticles()
    }
  }, [status])

  const loadArticles = async () => {
    try {
      const response = await fetch('/api/admin/articles')
      if (response.ok) {
        const data = await response.json()
        setArticles(data.posts)
      } else {
        console.error('Failed to fetch from API')
        setArticles([])
      }
    } catch (error) {
      console.error('Failed to load articles:', error)
      setArticles([])
    }
  }

  const handleDeleteArticle = async (slug: string) => {
    try {
      const response = await fetch(`/api/admin/articles/${slug}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        toast.success('Article deleted successfully!')
        loadArticles() // Refresh the list
      } else {
        throw new Error('Failed to delete article')
      }
    } catch (error) {
      console.error('Error deleting article:', error)
      toast.error('Failed to delete article')
    }
  }

  const handleEditArticle = (slug: string) => {
    setEditingSlug(slug)
    setCurrentView('edit-article')
  }

  const handleNewArticle = () => {
    setEditingSlug(null)
    setCurrentView('new-article')
  }

  const handleEditorSave = () => {
    loadArticles()
    setCurrentView('articles')
    setEditingSlug(null)
  }

  const handleEditorCancel = () => {
    setCurrentView('articles')
    setEditingSlug(null)
  }

  const sidebarItems = [
    {
      id: 'dashboard' as AdminView,
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'articles' as AdminView,
      label: 'Articles',
      icon: FileText,
    },
    {
      id: 'settings' as AdminView,
      label: 'Settings',
      icon: Settings,
    },
  ]

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (status === 'authenticated') {
    return (
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <div className="w-64 bg-muted/40 border-r">
          <div className="flex h-full max-h-screen flex-col gap-2">
            {/* Header */}
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <div className="flex items-center gap-2 font-semibold">
                <LayoutDashboard className="h-6 w-6" />
                <span>Admin Dashboard</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                        currentView === item.id
                          ? 'bg-muted text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Footer Actions */}
            <div className="mt-auto p-4">
              <Button
                variant="outline"
                className="w-full justify-start mb-2"
                asChild
              >
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            {currentView === 'dashboard' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                  <p className="text-muted-foreground">
                    Welcome back! Here's an overview of your content.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Articles
                      </CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{articles.length}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Published
                      </CardTitle>
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{articles.length}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Latest Article
                      </CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm font-medium">
                        {articles[0]?.title || 'No articles'}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {articles[0]?.date ? new Date(articles[0].date).toLocaleDateString() : ''}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Quick Action
                      </CardTitle>
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full" onClick={handleNewArticle}>
                        New Article
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Articles */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Articles</CardTitle>
                    <CardDescription>
                      Your most recently created articles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {articles.slice(0, 5).map((article) => (
                        <div key={article.slug} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {article.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(article.date).toLocaleDateString()} • {article.readTime}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {article.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentView === 'articles' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
                    <p className="text-muted-foreground">
                      Manage your blog posts and articles
                    </p>
                  </div>
                  <Button onClick={handleNewArticle}>
                    <Plus className="h-4 w-4 mr-2" />
                    New Article
                  </Button>
                </div>

                {/* Articles Table */}
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {articles.map((article) => (
                        <div key={article.slug} className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">{article.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{new Date(article.date).toLocaleDateString()}</span>
                                <span>{article.readTime}</span>
                                <div className="flex gap-1">
                                  {article.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleEditArticle(article.slug)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/blog/${article.slug}`} target="_blank">
                                  <Eye className="h-4 w-4" />
                                </Link>
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Article</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "{article.title}"? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction 
                                      onClick={() => handleDeleteArticle(article.slug)}
                                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentView === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                  <p className="text-muted-foreground">
                    Manage your admin preferences
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Admin Email</label>
                      <p className="text-sm text-muted-foreground">{session.user?.email}</p>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Admin Name</label>
                      <p className="text-sm text-muted-foreground">{session.user?.name}</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Button variant="outline" onClick={() => signOut({ callbackUrl: '/' })}>
                        Sign Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {(currentView === 'new-article' || currentView === 'edit-article') && (
              <ArticleEditor
                slug={editingSlug || undefined}
                onSave={handleEditorSave}
                onCancel={handleEditorCancel}
              />
            )}
          </div>
        </div>
      </div>
    )
  }

  return null
}
