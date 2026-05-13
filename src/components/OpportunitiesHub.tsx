"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Filter,
  Building2,
  Calendar,
  DollarSign,
  Tag
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { OPPORTUNITIES } from "@/lib/data"

export function OpportunitiesHub() {
  const [searchQuery, setSearchQuery] = React.useState("")
  
  const tabs = [
    { id: "all", label: "All Bids" },
    { id: "Goods", label: "Goods" },
    { id: "Infrastructure", label: "Infrastructure" },
    { id: "Real Estate", label: "Real Estate" },
    { id: "AI / Tech", label: "AI & Tech" },
  ]

  const filteredOpps = OPPORTUNITIES.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          opp.agency.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="p-8 space-y-6 h-full flex flex-col overflow-hidden">
      <div className="shrink-0">
        <h2 className="text-3xl font-bold tracking-tight">Opportunities Hub</h2>
        <p className="text-muted-foreground text-sm mt-1">Live solicitation tracking across all researched portals.</p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Filter by title, agency, or keyword..." 
            className="pl-9 bg-card/50" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter size={14} className="mr-2" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="flex-1 flex flex-col overflow-hidden">
        <TabsList className="bg-card/30 border h-auto p-1 mb-4 shrink-0">
          {tabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-xs py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-1 overflow-y-auto border rounded-lg bg-card/30 backdrop-blur-sm scrollbar-hide">
          {tabs.map(tab => (
            <TabsContent key={tab.id} value={tab.id} className="m-0 border-none">
              <Table>
                <TableHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur-md">
                  <TableRow className="hover:bg-transparent border-b">
                    <TableHead className="w-[40%] font-bold">Opportunity Title</TableHead>
                    <TableHead className="font-bold">Agency</TableHead>
                    <TableHead className="font-bold">Due Date</TableHead>
                    <TableHead className="font-bold">Portal</TableHead>
                    <TableHead className="text-right font-bold pr-6">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOpps
                    .filter(opp => tab.id === "all" || opp.category === tab.id)
                    .map((opp, i) => (
                    <TableRow key={i} className="group border-b border-border/40 hover:bg-primary/5 transition-colors">
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-bold text-sm leading-none group-hover:text-primary transition-colors">{opp.title}</p>
                          <div className="flex gap-1">
                            {opp.tags.map((tag, j) => (
                              <span key={j} className="text-[10px] text-muted-foreground uppercase tracking-tighter">#{tag}</span>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs font-medium">{opp.agency}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={cn(
                          "text-[10px] font-bold px-2 py-0",
                          opp.dueDate.includes("May") ? "border-amber-500/50 text-amber-500 bg-amber-500/5" : "border-emerald-500/50 text-emerald-500 bg-emerald-500/5"
                        )}>
                          {opp.dueDate}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[10px] uppercase font-bold text-muted-foreground">{opp.portal}</TableCell>
                      <TableCell className="text-right pr-6">
                        <a 
                          href="#" 
                          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-2 text-xs hover:bg-primary hover:text-white")}
                        >
                          Details <ExternalLink size={12} className="ml-1.5" />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredOpps.filter(opp => tab.id === "all" || opp.category === tab.id).length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground italic">
                  No opportunities found in this category.
                </div>
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
