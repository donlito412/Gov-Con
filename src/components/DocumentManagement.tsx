"use client"

import * as React from "react"
import { 
  FileText, 
  Search, 
  Upload, 
  FolderPlus, 
  Folder,
  MoreVertical,
  Download,
  Eye,
  FileSearch,
  CheckCircle2
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
    { name: "Active Bids", count: 12 },
    { name: "Submitted Bids", count: 8 },
    { name: "Contracts Won", count: 4 },
    { name: "Compliance Docs", count: 24 },
    { name: "Supplier Catalogs", count: 15 },
    { name: "Certifications", count: 6 },
  ]

  const files = [
    { name: "capability-statement-2024.pdf", size: "1.2 MB", type: "PDF", date: "2024-05-10", status: "Verified" },
    { name: "sam-registration-renewal.pdf", size: "2.4 MB", type: "PDF", date: "2024-04-15", status: "Active" },
    { name: "pricing-sheet-grainger.xlsx", size: "450 KB", type: "XLSX", date: "2024-05-12", status: "New" },
  ]

  return (
    <div className="flex h-full overflow-hidden">
      <div className="w-64 border-r p-6 space-y-6 overflow-y-auto scrollbar-hide">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Documents</h2>
          <p className="text-xs text-muted-foreground mt-1">Managed AI File Storage</p>
        </div>

        <div className="space-y-1">
          {folders.map((folder, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 cursor-pointer group transition-all">
              <div className="flex items-center gap-3">
                <Folder size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{folder.name}</span>
              </div>
              <span className="text-[10px] bg-accent px-1.5 py-0.5 rounded text-muted-foreground">{folder.count}</span>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full justify-start gap-2 border-dashed border-2 hover:border-primary/50">
          <FolderPlus size={16} /> New Folder
        </Button>
      </div>

      <div className="flex-1 space-y-6 p-8 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="AI OCR Search across all documents..." className="pl-9" />
          </div>
          <Button>
            <Upload size={16} className="mr-2" /> Upload File
          </Button>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Recent Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-accent/50 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded bg-primary/10 text-primary">
                        <FileText size={20} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold leading-none">{file.name}</p>
                        <p className="text-[10px] text-muted-foreground">{file.size} • Uploaded {file.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px]">
                        <CheckCircle2 size={10} className="mr-1" /> {file.status}
                      </Badge>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Eye size={14} /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Download size={14} /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical size={14} /></Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
              <FileSearch size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-blue-500 underline">AI Intelligence Scan Active</p>
              <p className="text-[10px] text-muted-foreground">
                Currently indexing 45 documents for instant AI compliance verification.
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="text-[10px] bg-blue-500/10 text-blue-500 border-blue-500/30 hover:bg-blue-500 hover:text-white">
            Run Scan
          </Button>
        </div>
      </div>
    </div>
  )
}
