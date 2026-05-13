"use client"

import * as React from "react"
import { 
  Globe, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Tag, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Search
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function OpportunitiesHub() {
  const tabs = [
    { id: "federal", label: "Federal" },
    { id: "state", label: "State" },
    { id: "local", label: "Local" },
    { id: "education", label: "Education" },
    { id: "ai", label: "AI Contracts" },
    { id: "real-estate", label: "Real Estate" },
  ]

  const opportunities = [
    {
      title: "AI Chatbot Implementation",
      agency: "State of Pennsylvania",
      naics: "541511",
      solicitation: "RFP-PA-2024-089",
      dueDate: "2024-06-15",
      value: "$250,000 - $500,000",
      location: "Harrisburg, PA",
      setAside: "Small Business",
      summary: "Implementation of citizen-facing AI chatbots for state agencies.",
      score: 85
    },
    {
      title: "Mixed-Use Housing Development",
      agency: "Urban Redevelopment Authority",
      naics: "236116",
      solicitation: "URA-2024-REDV-001",
      dueDate: "2024-07-01",
      value: "$10M - $15M",
      location: "Pittsburgh, PA",
      setAside: "None",
      summary: "Redevelopment of multi-family housing in the Lower Hill district.",
      score: 72
    }
  ]

  return (
    <div className="flex-1 space-y-6 p-8 overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Opportunities Hub</h2>
          <p className="text-muted-foreground">Manage and track your procurement pipeline across all sectors.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search solicitations, NAICS, or agencies..." className="pl-9" />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <Tabs defaultValue="federal" className="space-y-6">
        <TabsList className="bg-background border h-auto p-1 grid grid-cols-3 md:grid-cols-6 gap-1">
          {tabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-xs py-2">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.id} value={tab.id} className="space-y-4">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {opportunities.map((opp, i) => (
                <Card key={i} className="group hover:border-primary/50 transition-all overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        Match: {opp.score}%
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {opp.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building2 size={14} /> {opp.agency}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Tag size={14} /> NAICS: <span className="text-foreground font-medium">{opp.naics}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <FileText size={14} /> ID: <span className="text-foreground font-medium">{opp.solicitation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} /> Due: <span className="text-foreground font-medium">{opp.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign size={14} /> Value: <span className="text-foreground font-medium">{opp.value}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-accent/50 text-sm">
                      <p className="font-semibold mb-1">AI Summary:</p>
                      <p className="text-muted-foreground">{opp.summary}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{opp.setAside}</Badge>
                        <Badge variant="secondary">{opp.location}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">Save</Button>
                        <Button size="sm">
                          View Bid <ExternalLink size={14} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
