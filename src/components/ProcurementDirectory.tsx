"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Filter,
  Globe,
  ArrowRight
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
import { PORTALS } from "@/lib/data"

export function ProcurementDirectory() {
  const [search, setSearch] = React.useState("")

  const filteredPortals = PORTALS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8 space-y-6 h-full flex flex-col overflow-hidden">
      <div className="shrink-0">
        <h2 className="text-3xl font-bold tracking-tight">Procurement Directory</h2>
        <p className="text-muted-foreground text-sm mt-1">Unified access to every platform listed in your master build plan.</p>
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

      <div className="flex-1 overflow-y-auto border rounded-lg bg-card/30 backdrop-blur-sm scrollbar-hide">
        <Table>
          <TableHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur-md">
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6 font-bold">Platform Name</TableHead>
              <TableHead className="font-bold">Category</TableHead>
              <TableHead className="font-bold">Primary Focus</TableHead>
              <TableHead className="text-right pr-6 font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPortals.map((portal, i) => (
              <TableRow key={i} className="group border-b border-border/40 hover:bg-primary/5 transition-colors">
                <TableCell className="font-bold pl-6 flex items-center gap-2">
                  <Globe size={14} className="text-primary/50 group-hover:text-primary transition-colors" />
                  {portal.name}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-extrabold tracking-tight">
                    {portal.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{portal.focus}</TableCell>
                <TableCell className="text-right pr-6">
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-3 text-xs hover:bg-primary hover:text-white transition-all")}
                  >
                    Open <ArrowRight size={14} className="ml-2" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
