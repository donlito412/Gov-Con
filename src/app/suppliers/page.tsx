import React from "react"
import { Search, Users, Filter, Plus } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SupplierCard } from "@/components/SupplierCard"

export default function SupplierHub() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Supplier & Vendor Hub
          </h2>
          <p className="text-muted-foreground mt-1">
            Manage your network of manufacturers, distributors, and service providers.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Add Vendor</Button>
        </div>
      </div>

      <div className="flex w-full max-w-xl items-center space-x-2 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search by name, NAICS, capabilities..." className="pl-8 bg-background" />
        </div>
        <Button type="submit" variant="secondary">Search</Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:w-[600px] mb-8">
          <TabsTrigger value="all">All Vendors</TabsTrigger>
          <TabsTrigger value="net30">Net 30</TabsTrigger>
          <TabsTrigger value="net60">Net 60</TabsTrigger>
          <TabsTrigger value="distributors">Distributors</TabsTrigger>
          <TabsTrigger value="manufacturers">Manufacturers</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SupplierCard 
              name="Global IT Solutions Inc."
              type="Service Provider"
              paymentTerms="Net 30"
              location="Reston, VA"
              contactEmail="govsales@globalit.com"
              contactPhone="(555) 123-4567"
              certifications={["ISO 9001", "CMMI Level 3", "SBA 8(a)"]}
              catalogLink="/docs/global-it-rates-2024.pdf"
            />
            <SupplierCard 
              name="Apex Industrial Supply"
              type="Distributor"
              paymentTerms="Net 60"
              location="Chicago, IL"
              contactEmail="quotes@apexsupply.com"
              contactPhone="(800) 999-8888"
              certifications={["ISO 14001", "WOSB"]}
              catalogLink="/docs/apex-catalog-2024.xlsx"
            />
            <SupplierCard 
              name="DefenseTech Manufacturing"
              type="Manufacturer"
              paymentTerms="Due on Receipt"
              location="Huntsville, AL"
              contactEmail="contracts@defensetech.mil"
              contactPhone="(256) 555-0100"
              certifications={["AS9100", "ITAR Registered", "SDVOSB"]}
            />
            <SupplierCard 
              name="CleanSweep Facilities"
              type="Service Provider"
              paymentTerms="Net 30"
              location="Atlanta, GA"
              contactEmail="bids@cleansweep.net"
              contactPhone="(404) 555-9922"
              certifications={["MBE", "DBE"]}
              catalogLink="/docs/cleansweep-pricing.pdf"
            />
            <SupplierCard 
              name="National Office Distributors"
              type="Distributor"
              paymentTerms="Net 60"
              location="Denver, CO"
              contactEmail="sales@nationaloffice.com"
              contactPhone="(888) 123-9000"
              certifications={["GSA Schedule 70"]}
              catalogLink="/docs/national-office-catalog.csv"
            />
          </div>
        </TabsContent>

        <TabsContent value="net30" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SupplierCard 
              name="Global IT Solutions Inc."
              type="Service Provider"
              paymentTerms="Net 30"
              location="Reston, VA"
              contactEmail="govsales@globalit.com"
              contactPhone="(555) 123-4567"
              certifications={["ISO 9001", "CMMI Level 3", "SBA 8(a)"]}
              catalogLink="/docs/global-it-rates-2024.pdf"
            />
            <SupplierCard 
              name="CleanSweep Facilities"
              type="Service Provider"
              paymentTerms="Net 30"
              location="Atlanta, GA"
              contactEmail="bids@cleansweep.net"
              contactPhone="(404) 555-9922"
              certifications={["MBE", "DBE"]}
              catalogLink="/docs/cleansweep-pricing.pdf"
            />
          </div>
        </TabsContent>

        <TabsContent value="net60" className="space-y-4">
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SupplierCard 
              name="Apex Industrial Supply"
              type="Distributor"
              paymentTerms="Net 60"
              location="Chicago, IL"
              contactEmail="quotes@apexsupply.com"
              contactPhone="(800) 999-8888"
              certifications={["ISO 14001", "WOSB"]}
              catalogLink="/docs/apex-catalog-2024.xlsx"
            />
            <SupplierCard 
              name="National Office Distributors"
              type="Distributor"
              paymentTerms="Net 60"
              location="Denver, CO"
              contactEmail="sales@nationaloffice.com"
              contactPhone="(888) 123-9000"
              certifications={["GSA Schedule 70"]}
              catalogLink="/docs/national-office-catalog.csv"
            />
          </div>
        </TabsContent>

        <TabsContent value="distributors" className="space-y-4">
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SupplierCard 
              name="Apex Industrial Supply"
              type="Distributor"
              paymentTerms="Net 60"
              location="Chicago, IL"
              contactEmail="quotes@apexsupply.com"
              contactPhone="(800) 999-8888"
              certifications={["ISO 14001", "WOSB"]}
              catalogLink="/docs/apex-catalog-2024.xlsx"
            />
            <SupplierCard 
              name="National Office Distributors"
              type="Distributor"
              paymentTerms="Net 60"
              location="Denver, CO"
              contactEmail="sales@nationaloffice.com"
              contactPhone="(888) 123-9000"
              certifications={["GSA Schedule 70"]}
              catalogLink="/docs/national-office-catalog.csv"
            />
          </div>
        </TabsContent>

        <TabsContent value="manufacturers" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
             <SupplierCard 
              name="DefenseTech Manufacturing"
              type="Manufacturer"
              paymentTerms="Due on Receipt"
              location="Huntsville, AL"
              contactEmail="contracts@defensetech.mil"
              contactPhone="(256) 555-0100"
              certifications={["AS9100", "ITAR Registered", "SDVOSB"]}
            />
          </div>
        </TabsContent>

      </Tabs>
    </div>
  )
}