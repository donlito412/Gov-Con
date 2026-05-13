"use client"

import * as React from "react"
import { Sidebar } from "@/components/Sidebar"
import { DashboardContent } from "@/components/DashboardContent"
import { OpportunitiesHub } from "@/components/OpportunitiesHub"
import { ProcurementDirectory } from "@/components/ProcurementDirectory"
import { SupplierHub } from "@/components/SupplierHub"
import { AIAssistantCenter } from "@/components/AIAssistantCenter"
import { CRM } from "@/components/CRM"
import { DocumentManagement } from "@/components/DocumentManagement"
import { Bell, SearchIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardContent />
      case "opportunities": return <OpportunitiesHub />
      case "directory": return <ProcurementDirectory />
      case "suppliers": return <SupplierHub />
      case "ai-assistant": return <AIAssistantCenter />
      case "crm": return <CRM />
      case "documents": return <DocumentManagement />
      case "compliance": return <div className="p-8 text-muted-foreground">Compliance Module Coming Soon</div>
      default: return <DashboardContent />
    }
  }

  return (
    <div className="flex h-screen w-full bg-background text-foreground overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Global Header */}
        <header className="h-16 border-b flex items-center justify-between px-8 bg-card/30 backdrop-blur-md shrink-0">
          <div className="relative w-96">
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Global search across AI Operating System..." className="pl-9 bg-accent/30 border-none shadow-none focus-visible:ring-1" />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} className="text-muted-foreground" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings size={20} className="text-muted-foreground" />
            </Button>
            <div className="h-8 w-px bg-border mx-2" />
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-xs font-bold leading-none">Command Center</p>
                <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-tighter">System Online</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area - This is where the scroll happens */}
        <main className="flex-1 overflow-y-auto bg-background/50">
          <div className="min-h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}