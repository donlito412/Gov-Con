"use client"

import * as React from "react"
import { 
  FileText, 
  Search, 
  Upload, 
  FolderPlus, 
  Folder, 
  MoreVertical,
  ShieldCheck,
  FileSearch,
  HardDrive
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
import { Badge } from "@/components/ui/badge"

export function DocumentManagement() {
  const folders = [
    { name: "Active Bids", count: 0 },
    { name: "Submitted Bids", count: 0 },
    { name: "Contracts Won", count: 0 },
    { name: "Compliance Docs", count: 0 },
    { name: "Supplier Catalogs", count: 0 },
    { name: "Certifications", count: 0 },
  ]

  return (
    <div className="p-8 space-y-8 h-full flex flex-col overflow-hidden relative z-10 pointer-events-auto">
      <div className="shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Document Management</h2>
          <p className="text-muted-foreground text-sm mt-1">Secure repository for your capability statements, proposals, and compliance files.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-bold uppercase text-[10px]">
            <FolderPlus size={16} className="mr-2" /> New Folder
          </Button>
          <Button size="sm" className="font-bold uppercase text-[10px] shadow-lg shadow-primary/20">
            <Upload size={16} className="mr-2" /> Upload File
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="AI OCR Search across all documents..." className="pl-9 bg-card/50" />
        </div>
      </div>

      <div className="flex-1 flex gap-8 overflow-hidden">
        {/* Folders Sidebar */}
        <div className="w-64 space-y-2 overflow-y-auto pr-2 scrollbar-hide">
          {folders.map((folder, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-border/50 hover:bg-card/50 cursor-pointer transition-all group">
              <div className="flex items-center gap-3">
                <Folder size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
                <span className="text-sm font-bold">{folder.name}</span>
              </div>
              <span className="text-[10px] font-bold bg-accent/50 px-1.5 py-0.5 rounded-md text-muted-foreground">{folder.count}</span>
            </div>
          ))}
        </div>

        {/* File Grid - Scrubbed of placeholders */}
        <div className="flex-1 flex flex-col space-y-4">
          <div className="flex-1 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center p-12 space-y-4 bg-accent/5">
            <div className="p-4 rounded-full bg-primary/5 text-primary/40">
              <HardDrive size={40} />
            </div>
            <div className="max-w-xs">
              <p className="text-sm font-bold uppercase tracking-widest">Vault is Empty</p>
              <p className="text-xs text-muted-foreground mt-1">No documents have been uploaded yet. Start by dragging files here or creating a new folder.</p>
            </div>
            <Button variant="outline" size="sm" className="mt-4">
              Browse Files
            </Button>
          </div>

          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <FileSearch size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-tight">AI Intelligence Scan Active</p>
                <p className="text-[10px] text-muted-foreground">The system is ready to index your files for instant compliance verification.</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-[10px] uppercase font-bold border-blue-500/30 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
              Run Scan
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
