import React from "react"
import { AlertCircle, ArrowUpRight, CheckCircle2, Clock, DollarSign, Target, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Opportunities</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.2M</div>
            <p className="text-xs text-muted-foreground">Across Federal & SLED</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34%</div>
            <p className="text-xs text-muted-foreground">+4% this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bids Due This Week</CardTitle>
            <Clock className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">3</div>
            <p className="text-xs text-muted-foreground">Requires immediate action</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Active Bids Table */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Active Bids</CardTitle>
            <CardDescription>You have 12 active opportunities in the pipeline.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Agency</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Dept of Defense</TableCell>
                  <TableCell>AI Logistics System</TableCell>
                  <TableCell><Badge variant="secondary">In Progress</Badge></TableCell>
                  <TableCell className="text-right">$1.2M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">City of Atlanta</TableCell>
                  <TableCell>Janitorial Services</TableCell>
                  <TableCell><Badge variant="outline">Reviewing Docs</Badge></TableCell>
                  <TableCell className="text-right">$450K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">GSA</TableCell>
                  <TableCell>IT Staffing Augmentation</TableCell>
                  <TableCell><Badge variant="destructive">Due Today</Badge></TableCell>
                  <TableCell className="text-right">$850K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">FEMA</TableCell>
                  <TableCell>Facility Maintenance</TableCell>
                  <TableCell><Badge className="bg-green-600">Submitted</Badge></TableCell>
                  <TableCell className="text-right">$2.1M</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>AI Insights & Alerts</CardTitle>
            <CardDescription>Automated recommendations from your Hunter Agent.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4 rounded-md border p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 text-destructive" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Missing Compliance Document</p>
                <p className="text-sm text-muted-foreground">
                  The GSA IT Staffing bid is missing the required SAM.gov reps & certs attachment.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-md border p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">New High-Match Bid Found</p>
                <p className="text-sm text-muted-foreground">
                  A new SLED opportunity in Georgia matches 95% of your past performance in Logistics.
                </p>
                <Button variant="link" className="p-0 h-auto font-semibold">View Opportunity <ArrowUpRight className="ml-1 h-3 w-3" /></Button>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-md border p-4">
              <Target className="mt-0.5 h-5 w-5 text-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Supplier Cost Alert</p>
                <p className="text-sm text-muted-foreground">
                  Supplier A's pricing for Janitorial supplies has increased by 5%. Consider updating your City of Atlanta bid.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}