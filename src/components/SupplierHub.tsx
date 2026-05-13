"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Truck,
  ShieldAlert,
  ArrowUpRight,
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
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SUPPLIER_DIRECTORY } from "@/lib/data"

export function SupplierHub() {
  const [search, setSearch] = React.useState("")

  return (
    <div className="p-8 space-y-8 h-full flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Supplier & Vendor Hub</h2>
          <p className="text-muted-foreground text-sm mt-1">Categorized registry of critical wholesalers and partners.</p>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search vendors or distributors..." 
            className="pl-9 bg-card/50" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-12 pr-2 scrollbar-hide pb-20">
        {SUPPLIER_DIRECTORY.map((group, idx) => {
          const filteredSuppliers = group.suppliers.filter(s => 
            s.name.toLowerCase().includes(search.toLowerCase())
          )

          if (filteredSuppliers.length === 0) return null

          return (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <LayoutGrid size={18} className="text-primary" />
                <h3 className="text-lg font-bold tracking-tight uppercase text-primary/80">{group.group}</h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredSuppliers.map((vendor: any, i) => (
                  <Card key={i} className="hover:border-primary/40 transition-all group bg-card/10 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-primary/20 text-primary/70">
                          {vendor.focus}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mt-2 font-bold">
                        {vendor.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 p-3 rounded-xl bg-background/40 border border-border/20 text-center">
                          <p className="text-[10px] text-muted-foreground mb-1 uppercase font-bold tracking-tighter">Terms</p>
                          <p className="text-xs font-bold">{vendor.terms || "N/A"}</p>
                        </div>
                        <div className="flex-1 p-3 rounded-xl bg-background/40 border border-border/20 text-center">
                          <p className="text-[10px] text-muted-foreground mb-1 uppercase font-bold tracking-tighter">Type</p>
                          <p className="text-xs font-bold">Wholesale</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/30">
                        <div className="flex items-center gap-1.5 text-amber-500/70">
                          <ShieldAlert size={14} />
                          <span className="text-[9px] font-bold uppercase tracking-tight">Sync Needed</span>
                        </div>
                        <a 
                          href={vendor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          Visit Site <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
