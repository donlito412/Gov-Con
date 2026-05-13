"use client"

import * as React from "react"
import { 
  Database, 
  Truck, 
  CreditCard, 
  Package, 
  ShieldCheck,
  Star,
  Search,
  ExternalLink
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

export function SupplierHub() {
  const vendors = [
    { name: "Grainger", category: "Industrial/MRO", terms: "Net 30", rating: 5, catalog: "Active" },
    { name: "Wesco", category: "Electrical/Infr", terms: "Net 30/60", rating: 4, catalog: "Active" },
    { name: "Ferguson", category: "Water/Sewer", terms: "Net 60", rating: 5, catalog: "Reviewing" },
    { name: "Uline", category: "Janitorial/PPE", terms: "Net 30", rating: 5, catalog: "Active" },
    { name: "CDW-G", category: "IT Hardware", terms: "Net 30", rating: 4, catalog: "Active" },
    { name: "Core & Main", category: "Utility/Pipe", terms: "Net 60", rating: 4, catalog: "Active" },
  ]

  return (
    <div className="flex-1 space-y-6 p-8 overflow-y-auto scrollbar-hide">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Supplier & Vendor Hub</h2>
        <p className="text-muted-foreground">Manage Net 30/60 credit accounts and supplier catalogs.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search vendors by category, terms, or name..." className="pl-9" />
        </div>
        <Button>Add Vendor</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vendors.map((vendor, i) => (
          <Card key={i} className="hover:border-primary/50 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {vendor.name}
                </CardTitle>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className={j < vendor.rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground"} />
                  ))}
                </div>
              </div>
              <CardDescription>{vendor.category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 rounded-lg bg-accent/50 text-center">
                  <p className="text-xs text-muted-foreground mb-1 flex items-center justify-center gap-1">
                    <CreditCard size={12} /> Terms
                  </p>
                  <p className="font-bold">{vendor.terms}</p>
                </div>
                <div className="p-3 rounded-lg bg-accent/50 text-center">
                  <p className="text-xs text-muted-foreground mb-1 flex items-center justify-center gap-1">
                    <Package size={12} /> Catalog
                  </p>
                  <p className="font-bold">{vendor.catalog}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                  <ShieldCheck size={12} className="mr-1" /> Approved
                </Badge>
                <Button variant="ghost" size="sm">
                  View Account <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
