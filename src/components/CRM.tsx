"use client"

import * as React from "react"
import { 
  Users, 
  Search, 
  UserPlus, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Briefcase,
  MoreVertical,
  CalendarDays,
  UserCheck
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function CRM() {
  return (
    <div className="p-8 space-y-8 h-full flex flex-col overflow-hidden relative z-10 pointer-events-auto">
      <div className="shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">CRM & Networking</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage your relationships with procurement officers and partners.</p>
        </div>
        <Button className="font-bold uppercase text-[10px] shadow-lg shadow-primary/20">
          <UserPlus size={16} className="mr-2" /> Add Contact
        </Button>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search your network by name or agency..." className="pl-9 bg-card/50" />
        </div>
        <Button variant="outline" size="sm" className="h-10 font-bold uppercase text-[10px] tracking-widest">Filters</Button>
      </div>

      <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
        <div className="flex-1 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center p-12 space-y-4 bg-accent/5">
          <div className="p-4 rounded-full bg-primary/5 text-primary/40">
            <UserCheck size={40} />
          </div>
          <div className="max-w-xs">
            <p className="text-sm font-bold uppercase tracking-widest">Network is Empty</p>
            <p className="text-xs text-muted-foreground mt-1">You haven't added any procurement officers or partners yet. Use the "Add Contact" button to begin building your database.</p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6 shrink-0">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
              <span className="p-1.5 rounded-lg bg-primary text-white shadow-sm shadow-primary/50"><Users size={16} /></span>
              Relationship Intelligence
            </h3>
            <p className="text-xs text-muted-foreground max-w-xl font-medium">
              Your AI Hunter Agent will automatically find Points of Contact (POCs) for active solicitations once you start tracking bids.
            </p>
          </div>
          <Button variant="outline" size="sm" className="font-bold uppercase text-[10px] tracking-widest border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
            Link Bid Board
          </Button>
        </div>
      </div>
    </div>
  )
}
