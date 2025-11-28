import { AdminInputPanel } from "@/components/admin-input-panel"

export default function InputPanelPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Input Panel</h1>
      <p className="text-muted-foreground">Select a time frame and trip type to trigger research and analysis</p>
      <AdminInputPanel />
    </div>
  )
}
