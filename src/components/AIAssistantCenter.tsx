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
  MessageSquare,
  Bot
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
  const [messages, setMessages] = React.useState<any[]>([])
  const [input, setInput] = React.useState("")
  const [activeAgent, setActiveAgent] = React.useState("hunter")

  const agents = [
    { id: "hunter", name: "Contract Hunter", icon: Search, focus: "Bid Discovery" },
    { id: "compliance", name: "Compliance Officer", icon: ShieldCheck, focus: "FAR/NIST Review" },
    { id: "writer", name: "Bid Writer", icon: PenTool, focus: "Proposal Generation" },
    { id: "matcher", name: "Supplier Matcher", icon: Database, focus: "Fulfillment Costing" },
    { id: "redevelopment", name: "Real Estate Agent", icon: Building2, focus: "Redevelopment Tracking" },
  ]

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg = { role: "user", content: input }
    setMessages([...messages, newMsg])
    setInput("")
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `Agent [${activeAgent.toUpperCase()}] received: "${input}". System logic initializing...` 
      }])
    }, 500)
  }

  return (
    <div className="flex h-full overflow-hidden relative z-10 pointer-events-auto">
      <div className="w-80 border-r p-6 space-y-6 overflow-y-auto bg-card/20 scrollbar-hide">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Assistant Center</h2>
          <p className="text-[10px] uppercase font-bold text-primary tracking-widest mt-1">Operational Intelligence</p>
        </div>

        <div className="space-y-2">
          {agents.map((agent, i) => (
            <div 
              key={i} 
              onClick={() => setActiveAgent(agent.id)}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all group cursor-pointer ${
                activeAgent === agent.id ? "bg-primary/10 border-primary/50 shadow-sm" : "border-border/30 hover:bg-accent/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg transition-all ${
                  activeAgent === agent.id ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                }`}>
                  <agent.icon size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold leading-none">{agent.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{agent.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-accent/5 overflow-hidden">
        <div className="flex-1 p-8 overflow-y-auto scrollbar-hide space-y-6">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <Bot size={48} className="text-primary" />
              <div className="max-w-xs">
                <p className="text-sm font-bold uppercase tracking-widest">Awaiting Command</p>
                <p className="text-xs text-muted-foreground mt-1">Select an agent and enter a query to begin intelligence analysis.</p>
              </div>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <Avatar className="h-8 w-8 border shadow-sm shrink-0">
                  <AvatarFallback className={msg.role === 'assistant' ? "bg-primary text-white" : "bg-muted"}>
                    {msg.role === 'assistant' ? <Sparkles size={14} /> : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className={`p-4 rounded-2xl border text-sm max-w-xl ${
                  msg.role === 'assistant' ? 'bg-card border-border/50' : 'bg-primary text-white border-transparent'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t bg-card/50 backdrop-blur-md">
          <div className="relative flex items-center max-w-4xl mx-auto">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={`Message ${activeAgent}...`} 
              className="pr-12 h-14 bg-background border-border/50 shadow-sm rounded-2xl focus-visible:ring-1" 
            />
            <Button 
              size="icon" 
              onClick={handleSend}
              className="absolute right-2 h-10 w-10 rounded-xl"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
