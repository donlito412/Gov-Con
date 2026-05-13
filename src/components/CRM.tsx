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
  CalendarDays
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
  const contacts = [
    { name: "Sarah Jenkins", role: "Senior Procurement Officer", agency: "Allegheny County", email: "sjenkins@alleghenycounty.us", lastContact: "2 days ago", type: "Officer" },
    { name: "Robert Miller", role: "Prime Partner", agency: "Miller Construction", email: "bob@millerconst.com", lastContact: "1 week ago", type: "Prime" },
    { name: "David Chen", role: "Subcontractor", agency: "Chen Electrical", email: "dchen@chenelec.com", lastContact: "3 days ago", type: "Sub" },
  ]

  return (
    <div className="flex-1 space-y-6 p-8 overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">CRM & Networking</h2>
          <p className="text-muted-foreground">Manage your relationships with procurement officers and partners.</p>
        </div>
        <Button>
          <UserPlus size={16} className="mr-2" /> Add Contact
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name, agency, or role..." className="pl-9" />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Core Contacts</CardTitle>
            <CardDescription>Key stakeholders in your procurement network.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.map((contact, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-accent/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border shadow-sm">
                      <AvatarImage src="" alt={contact.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold leading-none">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.role} • {contact.agency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right space-y-1">
                      <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-tighter">
                        {contact.type}
                      </Badge>
                      <p className="text-[10px] text-muted-foreground flex items-center justify-end gap-1">
                        <CalendarDays size={10} /> Last: {contact.lastContact}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Mail size={14} /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Phone size={14} /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical size={14} /></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight">AI Relationship Insight</h3>
          <p className="text-sm text-muted-foreground max-w-xl">
            Sarah Jenkins from Allegheny County has released 3 new RFPs today in your category. 
            **Recommendation**: Send a follow-up email regarding IFB 9422.
          </p>
        </div>
        <Button size="lg" className="shadow-lg shadow-primary/20">Draft Follow-up</Button>
      </div>
    </div>
  )
}
