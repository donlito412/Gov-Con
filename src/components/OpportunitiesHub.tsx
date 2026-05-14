"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Filter,
  Building2,
  Calendar,
  LayoutGrid,
  ChevronRight
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
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
  
  return (
    <div className="p-8 space-y-8 h-full flex flex-col overflow-hidden relative z-10 pointer-events-auto">
      <div className="shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Opportunities Hub</h2>
          <p className="text-muted-foreground text-sm mt-1">Live solicitation tracking categorized by sector and region.</p>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search all 39 active opportunities..." 
            className="pl-9 bg-card/50" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm" className="h-10 font-bold uppercase text-[10px] tracking-widest">
          <Filter size={14} className="mr-2" />
          Refine
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-12 pr-2 scrollbar-hide pb-20">
        {OPPORTUNITIES.map((group, idx) => {
          const filteredItems = group.items.filter(opp => 
            opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            opp.agency.toLowerCase().includes(searchQuery.toLowerCase())
          )

          if (filteredItems.length === 0) return null

          return (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <LayoutGrid size={18} className="text-primary" />
                <h3 className="text-lg font-bold tracking-tight uppercase text-primary/80 italic">{group.group}</h3>
              </div>
              
              <div className="border rounded-xl bg-card/20 backdrop-blur-sm overflow-hidden border-border/50">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent border-b border-border/40">
                      <TableHead className="pl-6 font-bold text-[10px] uppercase tracking-widest w-[45%]">Solicitation Title</TableHead>
                      <TableHead className="font-bold text-[10px] uppercase tracking-widest">Agency</TableHead>
                      <TableHead className="font-bold text-[10px] uppercase tracking-widest">Portal</TableHead>
                      <TableHead className="text-right pr-6 font-bold text-[10px] uppercase tracking-widest">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((opp, i) => (
                      <TableRow key={i} className="group border-b border-border/40 hover:bg-primary/5 transition-colors cursor-pointer">
                        <TableCell className="pl-6 py-4">
                          <div className="space-y-1.5">
                            <p className="font-bold text-sm leading-tight group-hover:text-primary transition-colors pr-8">{opp.title}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {opp.tags.map((tag, j) => (
                                <Badge key={j} variant="outline" className="text-[9px] font-bold px-1.5 py-0 bg-background/50 border-border/40 text-muted-foreground group-hover:border-primary/30 transition-colors uppercase tracking-tight">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">{opp.agency}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[9px] font-bold uppercase tracking-tighter">
                            {opp.portal}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-4 text-[10px] font-bold uppercase hover:bg-primary hover:text-white transition-all group-hover:translate-x-1"
                            onClick={() => window.open('#', '_blank')}
                          >
                            Details <ChevronRight size={14} className="ml-1" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
