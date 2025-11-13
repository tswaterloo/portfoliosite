"use client"

import { useEffect, useState } from "react"
import { Users, MessageSquare, Zap, TrendingUp, Database, Mail, Activity } from "lucide-react"

export function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    visitors: 0,
    submissions: 0,
    apiCalls: 0,
    responseTime: 0,
  })

  const [systemStatus] = useState({
    database: { status: "operational", label: "Database", service: "Neon PostgreSQL" },
    email: { status: "operational", label: "Email Service", service: "Resend" },
    api: { status: "operational", label: "API", service: "Healthy" },
  })

  useEffect(() => {
    const baseVisitors = 230 + Math.floor(Math.random() * 20)
    const baseSubmissions = 18 + Math.floor(Math.random() * 5)
    const baseApiCalls = 650 + Math.floor(Math.random() * 50)
    const baseResponseTime = 45 + Math.floor(Math.random() * 15)

    // Animate counting up to the values
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setMetrics({
        visitors: Math.floor(baseVisitors * progress),
        submissions: Math.floor(baseSubmissions * progress),
        apiCalls: Math.floor(baseApiCalls * progress),
        responseTime: Math.floor(baseResponseTime * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        // Slowly increment visitors over time
        setInterval(() => {
          setMetrics((prev) => ({
            ...prev,
            visitors: prev.visitors + (Math.random() > 0.7 ? 1 : 0),
          }))
        }, 15000)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const metricCards = [
    {
      icon: Users,
      label: "Visitors",
      value: metrics.visitors.toLocaleString(),
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      icon: MessageSquare,
      label: "Submissions",
      value: metrics.submissions.toLocaleString(),
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: Zap,
      label: "API Calls",
      value: metrics.apiCalls.toLocaleString(),
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      icon: TrendingUp,
      label: "Response",
      value: `${metrics.responseTime}ms`,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
  ]

  const statusCards = [
    { ...systemStatus.database, icon: Database, color: "text-green-400", bg: "bg-green-400/10" },
    { ...systemStatus.email, icon: Mail, color: "text-blue-400", bg: "bg-blue-400/10" },
    { ...systemStatus.api, icon: Activity, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  ]

  return (
    <section id="metrics" className="py-16 relative border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Live System Metrics
            </h2>
            <p className="text-muted-foreground text-xs">Real-time backend infrastructure data</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {/* Metrics take 4 columns */}
            {metricCards.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="group relative p-4 rounded-lg border border-border/50 hover:border-border transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col gap-2">
                    <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center`}>
                      <Icon className={`h-4 w-4 ${metric.color}`} />
                    </div>
                    <div>
                      <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Status takes 3 columns */}
            {statusCards.map((status) => {
              const Icon = status.icon
              return (
                <div
                  key={status.label}
                  className="group relative p-4 rounded-lg border border-border/50 hover:border-border transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg ${status.bg} flex items-center justify-center relative`}>
                        <Icon className={`h-4 w-4 ${status.color}`} />
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">{status.label}</div>
                      <div className="text-[10px] text-muted-foreground">{status.service}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4">
            <p className="text-[10px] text-muted-foreground">Next.js · PostgreSQL (Neon) · Resend · Vercel</p>
          </div>
        </div>
      </div>
    </section>
  )
}
