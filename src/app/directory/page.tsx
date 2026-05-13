import React from "react"
import { Search, Globe, ShieldCheck } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteCard } from "@/components/SiteCard"

export default function ProcurementDirectory() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            Procurement Directory
          </h2>
          <p className="text-muted-foreground mt-1">
            Centralized access to 40+ government portals with secure credential storage.
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-xl items-center space-x-2 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search portals (e.g., SAM.gov, Georgia, DoD)..." className="pl-8 bg-background" />
        </div>
        <Button type="submit" variant="secondary">Search</Button>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 mb-8">
        <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div>
          <h4 className="text-sm font-semibold text-primary">Secure Vault Active</h4>
          <p className="text-sm text-muted-foreground">
            All portal credentials are encrypted via Supabase before storage. The Command Center agents can auto-login to these portals to scrape bids on your behalf.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-6 lg:w-[800px] mb-8">
          <TabsTrigger value="all">All Portals</TabsTrigger>
          <TabsTrigger value="federal">Federal</TabsTrigger>
          <TabsTrigger value="state">SLED (State/Local)</TabsTrigger>
          <TabsTrigger value="ai">AI / Tech</TabsTrigger>
          <TabsTrigger value="realestate">Real Estate</TabsTrigger>
          <TabsTrigger value="defense">Defense</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SiteCard 
              name="SAM.gov"
              url="https://sam.gov"
              category="Federal"
              description="The official U.S. government system for contract opportunities, entity registration, and wage determinations."
              searchTips={[
                "Use exact NAICS codes for precision.",
                "Filter by 'Original Response Date' to find new items.",
                "Set up saved searches for daily email alerts."
              ]}
              hasCredentialsStored={true}
            />
            <SiteCard 
              name="GSA eBuy"
              url="https://www.ebuy.gSA.gov/"
              category="Federal"
              description="An electronic Request for Quote (RFQ) / Request for Proposal (RFP) system designed to allow government buyers to request info and quotes."
              searchTips={[
                "You must have a GSA Schedule contract to bid.",
                "Respond within 24-48 hours for best visibility.",
                "Look for 'Sources Sought' to influence RFPs."
              ]}
              hasCredentialsStored={true}
            />
            <SiteCard 
              name="Georgia Procurement Registry"
              url="https://ssl.doas.state.ga.us/gpr/"
              category="State"
              description="The central bid registry for the State of Georgia, including state agencies, colleges, and some local municipalities."
              searchTips={[
                "Search by NIGP commodity codes.",
                "Look for 'Notice of Intent to Award' to find subbing opportunities.",
                "Check the 'Agency' filter to target specific departments."
              ]}
              hasCredentialsStored={false}
            />
            <SiteCard 
              name="eMMA (Maryland)"
              url="https://emma.maryland.gov/"
              category="State"
              description="Maryland's online procurement platform used to connect the vendor community with contracting opportunities."
              searchTips={[
                "Requires separate registration from SAM.",
                "Check the 'Small Business Reserve' indicator."
              ]}
              hasCredentialsStored={false}
            />
            <SiteCard 
              name="DIBBS (Defense Logistics Agency)"
              url="https://www.dibbs.bsm.dla.mil/"
              category="Defense"
              description="DLA Internet Bid Board System for automated and manual solicitations, RFQs, and RFPs."
              searchTips={[
                "Search by NSN (National Stock Number).",
                "Understand the Automated Evaluation system.",
                "Requires a CAGE code to access."
              ]}
              hasCredentialsStored={true}
            />
            <SiteCard 
              name="GovWin (GSA)"
              url="https://govwin.com/"
              category="Federal"
              description="Deltek GovWin IQ is an intelligence platform for finding opportunities before they hit SAM.gov."
              searchTips={[
                "Track incumbent contracts expiring in 12-18 months.",
                "Use the 'Teaming' section to find Primes.",
                "Set up agents to scrape the daily feed."
              ]}
              hasCredentialsStored={true}
            />
            <SiteCard 
              name="Atlanta Public Schools Procurement"
              url="https://www.atlantapublicschools.us/Page/23447"
              category="Education"
              description="Bidding portal specifically for K-12 education contracts in the Atlanta district."
              searchTips={[
                "Focus on E-Rate funding cycles (Jan-March).",
                "Look for facilities and IT infrastructure bids."
              ]}
              hasCredentialsStored={false}
            />
            <SiteCard 
              name="NASA SEWP"
              url="https://www.sewp.nasa.gov/"
              category="AI / Tech"
              description="Solutions for Enterprise-Wide Procurement is a GWAC providing IT products and services to all Federal Agencies."
              searchTips={[
                "Must be a SEWP contract holder to prime.",
                "Excellent portal for finding VAR (Value Added Reseller) opportunities."
              ]}
              hasCredentialsStored={false}
            />
          </div>
        </TabsContent>

        <TabsContent value="federal" className="space-y-4">
           {/* Filtering logic would normally go here, but for layout purposes we'll just show the UI structure */}
           <div className="text-sm text-muted-foreground mt-4">
              Showing Federal portals...
           </div>
        </TabsContent>
        {/* Other TabsContents would follow the same pattern */}
      </Tabs>
    </div>
  )
}