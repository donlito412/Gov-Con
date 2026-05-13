"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Globe,
  ArrowRight,
  LayoutGrid
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PROCUREMENT_PORTALS } from "@/lib/data"

export function ProcurementDirectory() {
  const [search, setSearch] = React.useState("")

  return (
    <div className="p-8 space-y-8 h-full flex flex-col overflow-hidden">
      <div className="shrink-0">
        <h2 className="text-3xl font-bold tracking-tight">Procurement Directory</h2>
        <p className="text-muted-foreground text-sm mt-1">Master list of all categorized contract search portals.</p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by portal name or category..." 
            className="pl-9 bg-card/50" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-12 pr-2 scrollbar-hide pb-20">
        {PROCUREMENT_PORTALS.map((group, idx) => {
          const filteredSites = group.sites.filter(s => 
            s.name.toLowerCase().includes(search.toLowerCase())
          )

          if (filteredSites.length === 0) return null

          return (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <LayoutGrid size={18} className="text-primary" />
                <h3 className="text-lg font-bold tracking-tight uppercase text-primary/80">{group.group}</h3>
              </div>
              
              <div className="border rounded-xl bg-card/20 backdrop-blur-sm overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead className="pl-6 font-bold text-[10px] uppercase tracking-widest">Site Name</TableHead>
                      <TableHead className="font-bold text-[10px] uppercase tracking-widest">Primary Focus</TableHead>
                      <TableHead className="text-right pr-6 font-bold text-[10px] uppercase tracking-widest">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSites.map((site, i) => (
                      <TableRow key={i} className="group border-b border-border/40 hover:bg-primary/5 transition-colors">
                        <TableCell className="font-bold pl-6 py-4 flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-background border group-hover:bg-primary group-hover:text-white transition-all">
                            <Globe size={14} />
                          </div>
                          {site.name}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-xs">{site.focus}</TableCell>
                        <TableCell className="text-right pr-6">
                          <a 
                            href={site.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-4 text-xs hover:bg-primary hover:text-white border border-transparent hover:border-primary transition-all")}
                          >
                            Open Portal <ArrowRight size={14} className="ml-2" />
                          </a>
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
