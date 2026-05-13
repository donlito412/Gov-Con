"use client"

import * as React from "react"
import { 
  Search, 
  ExternalLink, 
  Info,
  Filter,
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
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ProcurementDirectory() {
  const portals = [
    { name: "GovTribe", url: "https://govtribe.com", category: "Federal/SLED", focus: "Intelligence & Pursuit" },
    { name: "HigherGov", url: "https://highergov.com", category: "Federal/SLED", focus: "Market Intel" },
    { name: "SAM.gov", url: "https://sam.gov", category: "Federal", focus: "Prime Opportunities" },
    { name: "PennBid", url: "https://pennbid.procureware.com", category: "PA State", focus: "Local Government" },
    { name: "Bonfire", url: "https://alleghenycounty.bonfirehub.com", category: "Allegheny County", focus: "Municipal/Schools" },
    { name: "BidNet Direct", url: "https://bidnetdirect.com", category: "SLED", focus: "National Local" },
    { name: "DemandStar", url: "https://demandstar.com", category: "SLED", focus: "Government Purchasing" },
    { name: "Sourcewell", url: "https://sourcewell-mn.gov", category: "Cooperative", focus: "Volume Sales" },
    { name: "GovWin IQ", url: "https://iq.govwin.com", category: "Enterprise", focus: "Capture Management" },
    { name: "Beacon Bid", url: "https://beaconbid.com", category: "Pittsburgh", focus: "City/School Bids" },
    { name: "OpenGov", url: "https://procurement.opengov.com", category: "SLED", focus: "City/County Procurement" },
    { name: "IonWave", url: "https://ionwave.net", category: "Education", focus: "School Purchasing" },
  ]

  return (
    <div className="flex-1 space-y-6 p-8 overflow-y-auto scrollbar-hide">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Procurement Site Directory</h2>
        <p className="text-muted-foreground">Unified access to all 40+ government procurement portals and bid boards.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search portals by name, state, or category..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter size={16} className="mr-2" />
          Categories
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Bid Boards</CardTitle>
          <CardDescription>Click any portal to open the official procurement interface.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Portal Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Primary Focus</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portals.map((portal, i) => (
                <TableRow key={i} className="hover:bg-accent/50 transition-colors cursor-pointer group">
                  <TableCell className="font-bold">{portal.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                      {portal.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{portal.focus}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={portal.url} target="_blank" rel="noopener noreferrer">
                        Open <ExternalLink size={14} className="ml-2" />
                      </a>
                    </Button>
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
