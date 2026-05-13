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
  Search,
  Building2
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
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { OPPORTUNITIES } from "@/lib/data"

export function OpportunitiesHub() {
  const [searchQuery, setSearchQuery] = React.useState("")
  
  const tabs = [
    { id: "all", label: "All Opportunities" },
    { id: "Goods", label: "Goods & Supplies" },
    { id: "Real Estate", label: "Real Estate" },
    { id: "AI / Tech", label: "AI & Tech" },
    { id: "Professional", label: "Prof. Services" },
  ]

  const filteredOpps = OPPORTUNITIES.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          opp.agency.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Opportunities Hub</h2>
          <p className="text-muted-foreground">Manage and track your procurement pipeline across all sectors.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search solicitations, NAICS, or agencies..." 
            className="pl-9 bg-card/50" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-card/50 border h-auto p-1 grid grid-cols-2 md:grid-cols-5 gap-1 backdrop-blur-sm">
          {tabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.id} value={tab.id} className="space-y-4">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {filteredOpps
                .filter(opp => tab.id === "all" || opp.category === tab.id)
                .map((opp, i) => (
                <Card key={i} className="group hover:border-primary/50 transition-all overflow-hidden relative bg-card/50 backdrop-blur-sm">
                  <div className="absolute top-0 right-0 p-4">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      Match: {Math.floor(Math.random() * 20) + 75}%
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight pr-12">
                      {opp.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building2 size={14} /> {opp.agency}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Tag size={14} /> Category: <span className="text-foreground font-medium">{opp.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <FileText size={14} /> Portal: <span className="text-foreground font-medium">{opp.portal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} /> Due: <span className="text-foreground font-medium">{opp.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign size={14} /> Value: <span className="text-foreground font-medium">{opp.value}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {opp.tags.map((tag, j) => (
                        <Badge key={j} variant="secondary" className="text-[10px] bg-accent/50">{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <Button size="sm" variant="ghost">Save to CRM</Button>
                      <a href="#" className={cn(buttonVariants({ size: "sm" }), "shadow-md")}>
                        View Bid <ExternalLink size={14} className="ml-2" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredOpps.filter(opp => tab.id === "all" || opp.category === tab.id).length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No opportunities found in this category.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
