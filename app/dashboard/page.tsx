import { DashboardOverview } from "@/components/dashboard-overview"
import { AdminInputPanel } from "@/components/admin-input-panel"
import { DashboardActionCards } from "@/components/dashboard-action-cards"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <AdminInputPanel />
      <DashboardActionCards />
      <DashboardOverview />
    </div>
  )
}
