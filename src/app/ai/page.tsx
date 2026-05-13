"use client"

import React, { useState } from "react"
import { Bot, Terminal, Send, Command, Search, Sparkles, Filter, FileCheck, PenTool, Database, BarChart3, Building } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AgentCard } from "@/components/AgentCard"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AIAssistantCenter() {
  const [selectedAgent, setSelectedAgent] = useState("hunter");

  const agents = [
    {
      id: "hunter",
      name: "Hunter-1",
      role: "Contract Hunter",
      status: "Active" as const,
      description: "Monitors 40+ procurement portals daily. Summarizes matching bids based on capability profile.",
      lastRun: "2 mins ago",
      metrics: [
        { label: "Bids Scanned Today", value: "1,204" },
        { label: "High Matches", value: "12" }
      ]
    },
    {
      id: "compliance",
      name: "Compliance-X",
      role: "Compliance Officer",
      status: "Idle" as const,
      description: "Reviews FAR/DFARS clauses in solicitations and validates proposal compliance.",
      lastRun: "4 hours ago",
      metrics: [
        { label: "Docs Reviewed", value: "4" },
        { label: "Risks Flagged", value: "1" }
      ]
    },
    {
      id: "writer",
      name: "Draft-GPT",
      role: "Bid Writer",
      status: "Idle" as const,
      description: "Generates initial proposal drafts, capability statements, and RFI responses.",
      lastRun: "1 day ago"
    },
    {
      id: "supplier",
      name: "SupplierMatch",
      role: "Supplier Matcher",
      status: "Offline" as const,
      description: "Estimates fulfillment costs by cross-referencing vendor catalogs and historical pricing."
    },
    {
      id: "intel",
      name: "Intel-Core",
      role: "Competitive Intel",
      status: "Training" as const,
      description: "Analyzes incumbent contracts, historical award pricing, and competitor win rates.",
      metrics: [
        { label: "Competitors Tracked", value: "34" }
      ]
    },
    {
      id: "realestate",
      name: "RE-Agent",
      role: "Real Estate Dev",
      status: "Active" as const,
      description: "Tracks SLED redevelopment projects, zoning changes, and infrastructure grants.",
      lastRun: "10 mins ago"
    }
  ];

  return (
    <div className="flex flex-col h-full space-y-6 p-8 pt-6 overflow-hidden">
      <div className="flex items-center justify-between space-y-2 shrink-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Bot className="h-8 w-8 text-primary" />
            AI Assistant Center
          </h2>
          <p className="text-muted-foreground mt-1">
            Command and control your specialized government contracting AI agents.
          </p>
        </div>
      </div>

      {/* Agents Overview (Horizontal Scroll) */}
      <div className="shrink-0 pb-2">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 p-1">
            {agents.map((agent) => (
              <div key={agent.id} className="w-[300px]">
                <AgentCard 
                  {...agent}
                  isActive={selectedAgent === agent.id}
                  onClick={setSelectedAgent}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Active Agent Interface */}
      <Card className="flex-1 flex flex-col min-h-0 border-primary/20 shadow-lg">
        <CardHeader className="border-b bg-card pb-4 shrink-0 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
             {selectedAgent === "hunter" && <Terminal className="h-5 w-5 text-primary" />}
             {selectedAgent === "compliance" && <FileCheck className="h-5 w-5 text-primary" />}
             {selectedAgent === "writer" && <PenTool className="h-5 w-5 text-primary" />}
             {selectedAgent === "supplier" && <Database className="h-5 w-5 text-primary" />}
             {selectedAgent === "intel" && <BarChart3 className="h-5 w-5 text-primary" />}
             {selectedAgent === "realestate" && <Building className="h-5 w-5 text-primary" />}
             <CardTitle className="text-lg">
               Agent Interface: <span className="text-primary font-mono">{agents.find(a => a.id === selectedAgent)?.name}</span>
             </CardTitle>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-2" /> Parameters</Button>
            <Button variant="outline" size="sm"><Command className="h-4 w-4 mr-2" /> History</Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 p-0 flex flex-col relative overflow-hidden bg-background">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-6 pb-20">
              
              {/* --- AGENT 1: HUNTER INTERFACE --- */}
              {selectedAgent === "hunter" && (
                <>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 rounded-tl-none border max-w-[80%]">
                      <p className="text-sm">
                        <strong>Hunter-1 Online.</strong> I have completed the morning sweep of SAM.gov, DIBBS, and 12 state portals based on your NAICS codes (541512, 561720, 484220). 
                        <br/><br/>
                        I analyzed 1,204 new solicitations and found <strong>3 high-probability matches</strong> (>85% match score). Would you like me to summarize them?
                      </p>
                      <span className="text-[10px] text-muted-foreground mt-2 block">08:00 AM - System Message</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">EC</span>
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 rounded-tr-none max-w-[80%]">
                      <p className="text-sm">Yes, summarize the top 3 and prioritize by lowest competition risk.</p>
                      <span className="text-[10px] text-primary-foreground/70 mt-2 block text-right">08:05 AM - User</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 rounded-tl-none border max-w-[85%] space-y-4">
                      <p className="text-sm mb-2">Here are the top 3 prioritized bids, analyzed for competition risk:</p>
                      
                      <div className="bg-background rounded border p-3">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="text-sm font-bold">1. IT Infrastructure Modernization (FEMA)</h4>
                           <Badge className="bg-green-500">94% Match</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          <strong className="text-foreground">Why it's #1:</strong> 8(a) set-aside in Region 4. Historically, FEMA Region 4 IT bids receive fewer than 3 proposals.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* --- AGENT 2: COMPLIANCE INTERFACE --- */}
              {selectedAgent === "compliance" && (
                <>
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">EC</span>
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 rounded-tr-none max-w-[80%]">
                      <p className="text-sm">Run a FAR clause check on the Draft-GPT proposal for SOL-DLA-2024-001. Ensure we meet the cybersecurity requirements.</p>
                      <span className="text-[10px] text-primary-foreground/70 mt-2 block text-right">10:15 AM - User</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 rounded-tl-none border max-w-[80%]">
                      <p className="text-sm text-destructive font-bold mb-2">Action Required: Compliance Risk Detected.</p>
                      <p className="text-sm">
                        I reviewed the solicitation and your draft proposal. You are missing an explicit response to <strong>DFARS 252.204-7012 (Safeguarding Covered Defense Information)</strong>. 
                        <br/><br/>
                        The draft mentions ISO 27001, but the agency requires a statement confirming NIST SP 800-171 compliance or a SSP/POA&M in place.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="secondary">Generate Amendment</Button>
                        <Button size="sm" variant="outline">View Clause Text</Button>
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-2 block">10:16 AM - System Message</span>
                    </div>
                  </div>
                </>
              )}

              {/* --- AGENT 3: WRITER INTERFACE --- */}
              {selectedAgent === "writer" && (
                <>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 rounded-tl-none border max-w-[80%]">
                      <p className="text-sm">
                        <strong>Draft-GPT Online.</strong> I see Hunter-1 added "Base Facility Maintenance Services (FEMA)" to the pipeline. I have pulled our past performance data for Janitorial and HVAC.
                        <br/><br/>
                        Would you like me to generate an initial 5-page proposal draft based on our standard SLED template?
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="secondary">Yes, Generate Draft</Button>
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-2 block">09:30 AM - System Message</span>
                    </div>
                  </div>
                </>
              )}

              {/* --- AGENT 4: SUPPLIER MATCHER INTERFACE --- */}
              {selectedAgent === "supplier" && (
                <>
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">EC</span>
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 rounded-tr-none max-w-[80%]">
                      <p className="text-sm">We need 500 ruggedized laptops for the VA bid. Estimate costs based on our Net 60 distributors.</p>
                      <span className="text-[10px] text-primary-foreground/70 mt-2 block text-right">Yesterday - User</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 rounded-tl-none border max-w-[80%]">
                      <p className="text-sm">
                        I queried the pricing catalogs for <strong>Global IT Solutions</strong> and <strong>National Office Distributors</strong>.
                        <br/><br/>
                        - Global IT: $1,250/unit (Total: $625,000) - TAA Compliant.<br/>
                        - National Office: $1,100/unit (Total: $550,000) - NOT TAA Compliant.
                        <br/><br/>
                        <strong>Warning:</strong> The VA solicitation requires Trade Agreements Act (TAA) compliance. You must use Global IT Solutions. I have added $625,000 to your pricing worksheet.
                      </p>
                      <span className="text-[10px] text-muted-foreground mt-2 block">Yesterday - System Message</span>
                    </div>
                  </div>
                </>
              )}

              {/* --- AGENT 5: INTEL INTERFACE --- */}
              {selectedAgent === "intel" && (
                <>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 rounded-tl-none border max-w-[80%]">
                      <p className="text-sm">
                        <strong>Intel-Core Training Update.</strong> I am currently scraping FPDS.gov and GovWin for incumbent pricing on the expiring GSA IT Schedule contracts.
                        <br/><br/>
                        Initial finding: Incumbent "TechCorp LLC" won the previous iteration of the DLA Logistics contract at a loaded hourly rate of $145/hr. If you bid under $138/hr, your probability of win increases by 18%.
                      </p>
                      <span className="text-[10px] text-muted-foreground mt-2 block">Just now - System Message</span>
                    </div>
                  </div>
                </>
              )}

               {/* --- AGENT 6: REAL ESTATE INTERFACE --- */}
              {selectedAgent === "realestate" && (
                <>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 rounded-tl-none border max-w-[80%]">
                      <p className="text-sm">
                        <strong>RE-Agent Alert.</strong> The City of Atlanta City Council just approved zoning changes for the "Downtown Urban Redevelopment" project.
                        <br/><br/>
                        They have allocated $15M in municipal bonds. The official RFP will drop in approx. 14 days. Recommend initiating contact with local DBE construction firms immediately to form a joint venture.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="secondary">Search Supplier Hub for DBEs</Button>
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-2 block">10 mins ago - System Message</span>
                    </div>
                  </div>
                </>
              )}


            </div>
          </ScrollArea>
          
          <div className="p-4 bg-card border-t shrink-0 absolute bottom-0 left-0 right-0">
            <div className="relative flex items-center">
              <Sparkles className="absolute left-3 h-4 w-4 text-primary" />
              <Input 
                placeholder={`Issue a command to ${agents.find(a => a.id === selectedAgent)?.name}...`}
                className="pl-9 pr-12 bg-background border-primary/20 focus-visible:ring-primary/50"
              />
              <Button size="icon" className="absolute right-1 h-8 w-8">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}