import React from "react"
import { Calendar, Building, DollarSign, Target, Sparkles, FileText, CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export interface OpportunityCardProps {
  title: string
  agency: string
  id: string
  dueDate: string
  value: string
  status: "Active" | "Closing Soon" | "In Review" | "Drafting"
  type: string
  matchScore: number
  aiSummary: string
  requirements: string[]
}

export function OpportunityCard({
  title,
  agency,
  id,
  dueDate,
  value,
  status,
  type,
  matchScore,
  aiSummary,
  requirements
}: OpportunityCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "Closing Soon": return "bg-destructive/10 text-destructive hover:bg-destructive/20"
      case "In Review": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
      case "Drafting": return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-muted-foreground"
  }

  return (
    <Card className="w-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={getStatusColor(status)}>{status}</Badge>
              <Badge variant="secondary">{type}</Badge>
              <span className="text-xs text-muted-foreground font-mono ml-auto">{id}</span>
            </div>
            <CardTitle className="text-xl leading-tight">{title}</CardTitle>
            <CardDescription className="flex items-center gap-1.5 text-sm">
              <Building className="h-4 w-4" />
              {agency}
            </CardDescription>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-secondary/30 rounded-lg min-w-[80px]">
            <Target className={cn("h-6 w-6 mb-1", getMatchScoreColor(matchScore))} />
            <span className={cn("text-lg font-bold leading-none", getMatchScoreColor(matchScore))}>
              {matchScore}%
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Match</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-1">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-4 w-4" />
            <span className="font-medium text-foreground">{value}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>Due: <span className="font-medium text-foreground">{dueDate}</span></span>
          </div>
        </div>

        <div className="bg-primary/5 rounded-md p-4 border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/40"></div>
          <div className="flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div className="space-y-1">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI Summary</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {aiSummary}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Requirements</span>
          <ul className="space-y-1.5">
            {requirements.map((req, i) => (
              <li key={i} className="text-sm flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="pt-4 flex justify-between">
        <Button variant="outline" size="sm">
          <FileText className="h-4 w-4 mr-2" />
          View Source Docs
        </Button>
        <div className="space-x-2">
          <Button variant="secondary" size="sm">Dismiss</Button>
          <Button size="sm">Draft Proposal</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
