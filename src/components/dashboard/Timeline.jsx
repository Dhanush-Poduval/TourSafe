'use client'
import React, { useEffect, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area" 
import { Card } from "@/components/ui/card"

export default function Timeline() {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const interval = setInterval(async () => {
      const token = localStorage.getItem("token")
      try {
        const res = await fetch("http://127.0.0.1:8000/alert", {
          headers: { Authorization: `Bearer ${token}` }
        })
        const data = await res.json()
        setAlerts(data)
      } catch (err) {
        console.error("Error fetching alerts:", err)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-4 w-full max-w-md bg-black text-gray-100 shadow-md border-black">
      <h2 className="text-lg font-semibold mb-4 text-red-400">Alerts Timeline</h2>
      <ScrollArea className="h-80">
        <div>
          {alerts.length === 0 && (
            <p className="text-sm text-gray-400">No alerts yet.</p>
          )}
          {alerts.map((alert) => (
            <div key={alert.id} className="mb-4">
              <div className="p-3 bg-gray-800 rounded-md shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-red-400">{alert.type}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm text-gray-200">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
