"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc"
import { LuLuggage } from "react-icons/lu"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    setError("")

    // In a real implementation, this would connect to Google OAuth
    // For demo purposes, we're simulating authentication for joelfrenette@gmail.com
    setTimeout(() => {
      setIsLoading(false)
      // In a real implementation, you would verify the email from Google OAuth
      const userEmail = "joelfrenette@gmail.com" // This would come from OAuth

      if (userEmail === "joelfrenette@gmail.com") {
        router.push("/dashboard")
      } else {
        setError("Access denied. This platform is only available to authorized administrators.")
      }
    }, 1500)
  }

  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <div className="flex justify-center">
          <LuLuggage className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl">TRIP-ANALYZER.COM</CardTitle>
        <CardDescription>Admin-only dashboard for travel trend analysis and trip planning</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button variant="outline" className="w-full bg-transparent" onClick={handleGoogleLogin} disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></span>
              Authenticating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <FcGoogle className="h-5 w-5" />
              Sign in with Google (joelfrenette@gmail.com)
            </span>
          )}
        </Button>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground text-center">
        This platform is for authorized admin use only.
      </CardFooter>
    </Card>
  )
}
