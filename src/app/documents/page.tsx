import React from "react"
import { Files, Upload, Search, Filter, FileText, History, Tag, ScanText, MoreVertical, Download, Eye, Trash2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function DocumentManagement() {
  const documents = [
    {
      id: "DOC-2024-001",
      name: "Capability_Statement_Federal_IT_v2.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadedAt: "Oct 12, 2024",
      version: "v2.1",
      status: "OCR Complete",
      tags: ["Marketing", "Federal", "IT", "ISO-27001"],
      aiSummary: "Updated federal capability statement highlighting new NIST 800-171 compliance and recent FEMA past performance."
    },
    {
      id: "DOC-2024-002",
      name: "Global_IT_Pricing_Schedule_2024.xlsx",
      type: "Excel",
      size: "1.1 MB",
      uploadedAt: "Oct 10, 2024",
      version: "v1.0",
      status: "Indexed",
      tags: ["Pricing", "Supplier", "Net 30", "Hardware"],
      aiSummary: "Extracted 4,200 SKUs. Identified 12% price increase on ruggedized laptops vs 2023 schedule."
    },
    {
      id: "DOC-2024-003",
      name: "RFP_FEMA_FAC_992_Solicitation.pdf",
      type: "PDF",
      size: "8.7 MB",
      uploadedAt: "Oct 08, 2024",
      version: "v1.0",
      status: "OCR Complete",
      tags: ["Solicitation", "FEMA", "Facilities", "Active"],
      aiSummary: "142-page RFP. Extracted 14 key compliance clauses. Identified Section L (Instructions to Offerors) on page 112."
    },
    {
      id: "DOC-2024-004",
      name: "Teaming_Agreement_CleanSweep_Draft.docx",
      type: "Word",
      size: "45 KB",
      uploadedAt: "Oct 05, 2024",
      version: "v4.0 (Draft)",
      status: "Pending Review",
      tags: ["Legal", "Teaming", "Subcontractor", "Draft"],
      aiSummary: "Draft teaming agreement with CleanSweep for the Atlanta Janitorial bid. Missing signature block on page 4."
    },
    {
      id: "DOC-2024-005",
      name: "Past_Performance_Logistics_DOD.pdf",
      type: "PDF",
      size: "5.2 MB",
      uploadedAt: "Sep 28, 2024",
      version: "v1.2",
      status: "OCR Complete",
      tags: ["Past Performance", "DoD", "Logistics", "CPARS"],
      aiSummary: "Compilation of 3 CPARS reports for DLA logistics contracts. Average rating: Exceptional. Ready for inclusion in proposals."
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OCR Complete": return "bg-green-500/10 text-green-500"
      case "Indexed": return "bg-blue-500/10 text-blue-500"
      case "Pending Review": return "bg-yellow-500/10 text-yellow-500"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Files className="h-8 w-8 text-primary" />
            Document Management
          </h2>
          <p className="text-muted-foreground mt-1">
            AI-powered vault for solicitations, proposals, pricing sheets, and compliance docs.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden sm:flex"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
          <Button><Upload className="mr-2 h-4 w-4" /> Upload Document</Button>
        </div>
      </div>

      {/* AI Search Bar */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full">
              <ScanText className="absolute left-3 top-3 h-5 w-5 text-primary" />
              <Input 
                type="search" 
                placeholder="Semantic Search: e.g., 'Find all teaming agreements mentioning ISO 27001' or 'Extract pricing for rugged laptops'..." 
                className="pl-10 py-6 text-base bg-background border-primary/20 focus-visible:ring-primary shadow-sm w-full" 
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto shrink-0">Search Files</Button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Tag className="h-3 w-3" />
            <span>Suggested tags:</span>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Solicitations</Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Past Performance</Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Drafts</Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Compliance</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Document Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Document Name & AI Summary</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary p-2 rounded shrink-0">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-sm leading-none">{doc.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{doc.aiSummary}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1 max-w-[200px]">
                    {doc.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] py-0">{tag}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <History className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">{doc.version}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-xs text-muted-foreground">{doc.uploadedAt}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`text-[10px] ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" /> View Document
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" /> Download ({doc.size})
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <History className="mr-2 h-4 w-4" /> Version History
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}