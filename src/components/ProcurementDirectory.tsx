"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Filter,
  Globe
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
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Procurement Site Directory</h2>
        <p className="text-muted-foreground">Unified access to all 40+ government procurement portals and bid boards.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search portals by name, state, or category..." 
            className="pl-9 bg-card/50" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter size={16} className="mr-2" />
          Categories
        </Button>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardHeader>
          <CardTitle>Global Bid Boards</CardTitle>
          <CardDescription>Click any portal to open the official procurement interface.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-accent/30">
              <TableRow>
                <TableHead className="pl-6">Portal Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Primary Focus</TableHead>
                <TableHead className="text-right pr-6">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPortals.map((portal, i) => (
                <TableRow key={i} className="hover:bg-accent/50 transition-colors cursor-pointer group border-border/50">
                  <TableCell className="font-bold pl-6 flex items-center gap-2">
                    <Globe size={16} className="text-primary/50" />
                    {portal.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-bold tracking-tight">
                      {portal.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{portal.focus}</TableCell>
                  <TableCell className="text-right pr-6">
                    <a 
                      href={portal.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hover:bg-primary hover:text-white transition-all")}
                    >
                      Open Portal <ExternalLink size={14} className="ml-2" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
