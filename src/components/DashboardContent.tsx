"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  Bell, 
  Search, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  AlertTriangle, 
  CheckCircle2,
  Filter,
  MoreVertical,
  Plus
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
import { Input } from "@/components/ui/input"

export function DashboardContent() {
  const stats = [
    { label: "Active Bids", value: "12", change: "+2", type: "up" },
    { label: "Bids Due (7 days)", value: "4", change: "Urgent", type: "warning" },
    { label: "Supplier Quotes", value: "8", change: "Pending", type: "neutral" },
    { label: "Pipeline Value", value: "$4.2M", change: "+15%", type: "up" },
  ]

  const recentBids = [
    { id: "BID-2024-012", title: "AI Modernization Support", agency: "Department of Defense", dueDate: "2024-05-20", value: "$1.2M", status: "In Progress" },
    { id: "BID-2024-015", title: "Janitorial Supplies SLED", agency: "Allegheny County", dueDate: "2024-05-22", value: "$450k", status: "Drafting" },
    { id: "BID-2024-009", title: "Cloud Migration Services", agency: "City of Pittsburgh", dueDate: "2024-05-15", value: "$890k", status: "Reviewing" },
  ]

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Command Center Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back. Here is your current contracting intelligence overview.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus size={16} className="mr-2" />
            New Bid
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="hover:border-primary/50 transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              {stat.type === 'up' && <ArrowUpRight className="h-4 w-4 text-emerald-500" />}
              {stat.type === 'warning' && <AlertTriangle className="h-4 w-4 text-amber-500" />}
              {stat.type === 'neutral' && <Clock className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={cn(
                "text-xs",
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
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Opportunities</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs">View All</Button>
            </div>
            <CardDescription>
              New matching solicitations from SLED and Federal portals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBids.map((bid, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-accent/50 transition-all">
                  <div className="space-y-1">
                    <p className="text-sm font-bold leading-none">{bid.title}</p>
                    <p className="text-xs text-muted-foreground">{bid.agency} • {bid.id}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-semibold">{bid.value}</p>
                      <p className="text-xs text-muted-foreground">Due: {bid.dueDate}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {bid.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>
              Actionable insights based on your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-3 rounded-lg border bg-blue-500/5 border-blue-500/20">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-blue-500">High Win Probability</p>
                  <p className="text-xs text-muted-foreground">
                    "AI Modernization Support" matches your previous performance with DoD.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-3 rounded-lg border bg-amber-500/5 border-amber-500/20">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-amber-500">Compliance Warning</p>
                  <p className="text-xs text-muted-foreground">
                    "Janitorial Supplies" requires a local MBE cert. Verification needed.
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
