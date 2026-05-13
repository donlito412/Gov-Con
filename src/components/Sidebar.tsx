"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Search, 
  Globe, 
  Building2, 
  Database, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell,
  SearchIcon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab, className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "opportunities", label: "Opportunities Hub", icon: Globe },
    { id: "directory", label: "Procurement Directory", icon: Search },
    { id: "suppliers", label: "Supplier & Vendor Hub", icon: Database },
    { id: "ai-assistant", label: "AI Assistant Center", icon: Cpu },
    { id: "compliance", label: "Compliance Officer", icon: ShieldCheck },
    { id: "documents", label: "Document Management", icon: FileText },
    { id: "crm", label: "CRM & Networking", icon: Users },
  ]

  return (
    <div className={cn(
      "relative flex flex-col border-r bg-card text-card-foreground transition-all duration-300",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="flex h-16 items-center border-b px-4 py-2">
        {!isCollapsed && (
          <div className="flex items-center gap-2 font-bold tracking-tight text-xl text-primary">
            <div className="bg-primary text-primary-foreground p-1 rounded-lg">
              <Cpu size={20} />
            </div>
            <span>GOVCON AI</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn(
                "justify-start gap-3",
                isCollapsed ? "px-2" : "px-4"
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={20} className={cn(activeTab === item.id ? "text-primary" : "text-muted-foreground")} />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn("w-full justify-start gap-3 px-2", isCollapsed ? "px-1" : "")}>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback className="bg-primary/10 text-primary">UF</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-col items-start text-sm">
                  <span className="font-semibold">User Admin</span>
                  <span className="text-xs text-muted-foreground">Premium Account</span>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut size={16} className="mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}