import React from "react"
import { Settings, Globe, Play, Workflow, BellRing, Database, Save, CheckCircle2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function AutomationSettings() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            Automation & Global Settings
          </h2>
          <p className="text-muted-foreground mt-1">
            Configure global search parameters and manage automated scraping schedules.
          </p>
        </div>
      </div>

      <Tabs defaultValue="search" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mb-8">
          <TabsTrigger value="search">Global Search Parameters</TabsTrigger>
          <TabsTrigger value="automation">Agent Automation Schedules</TabsTrigger>
          <TabsTrigger value="webhooks">Integrations & Webhooks</TabsTrigger>
        </TabsList>

        {/* --- GLOBAL SEARCH TABS --- */}
        <TabsContent value="search" className="space-y-6">
          <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" /> Target NAICS Codes</CardTitle>
               <CardDescription>Hunter-1 will primarily scan using these default NAICS codes across all portals.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="flex flex-wrap gap-2">
                 <Badge className="px-3 py-1 text-sm bg-primary text-primary-foreground flex items-center gap-2">
                    541611 - Admin & General Mgmt <button className="hover:text-destructive text-primary-foreground/50 ml-1">×</button>
                 </Badge>
                 <Badge className="px-3 py-1 text-sm bg-primary text-primary-foreground flex items-center gap-2">
                    561720 - Janitorial Services <button className="hover:text-destructive text-primary-foreground/50 ml-1">×</button>
                 </Badge>
                 <Badge className="px-3 py-1 text-sm bg-primary text-primary-foreground flex items-center gap-2">
                    541512 - Computer Systems Design <button className="hover:text-destructive text-primary-foreground/50 ml-1">×</button>
                 </Badge>
                 <Badge className="px-3 py-1 text-sm bg-primary text-primary-foreground flex items-center gap-2">
                    484220 - Specialized Freight <button className="hover:text-destructive text-primary-foreground/50 ml-1">×</button>
                 </Badge>
               </div>
               <div className="flex gap-2 max-w-sm mt-4">
                  <Input placeholder="Enter NAICS Code..." />
                  <Button variant="secondary">Add</Button>
               </div>
             </CardContent>
          </Card>

          <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Database className="h-5 w-5" /> Keyword & Semantic Filters</CardTitle>
               <CardDescription>Used by the AI agents to rank and score bids for match percentage.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Must-Have Keywords (High Weight)</label>
                  <Input defaultValue="ISO 27001, Facility Clearance, Artificial Intelligence, IoT Sensors, Facilities Maintenance" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Negative Keywords (Filter Out)</label>
                  <Input defaultValue="Construction, Food Service, Armed Security" />
                </div>
             </CardContent>
             <CardFooter>
               <Button><Save className="mr-2 h-4 w-4" /> Save Global Filters</Button>
             </CardFooter>
          </Card>
        </TabsContent>

        {/* --- AUTOMATION TABS --- */}
        <TabsContent value="automation" className="space-y-6">
           <Card className="border-primary/20 shadow-sm">
             <CardHeader>
               <CardTitle className="flex items-center justify-between">
                 <div className="flex items-center gap-2"><Play className="h-5 w-5 text-green-500" /> Daily Portal Scrape (Hunter-1)</div>
                 <Badge className="bg-green-500">Active</Badge>
               </CardTitle>
               <CardDescription>Schedules for pulling new solicitations from SAM.gov and 40+ SLED portals.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Federal Scan Frequency</label>
                   <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                     <option>Every 6 Hours</option>
                     <option>Every 12 Hours</option>
                     <option selected>Daily (6:00 AM EST)</option>
                     <option>Weekly</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium">SLED Portal Scan Frequency</label>
                   <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                     <option>Daily</option>
                     <option selected>Twice Weekly (Mon, Thu)</option>
                     <option>Weekly</option>
                   </select>
                 </div>
               </div>
               
               <div className="bg-muted/50 p-4 rounded-md border mt-4">
                 <h4 className="text-sm font-semibold mb-2">Automated Actions on Match (>80% Score)</h4>
                 <ul className="space-y-2">
                   <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> Auto-add to Opportunities Hub</li>
                   <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> Trigger Draft-GPT to generate RFI response</li>
                   <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> Send Email Alert to Team</li>
                 </ul>
               </div>
             </CardContent>
             <CardFooter>
               <Button variant="outline">Modify Agent Automation Rules</Button>
             </CardFooter>
          </Card>
        </TabsContent>

        {/* --- WEBHOOKS TABS --- */}
        <TabsContent value="webhooks" className="space-y-6">
           <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Workflow className="h-5 w-5" /> Make.com / n8n Integrations</CardTitle>
               <CardDescription>Connect the Command Center to external automation platforms to handle the actual scraping logic.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">SAM.gov Inbound Webhook URL (Data Ingestion)</label>
                  <div className="flex gap-2">
                    <Input readOnly value="https://api.supabase.co/rest/v1/rpc/ingest_sam_data?apikey=xxx-xxx-xxx" className="bg-muted" />
                    <Button variant="secondary">Copy</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Post JSON data from Make.com to this endpoint to populate the Opportunities Hub.</p>
                </div>
                <div className="space-y-2 mt-6">
                  <label className="text-sm font-medium">Outbound Alert Webhook (Slack/Email)</label>
                  <div className="flex gap-2">
                    <Input defaultValue="https://hook.us1.make.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                    <Button variant="secondary">Update</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Triggered when Hunter-1 finds a &gt;90% match.</p>
                </div>
             </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}