import React from "react"
import { ExternalLink, Key, Lightbulb, Link as LinkIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export interface SiteCardProps {
  name: string
  url: string
  category: "Federal" | "State" | "Local" | "Education" | "AI / Tech" | "Real Estate"
  description: string
  searchTips: string[]
  hasCredentialsStored?: boolean
}

export function SiteCard({
  name,
  url,
  category,
  description,
  searchTips,
  hasCredentialsStored = false
}: SiteCardProps) {
  
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case "Federal": return "bg-blue-500/10 text-blue-500"
      case "State": return "bg-green-500/10 text-green-500"
      case "Local": return "bg-yellow-500/10 text-yellow-500"
      case "Education": return "bg-purple-500/10 text-purple-500"
      case "AI / Tech": return "bg-indigo-500/10 text-indigo-500"
      case "Real Estate": return "bg-orange-500/10 text-orange-500"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <Badge variant="outline" className={`mb-2 ${getCategoryColor(category)}`}>
              {category}
            </Badge>
            <CardTitle className="text-lg leading-tight">{name}</CardTitle>
            <a 
              href={url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center text-xs text-muted-foreground hover:text-primary mt-1"
            >
              <LinkIcon className="h-3 w-3 mr-1" />
              {url.replace(/^https?:\/\//, '')}
            </a>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="bg-muted/50 rounded-md p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Lightbulb className="h-4 w-4 text-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">Search Tips</span>
          </div>
          <ul className="space-y-1">
            {searchTips.map((tip, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                <span className="mr-1.5 mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t flex justify-between items-center bg-card/50">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={hasCredentialsStored ? "outline" : "secondary"} size="sm" className="w-full mr-2">
              <Key className="h-4 w-4 mr-2" />
              {hasCredentialsStored ? "View Login" : "Add Login"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Credentials for {name}</DialogTitle>
              <DialogDescription>
                Securely store or access your login details for this portal.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right text-sm font-medium">Username</label>
                <Input id="username" value={hasCredentialsStored ? "admin@company.com" : ""} className="col-span-3" readOnly={hasCredentialsStored} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="password" className="text-right text-sm font-medium">Password</label>
                <Input id="password" type="password" value={hasCredentialsStored ? "********" : ""} className="col-span-3" readOnly={hasCredentialsStored} />
              </div>
            </div>
            <DialogFooter>
              {hasCredentialsStored ? (
                <Button variant="outline">Edit Credentials</Button>
              ) : (
                <Button type="submit">Save Credentials</Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button size="sm" asChild>
          <a href={url} target="_blank" rel="noreferrer">
            Visit <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}