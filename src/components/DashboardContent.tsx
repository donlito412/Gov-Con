"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  Bell, 
  Search, 
  ArrowUpRight, 
  Clock, 
  AlertTriangle, 
  CheckCircle2,
  Plus,
  TrendingUp
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { OPPORTUNITIES } from "@/lib/data"

export function DashboardContent() {
  const stats = [
    { label: "Active Bids", value: "24", change: "+12", type: "up" },
    { label: "Bids Due (7 days)", value: "2", change: "Urgent", type: "warning" },
    { label: "Supplier Quotes", value: "15", change: "Ready", type: "neutral" },
    { label: "Pipeline Value", value: "$8.4M", change: "+24%", type: "up" },
  ]

  // Show top 5 recent opportunities
  const recentBids = OPPORTUNITIES.slice(0, 5)

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Command Center Dashboard</h2>
          <p className="text-muted-foreground">
            Real-time intelligence from Allegheny County, SLED, and AI sectors.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="shadow-lg shadow-primary/20">
            <Plus size={16} className="mr-2" />
            New Bid
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              {stat.type === 'up' && <TrendingUp className="h-4 w-4 text-emerald-500" />}
              {stat.type === 'warning' && <AlertTriangle className="h-4 w-4 text-amber-500" />}
              {stat.type === 'neutral' && <Clock className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={cn(
                "text-xs font-medium",
                stat.type === 'up' ? "text-emerald-500" : 
                stat.type === 'warning' ? "text-amber-500" : "text-muted-foreground"
              )}>
                {stat.change} since last scan
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Priority Opportunities</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs">View All</Button>
            </div>
            <CardDescription>
              Direct matches from your recent market research.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBids.map((bid, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-background/50 hover:bg-accent/50 transition-all group">
                  <div className="space-y-1">
                    <p className="text-sm font-bold leading-none group-hover:text-primary transition-colors">{bid.title}</p>
                    <p className="text-xs text-muted-foreground">{bid.agency} • {bid.portal}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-semibold">{bid.value}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">Due: {bid.dueDate}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                      Active
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card/50">
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <CardDescription>
              Predictive analysis and compliance alerts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl border bg-blue-500/5 border-blue-500/20">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-blue-500 italic">High Win Probability</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    "Traffic Signal Equipment" matches your NAICS and local vendor preferences.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl border bg-amber-500/5 border-amber-500/20">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-amber-500 italic">Compliance Check</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    "Invoice Automation" RFP requires a specific Cyber-Liability insurance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
