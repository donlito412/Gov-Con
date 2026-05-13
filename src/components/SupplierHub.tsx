"use client"

import * as React from "react"
import { 
  CreditCard, 
  ShieldAlert,
  Search,
  ExternalLink,
  Truck,
  Building2,
  Clock
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
import { Badge } from "@/components/ui/badge"
import { SUPPLIERS } from "@/lib/data"

export function SupplierHub() {
  const [search, setSearch] = React.useState("")

  const filteredSuppliers = SUPPLIERS.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8 space-y-6 h-full flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Supplier & Vendor Hub</h2>
          <p className="text-muted-foreground text-sm mt-1">Registry of researched wholesalers for Net 30/60 accounts.</p>
        </div>
        <Button className="shadow-lg shadow-primary/20">Add Supplier</Button>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by category or vendor name..." 
            className="pl-9 bg-card/50" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredSuppliers.map((vendor, i) => (
            <Card key={i} className="hover:border-primary/40 transition-all group bg-card/20 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-primary/30 text-primary/80">
                    {vendor.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors mt-2 font-bold">
                  {vendor.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 p-3 rounded-lg bg-background/50 border border-border/30 text-center">
                    <p className="text-[10px] text-muted-foreground mb-1 uppercase font-bold">Terms</p>
                    <p className="text-sm font-bold">{vendor.terms}</p>
                  </div>
                  <div className="flex-1 p-3 rounded-lg bg-background/50 border border-border/30 text-center">
                    <p className="text-[10px] text-muted-foreground mb-1 uppercase font-bold">Primary Focus</p>
                    <p className="text-sm font-bold truncate">{vendor.focus}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="flex items-center gap-1.5 text-amber-500/80">
                    <ShieldAlert size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tight">Setup Required</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-primary hover:text-white transition-all">
                    Apply Now <ExternalLink size={12} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
