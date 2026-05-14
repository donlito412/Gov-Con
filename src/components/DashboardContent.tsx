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
    { label: "Active Bids", value: "39", change: "Verified", type: "neutral" },
    { label: "Bids Due (7 days)", value: "0", change: "None", type: "neutral" },
    { label: "Supplier Quotes", value: "0", change: "Pending", type: "neutral" },
    { label: "Pipeline Value", value: "$0.00", change: "Awaiting Data", type: "neutral" },
  ]

  // Flatten all items from groups for the list
  const allOpps = OPPORTUNITIES.flatMap(group => group.items)
  const recentBids = allOpps.slice(0, 5)

  return (
    <div className="p-8 space-y-8 relative z-10 pointer-events-auto">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Command Center Dashboard</h2>
          <p className="text-muted-foreground text-sm">
            Operational overview of your government contracting pipeline.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="shadow-lg shadow-primary/20">
            <Plus size={16} className="mr-2" />
            New Bid Entry
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground/50" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
        <Card className="lg:col-span-4 bg-card/50 border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Opportunities</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs">View Hub</Button>
            </div>
            <CardDescription className="text-xs">
              Latest solicitations found in your 40+ monitored portals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBids.map((bid, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border/30 bg-background/50 hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="space-y-1">
                    <p className="text-sm font-bold leading-none group-hover:text-primary transition-colors">{bid.title}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-medium">{bid.agency} • {bid.portal}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs font-bold text-emerald-500">ACTIVE</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-7 text-[10px] px-2 font-bold uppercase group-hover:bg-primary group-hover:text-white transition-all">
                      View Bid
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription className="text-xs">
              Notifications from your AI Intelligence agents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-blue-500 uppercase">System Ready</p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Portal monitoring active for all 40+ SLED and National platforms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl border border-border/30 bg-accent/20">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Awaiting Action</p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    No active bids are due within the next 48 hours.
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
