"use client"

import { useEffect, useState } from "react"
import { Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CurrentlyWorkingOnCard() {
  const [currentWork, setCurrentWork] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/aavrar/17cc99de8906348c7f4eefa40f7f0b14/raw/3ec84513383e2202baa66c94e6bf67902dd719a6/currently-working-on.json")
      .then((res) => res.json())
      .then((data) => setCurrentWork(data.currently))
      .catch(() => setCurrentWork("Unable to fetch update."))
  }, [])

  return (
    <Card className="text-center hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <Rocket className="h-8 w-8 mx-auto mb-2 text-primary" />
        <h3 className="font-semibold">Currently Working On</h3>
        <p className="text-sm text-muted-foreground">
          {currentWork ?? "Loading..."}
        </p>
        <p className="text-xs text-muted-foreground">Updated remotely via GitHub Gist</p>
      </CardContent>
    </Card>
  )
}
