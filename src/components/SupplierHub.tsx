"use client"

import * as React from "react"
import { 
  Database, 
  CreditCard, 
  Package, 
  ShieldCheck,
  Star,
  Search,
  ExternalLink,
  Truck
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
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Supplier & Vendor Hub</h2>
          <p className="text-muted-foreground">Manage Net 30/60 credit accounts and supplier catalogs from your research.</p>
        </div>
        <Button className="shadow-lg shadow-primary/20">Add New Partner</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search vendors by category, terms, or name..." 
            className="pl-9 bg-card/50" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSuppliers.map((vendor, i) => (
          <Card key={i} className="hover:border-primary/50 transition-all group bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {vendor.name}
                </CardTitle>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={10} className={j < vendor.rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground"} />
                  ))}
                </div>
              </div>
              <CardDescription className="flex items-center gap-2">
                <Truck size={14} /> {vendor.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 rounded-xl bg-accent/30 text-center border border-border/50">
                  <p className="text-[10px] text-muted-foreground mb-1 uppercase font-bold tracking-tighter">
                    Payment Terms
                  </p>
                  <p className="font-bold text-primary">{vendor.terms}</p>
                </div>
                <div className="p-3 rounded-xl bg-accent/30 text-center border border-border/50">
                  <p className="text-[10px] text-muted-foreground mb-1 uppercase font-bold tracking-tighter">
                    Primary Focus
                  </p>
                  <p className="font-bold">{vendor.focus}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] py-0.5">
                  <ShieldCheck size={12} className="mr-1" /> Approved
                </Badge>
                <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary">
                  View Account <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
