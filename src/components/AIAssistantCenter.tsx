"use client"

import * as React from "react"
import { 
  Cpu, 
  Search, 
  ShieldCheck, 
  PenTool, 
  Database, 
  BarChart3, 
  Building2,
  Sparkles,
  Send,
  MessageSquare
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AIAssistantCenter() {
  const agents = [
    { id: "hunter", name: "Contract Hunter", icon: Search, focus: "Bid Discovery", status: "Active" },
    { id: "compliance", name: "Compliance Officer", icon: ShieldCheck, focus: "FAR/NIST Review", status: "Active" },
    { id: "writer", name: "Bid Writer", icon: PenTool, focus: "Proposal Generation", status: "Ready" },
    { id: "matcher", name: "Supplier Matcher", icon: Database, focus: "Fulfillment Costing", status: "Ready" },
    { id: "intel", name: "Competitive Intel", icon: BarChart3, focus: "Historical Award Analysis", status: "Ready" },
    { id: "redevelopment", name: "Real Estate Agent", icon: Building2, focus: "Redevelopment Tracking", status: "Ready" },
  ]

  return (
    <div className="flex h-full overflow-hidden">
      <div className="w-80 border-r p-6 space-y-6 overflow-y-auto scrollbar-hide">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Assistant Center</h2>
          <p className="text-xs text-muted-foreground mt-1">Core Intelligence Layer</p>
        </div>

        <div className="space-y-2">
          {agents.map((agent, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <agent.icon size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold leading-none">{agent.name}</p>
                  <p className="text-[10px] text-muted-foreground">{agent.focus}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[9px] h-4 px-1">{agent.status}</Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-accent/5 overflow-hidden">
        <div className="flex-1 p-8 overflow-y-auto scrollbar-hide space-y-6">
          <div className="flex gap-4 items-start">
            <Avatar className="h-10 w-10 border shadow-sm">
              <AvatarImage src="/ai-avatar.png" alt="AI" />
              <AvatarFallback className="bg-primary text-primary-foreground"><Sparkles size={18} /></AvatarFallback>
            </Avatar>
            <div className="p-6 rounded-2xl bg-card border shadow-sm max-w-2xl space-y-4">
              <p className="text-sm leading-relaxed">
                Hello. I am your **Contract Hunter Agent**. I have scanned 42 procurement portals today.
              </p>
              <p className="text-sm leading-relaxed">
                I found **3 High-Probability Matches** for your profile:
              </p>
              <div className="space-y-2">
                <div className="p-3 rounded-lg border bg-accent/50 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
                  <div className="text-xs font-bold text-primary italic underline">AI Chatbot Implementation - State of PA</div>
                  <div className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1 rounded">Score: 85</div>
                </div>
                <div className="p-3 rounded-lg border bg-accent/50 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
                  <div className="text-xs font-bold text-primary italic underline">Cloud Migration Services - City of PGH</div>
                  <div className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1 rounded">Score: 78</div>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground italic">
                Would you like me to start the Compliance Review for any of these?
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-card">
          <div className="relative flex items-center">
            <Input placeholder="Message your AI agents..." className="pr-12 h-12 bg-accent/30 border-none shadow-none focus-visible:ring-1" />
            <Button size="icon" className="absolute right-1 h-10 w-10">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
