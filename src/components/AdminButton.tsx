'use client'

import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'
import Link from 'next/link'

export function AdminButton() {
  const { data: session } = useSession()
  
  if (!session) return null
  
  return (
    <Button variant="outline" asChild>
      <Link href="/admin">
        <Shield className="h-4 w-4 mr-2" />
        Admin
      </Link>
    </Button>
  )
}