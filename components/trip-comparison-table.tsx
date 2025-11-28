"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function TripComparisonTable() {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Feature</TableHead>
            <TableHead>Bali Beach Resort</TableHead>
            <TableHead>Greek Islands Cruise</TableHead>
            <TableHead>Japan Cherry Blossom</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Base Price</TableCell>
            <TableCell>$1,899</TableCell>
            <TableCell>$2,499</TableCell>
            <TableCell>$3,299</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Profit Margin</TableCell>
            <TableCell className="text-green-600">28%</TableCell>
            <TableCell className="text-green-600">32%</TableCell>
            <TableCell className="text-green-600">24%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Audience Interest</TableCell>
            <TableCell>
              <Badge className="bg-green-500">High</Badge>
            </TableCell>
            <TableCell>
              <Badge className="bg-green-500">High</Badge>
            </TableCell>
            <TableCell>
              <Badge className="bg-green-500">Very High</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Risk Level</TableCell>
            <TableCell>
              <Badge variant="outline" className="border-green-500 text-green-600">
                Low
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                Medium
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className="border-green-500 text-green-600">
                Low
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Seasonality</TableCell>
            <TableCell>Off-peak (Apr-May)</TableCell>
            <TableCell>Shoulder (May, Sep)</TableCell>
            <TableCell>Peak (Mar-Apr)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Early Bird Bonus</TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-green-600" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-green-600" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-red-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Vendor Rating</TableCell>
            <TableCell>★★★★☆</TableCell>
            <TableCell>★★★★★</TableCell>
            <TableCell>★★★★☆</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
