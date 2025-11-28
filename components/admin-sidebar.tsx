"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Brain,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  LineChart,
  type LucideIcon,
  MessageSquare,
  PieChart,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"

type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  submenu?: {
    title: string
    href: string
  }[]
}

const researchItems: NavItem[] = [
  {
    title: "Admin Input Panel",
    href: "/dashboard/research/input-panel",
    icon: Settings,
  },
  {
    title: "Web Scraper Engine",
    href: "/dashboard/research/web-scraper",
    icon: Globe,
  },
  {
    title: "Trend & Sentiment",
    href: "/dashboard/research/trend-sentiment",
    icon: TrendingUp,
  },
  {
    title: "Competitor Pricing",
    href: "/dashboard/research/competitor-pricing",
    icon: BarChart3,
  },
  {
    title: "Seasonality Finder",
    href: "/dashboard/research/seasonality",
    icon: LineChart,
  },
  {
    title: "Risk Analyzer",
    href: "/dashboard/research/risk-analyzer",
    icon: PieChart,
  },
  {
    title: "Contract Analysis",
    href: "/dashboard/research/contract-analysis",
    icon: Database,
  },
  {
    title: "Trip Builder",
    href: "/dashboard/research/trip-builder",
    icon: Settings,
  },
]

const profitabilityItems: NavItem[] = [
  {
    title: "Profit Estimator",
    href: "/dashboard/profitability/estimator",
    icon: BarChart3,
  },
  {
    title: "Marketing ROI",
    href: "/dashboard/profitability/marketing-roi",
    icon: TrendingUp,
  },
  {
    title: "Promo Timeline",
    href: "/dashboard/profitability/promo-timeline",
    icon: LineChart,
  },
  {
    title: "Audience Match",
    href: "/dashboard/profitability/audience-match",
    icon: Users,
  },
  {
    title: "Engagement Heatmap",
    href: "/dashboard/profitability/engagement",
    icon: PieChart,
  },
]

const audienceItems: NavItem[] = [
  {
    title: "Email Behavior",
    href: "/dashboard/audience/email-behavior",
    icon: MessageSquare,
  },
  {
    title: "Quiz Funnel Builder",
    href: "/dashboard/audience/quiz-funnel",
    icon: Brain,
  },
  {
    title: "Social Listening",
    href: "/dashboard/audience/social-listening",
    icon: Globe,
  },
  {
    title: "Interest Tracking",
    href: "/dashboard/audience/interest-tracking",
    icon: TrendingUp,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(true)

  return (
    <div
      className={cn(
        "group relative flex h-screen flex-col border-r bg-background transition-all duration-300",
        expanded ? "w-64" : "w-16",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link
          href="https://tripanalyzer.vercel.app"
          className={cn("flex items-center gap-2 transition-all duration-300", expanded ? "opacity-100" : "opacity-0")}
        >
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-semibold">TRIP-ANALYZER.COM</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)} className="h-8 w-8">
          {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        <div className="px-3 py-2">
          <h3
            className={cn(
              "mb-2 text-xs font-semibold text-muted-foreground transition-all duration-300",
              expanded ? "text-left" : "text-center",
            )}
          >
            {expanded ? "RESEARCH & ANALYSIS" : "R"}
          </h3>
          <nav className="space-y-1">
            {researchItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-muted",
                  pathname === item.href ? "bg-muted text-foreground" : "text-muted-foreground",
                  !expanded && "justify-center px-0",
                )}
              >
                <item.icon className="h-5 w-5" />
                {expanded && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
        <div className="px-3 py-2">
          <h3
            className={cn(
              "mb-2 text-xs font-semibold text-muted-foreground transition-all duration-300",
              expanded ? "text-left" : "text-center",
            )}
          >
            {expanded ? "PROFITABILITY" : "P"}
          </h3>
          <nav className="space-y-1">
            {profitabilityItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-muted",
                  pathname === item.href ? "bg-muted text-foreground" : "text-muted-foreground",
                  !expanded && "justify-center px-0",
                )}
              >
                <item.icon className="h-5 w-5" />
                {expanded && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
        <div className="px-3 py-2">
          <h3
            className={cn(
              "mb-2 text-xs font-semibold text-muted-foreground transition-all duration-300",
              expanded ? "text-left" : "text-center",
            )}
          >
            {expanded ? "AUDIENCE INTEREST" : "A"}
          </h3>
          <nav className="space-y-1">
            {audienceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-muted",
                  pathname === item.href ? "bg-muted text-foreground" : "text-muted-foreground",
                  !expanded && "justify-center px-0",
                )}
              >
                <item.icon className="h-5 w-5" />
                {expanded && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
