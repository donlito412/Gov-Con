import React from "react"
import { Building2, FileSpreadsheet, MapPin, Phone, Mail, Award, CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export interface SupplierCardProps {
  name: string
  type: "Manufacturer" | "Distributor" | "Service Provider"
  paymentTerms: "Net 30" | "Net 60" | "Due on Receipt"
  location: string
  contactEmail: string
  contactPhone: string
  certifications: string[]
  catalogLink?: string
}

export function SupplierCard({
  name,
  type,
  paymentTerms,
  location,
  contactEmail,
  contactPhone,
  certifications,
  catalogLink
}: SupplierCardProps) {
  
  const getTermsColor = (term: string) => {
    switch(term) {
      case "Net 30": return "bg-green-500/10 text-green-500"
      case "Net 60": return "bg-blue-500/10 text-blue-500"
      case "Due on Receipt": return "bg-destructive/10 text-destructive"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className={getTermsColor(paymentTerms)}>
                {paymentTerms}
              </Badge>
              <Badge variant="secondary">{type}</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">{name}</CardTitle>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-1">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" />
            <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">{contactEmail}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <a href={`tel:${contactPhone}`} className="hover:text-primary transition-colors">{contactPhone}</a>
          </div>
        </div>

        {certifications.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Award className="h-3 w-3" /> Certifications
            </span>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert, i) => (
                <Badge key={i} variant="outline" className="text-xs py-0">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-primary" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <Separator />
      
      <CardFooter className="pt-4 flex justify-between">
        <Button variant="outline" size="sm" disabled={!catalogLink} className="w-full mr-2">
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          {catalogLink ? "Download Pricing" : "No Catalog Available"}
        </Button>
        <Button size="sm">
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  )
}