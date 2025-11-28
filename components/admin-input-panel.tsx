"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function AdminInputPanel() {
  const [date, setDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)
  const [isResearchComplete, setIsResearchComplete] = useState(false)

  const handleStartResearch = () => {
    setIsLoading(true)
    // Simulate research process
    setTimeout(() => {
      setIsLoading(false)
      setIsResearchComplete(true)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Input Panel</CardTitle>
        <CardDescription>Select a time frame and trip type to trigger research and analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="date-selection" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="date-selection">Date Selection</TabsTrigger>
            <TabsTrigger value="trip-type">Trip Type</TabsTrigger>
          </TabsList>
          <TabsContent value="date-selection" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="month-year">Select Month/Year</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "MMMM yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="season">Season</Label>
                <Select>
                  <SelectTrigger id="season">
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="winter">Winter</SelectItem>
                    <SelectItem value="spring">Spring</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                    <SelectItem value="fall">Fall</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Trip Duration (Days)</Label>
              <div className="flex items-center space-x-2">
                <Input id="duration" type="number" placeholder="7" min={1} max={30} className="w-20" />
                <span>to</span>
                <Input id="duration-max" type="number" placeholder="14" min={1} max={30} className="w-20" />
                <span>days</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="trip-type" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="trip-category">Trip Category</Label>
                <Select>
                  <SelectTrigger id="trip-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="cruise">Cruise</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Select>
                  <SelectTrigger id="audience">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="families">Families</SelectItem>
                    <SelectItem value="couples">Couples</SelectItem>
                    <SelectItem value="solo">Solo Travelers</SelectItem>
                    <SelectItem value="seniors">Seniors</SelectItem>
                    <SelectItem value="groups">Groups</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget-range">Budget Range (per person)</Label>
              <div className="flex items-center space-x-2">
                <span>$</span>
                <Input id="budget-min" type="number" placeholder="1000" min={100} className="w-24" />
                <span>to</span>
                <span>$</span>
                <Input id="budget-max" type="number" placeholder="5000" min={100} className="w-24" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button onClick={handleStartResearch} disabled={isLoading || !date} className="gap-2">
          {isLoading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
              Processing...
            </>
          ) : (
            <>
              <PlayCircle className="h-4 w-4" />
              {isResearchComplete ? "Research Complete" : "Start Research"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
