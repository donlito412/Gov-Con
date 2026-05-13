import React from "react"
import { Search, Filter, Plus } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { OpportunityCard } from "@/components/OpportunityCard"

export default function OpportunitiesHub() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Opportunities Hub</h2>
          <p className="text-muted-foreground">Manage and track government contracts across all sectors.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Add Custom Bid</Button>
        </div>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search solicitations, agencies, or keywords..." className="pl-8" />
        </div>
        <Button type="submit" variant="secondary">Search</Button>
      </div>

      <Tabs defaultValue="federal" className="w-full">
        <TabsList className="grid w-full grid-cols-6 lg:w-[800px] mb-8">
          <TabsTrigger value="federal">Federal</TabsTrigger>
          <TabsTrigger value="state">State</TabsTrigger>
          <TabsTrigger value="local">Local</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="ai">AI / Tech</TabsTrigger>
          <TabsTrigger value="realestate">Real Estate</TabsTrigger>
        </TabsList>

        <TabsContent value="federal" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <OpportunityCard 
              title="Next-Gen Logistics Automation System"
              agency="Department of Defense (DLA)"
              id="SOL-DLA-2024-001"
              dueDate="Nov 15, 2024"
              value="$12.5M - $15M"
              status="Active"
              type="Federal"
              matchScore={94}
              aiSummary="The DLA is seeking a prime contractor to overhaul their supply chain routing using predictive AI models. This aligns strongly with our past performance in predictive logistics, though it requires a Top Secret facility clearance."
              requirements={[
                "Top Secret Facility Clearance",
                "Past performance in DoD logistics > $5M",
                "ISO 27001 Certification"
              ]}
            />
            <OpportunityCard 
              title="Base Facility Maintenance Services"
              agency="Federal Emergency Management Agency (FEMA)"
              id="RFP-FEMA-FAC-992"
              dueDate="Oct 30, 2024"
              value="$4.2M"
              status="Closing Soon"
              type="Federal"
              matchScore={88}
              aiSummary="Comprehensive janitorial and HVAC maintenance for 3 regional FEMA headquarters. High match based on our current subcontractor network in the southeast region."
              requirements={[
                "SBA 8(a) Set-Aside",
                "Minimum 5 years facility management",
                "24/7 on-call availability"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="state" className="space-y-4">
           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <OpportunityCard 
              title="Statewide Highway Traffic Monitoring Integration"
              agency="Georgia Dept. of Transportation"
              id="GDOT-RFP-441-A"
              dueDate="Dec 01, 2024"
              value="$2.8M"
              status="Active"
              type="State"
              matchScore={75}
              aiSummary="Integration of IoT sensors along major state highways to monitor traffic flow and predict congestion. Matches our IT capabilities but lacks alignment with our typical logistics focus."
              requirements={[
                "Georgia Local Business Enterprise",
                "Experience with IoT sensor networks",
                "10% Disadvantaged Business Enterprise goal"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="local" className="space-y-4">
          <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <Search className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="mt-4 text-lg font-semibold">No Local Bids Found</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                Your Hunter Agent is currently scanning local municipal procurement portals. Check back later.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <Search className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="mt-4 text-lg font-semibold">No Education Bids Found</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                You currently have no active filters tracking higher-education or K-12 procurement portals.
              </p>
              <Button variant="outline">Configure SLED Agent</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <OpportunityCard 
              title="Generative AI for Document OCR & Processing"
              agency="Internal Revenue Service (IRS)"
              id="IRS-RFI-AI-002"
              dueDate="Jan 15, 2025"
              value="TBD (RFI Stage)"
              status="Drafting"
              type="AI / Tech"
              matchScore={98}
              aiSummary="The IRS is looking for commercial off-the-shelf (COTS) or custom Generative AI solutions to process millions of handwritten tax forms. This is an exact match for our core Command Center AI architecture. Recommended action: Submit Capability Statement immediately."
              requirements={[
                "FedRAMP High Authorization",
                "Demonstrated 99.9% OCR Accuracy",
                "On-premise deployment capability"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="realestate" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <OpportunityCard 
              title="Downtown Urban Redevelopment & Mixed-Use Project"
              agency="City of Atlanta Urban Development Authority"
              id="COA-RE-2024-08"
              dueDate="Feb 28, 2025"
              value="$45M"
              status="In Review"
              type="Real Estate"
              matchScore={65}
              aiSummary="Major redevelopment project converting 4 city blocks into mixed-use residential and commercial space. We are currently evaluating potential prime construction partners to submit a joint venture bid."
              requirements={[
                "Joint Venture Agreement Required",
                "30% Affordable Housing Allocation",
                "LEED Gold Certification minimum"
              ]}
            />
          </div>
        </TabsContent>

      </Tabs>
    </div>
  )
}