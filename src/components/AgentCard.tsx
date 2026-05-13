import React from "react"
import { Bot, Activity, Play, Settings, Power } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export interface AgentCardProps {
  id: string
  name: string
  role: string
  description: string
  status: "Active" | "Idle" | "Training" | "Offline"
  lastRun?: string
  metrics?: { label: string; value: string }[]
  isActive?: boolean
  onClick?: (id: string) => void
}

export function AgentCard({
  id,
  name,
  role,
  description,
  status,
  lastRun,
  metrics = [],
  isActive = false,
  onClick
}: AgentCardProps) {
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Idle": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Training": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Offline": return "bg-destructive/10 text-destructive border-destructive/20"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card 
      className={`flex flex-col h-full transition-all cursor-pointer hover:border-primary/50 ${isActive ? 'ring-2 ring-primary border-primary' : ''}`}
      onClick={() => onClick && onClick(id)}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <Badge variant="outline" className={getStatusColor(status)}>
                 <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status === 'Active' ? 'bg-green-500 animate-pulse' : status === 'Idle' ? 'bg-blue-500' : status === 'Training' ? 'bg-yellow-500' : 'bg-destructive'}`}></span>
                 {status}
               </Badge>
               <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{role}</span>
            </div>
            <CardTitle className="text-xl leading-tight flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              {name}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-1">
        <CardDescription className="text-sm text-foreground/80 leading-relaxed">
          {description}
        </CardDescription>

        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-4 p-3 bg-muted/50 rounded-lg border border-border/50">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{metric.label}</span>
                <span className="text-sm font-bold text-foreground">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {lastRun && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
            <Activity className="h-3 w-3" />
            <span>Last activity: {lastRun}</span>
          </div>
        )}
      </CardContent>
      
      <Separator />
      
      <CardFooter className="pt-4 flex justify-between">
        <div className="flex gap-2">
           <Button variant={status === 'Offline' ? 'outline' : 'secondary'} size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
             <Power className={`h-4 w-4 ${status !== 'Offline' ? 'text-green-500' : 'text-muted-foreground'}`} />
           </Button>
           <Button variant="outline" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
             <Settings className="h-4 w-4" />
           </Button>
        </div>
        <Button size="sm" variant={isActive ? "default" : "outline"} className={isActive ? "shadow-md" : ""}>
          {isActive ? "Viewing Interface" : "Open Interface"}
        </Button>
      </CardFooter>
    </Card>
  )
}