import React from "react"
import { Contact2, Search, Filter, Plus, Mail, Phone, Calendar, Building, MoreHorizontal } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CRMHub() {
  const contacts = [
    {
      id: "C-001",
      name: "Sarah Jenkins",
      initials: "SJ",
      role: "Procurement Officer",
      organization: "FEMA Region 4",
      email: "sarah.jenkins@fema.gov",
      phone: "(404) 555-0198",
      status: "Active Teaming",
      lastContact: "Oct 12, 2024",
      category: "agency"
    },
    {
      id: "C-002",
      name: "Marcus Thorne",
      initials: "MT",
      role: "Director of Facilities",
      organization: "City of Atlanta",
      email: "mthorne@atlantaga.gov",
      phone: "(404) 555-4432",
      status: "Warm",
      lastContact: "Sep 28, 2024",
      category: "agency"
    },
    {
      id: "C-003",
      name: "David Chen",
      initials: "DC",
      role: "VP of Federal Sales",
      organization: "Booz Allen Hamilton",
      email: "chen_david@bah.com",
      phone: "(703) 555-8811",
      status: "Pending NDA",
      lastContact: "Oct 10, 2024",
      category: "prime"
    },
    {
      id: "C-004",
      name: "Alicia Rodriguez",
      initials: "AR",
      role: "CEO",
      organization: "CleanSweep Facilities (DBE)",
      email: "alicia@cleansweep.net",
      phone: "(404) 555-9922",
      status: "Active Teaming",
      lastContact: "Oct 14, 2024",
      category: "sub"
    },
    {
      id: "C-005",
      name: "Robert Vance",
      initials: "RV",
      role: "Contracting Specialist",
      organization: "Defense Logistics Agency",
      email: "robert.vance@dla.mil",
      phone: "(256) 555-3344",
      status: "Cold",
      lastContact: "Jan 15, 2024",
      category: "agency"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Teaming": return "bg-green-500/10 text-green-500"
      case "Warm": return "bg-blue-500/10 text-blue-500"
      case "Pending NDA": return "bg-yellow-500/10 text-yellow-500"
      case "Cold": return "bg-secondary text-secondary-foreground"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Contact2 className="h-8 w-8 text-primary" />
            CRM & Networking
          </h2>
          <p className="text-muted-foreground mt-1">
            Track relationships with procurement officers, agency contacts, primes, and subcontractors.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden sm:flex"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Add Contact</Button>
        </div>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search contacts, agencies, or companies..." className="pl-8" />
        </div>
        <Button type="submit" variant="secondary">Search</Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mb-6">
          <TabsTrigger value="all">All Contacts</TabsTrigger>
          <TabsTrigger value="agency">Agency / Procurement</TabsTrigger>
          <TabsTrigger value="prime">Prime Contractors</TabsTrigger>
          <TabsTrigger value="sub">Subcontractors</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="m-0">
          <div className="border rounded-md bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Contact</TableHead>
                  <TableHead>Organization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                            {contact.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="font-medium text-sm leading-none">{contact.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Mail className="h-3 w-3"/> {contact.email}</span>
                            <span className="flex items-center gap-1"><Phone className="h-3 w-3"/> {contact.phone}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm font-medium flex items-center gap-1.5">
                           <Building className="h-3 w-3 text-muted-foreground" />
                           {contact.organization}
                        </p>
                        <p className="text-xs text-muted-foreground">{contact.role}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[10px] ${getStatusColor(contact.status)}`}>
                        {contact.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {contact.lastContact}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                          <DropdownMenuItem>
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Log Interaction
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Schedule Follow-up
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Delete Contact
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Other TabsContents would filter the 'contacts' array based on the 'category' field */}
        <TabsContent value="agency" className="m-0 text-sm text-muted-foreground p-4">
          Filtered view for Agency Contacts and Procurement Officers...
        </TabsContent>
        <TabsContent value="prime" className="m-0 text-sm text-muted-foreground p-4">
          Filtered view for Prime Contractors (Potential Teaming Partners)...
        </TabsContent>
        <TabsContent value="sub" className="m-0 text-sm text-muted-foreground p-4">
          Filtered view for Subcontractors (1099s, DBEs, etc.)...
        </TabsContent>

      </Tabs>
    </div>
  )
}