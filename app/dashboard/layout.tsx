import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Header } from "@/components/header"
import { DashboardActionButtons } from "@/components/dashboard-action-buttons"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <DashboardActionButtons />
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4">{children}</main>
      </div>
    </div>
  )
}
