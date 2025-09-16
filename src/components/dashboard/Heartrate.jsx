'use client'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '../ui/chart'
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  Area as ReArea
} from 'recharts'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const chartConfig = {
  HeartRate: {
    label: "Heart Rate",
    color: "var(--chart-2)",
  },
}

export default function HeartRateChart() {
  const [heartRate, setHeartRate] = useState([])

  useEffect(() => {
    const interval = setInterval(async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await fetch('http://127.0.0.1:8000/device_data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            lat: 12.17,
            lng: 77.854,
          })
        })
        const data = await res.json()

        // Append the new data to existing chart, keep last 20 points
        setHeartRate(prev => [...prev, data].slice(-20))

      } catch (error) {
        console.log("Error", error)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1 className="text-lg font-semibold mb-4 text-white">Heart Rate Data</h1>
      <ChartContainer config={chartConfig}>
        <AreaChart data={heartRate} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(timestamp) => dayjs(timestamp).format('HH:mm:ss')}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ReArea
            type="monotone"
            dataKey="heartbeat"
            stroke={chartConfig.HeartRate.color}
            fill={chartConfig.HeartRate.color + "33"}
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
