'use client'
import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'

export default function KycCard() {
  const [kycData, setKycData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchKycData = async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await fetch('http://127.0.0.1:8000/kyc_card', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = await res.json()
        setKycData(data)
      } catch (err) {
        console.error("Error fetching KYC data:", err)
        alert("Failed to load KYC data")
      } finally {
        setLoading(false)
      }
    }

    fetchKycData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (!kycData) return <p>No KYC data available</p>

  return (
    <Card className="max-w-md mx-auto mt-6 border border-gray-200 bg-black text-white">
      <CardHeader>
        <CardTitle>KYC Information</CardTitle>
        <CardDescription>Details linked with your account</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <div><strong>Name:</strong> {kycData.name}</div>
        <div><strong>Email:</strong> {kycData.email}</div>
        <div><strong>Aadhar / Passport:</strong> {kycData['aadhar/passport']}</div>
        <div><strong>Trip Timeline:</strong> {kycData.timeline}</div>
        <div><strong>Emergency Contact:</strong> {kycData['emergency contact']}</div>
        <div><strong>Safety Score:</strong> {kycData['safety score']}</div>
        <div>
  <strong>Blockchain ID:</strong> {kycData.id ? kycData.id.slice(0, 5) + "..." : ""}
</div>
      </CardContent>

      <CardFooter>
        <Button className="text-black" variant="outline" onClick={() => alert("KYC verified!")}>
          Verify KYC
        </Button>
      </CardFooter>
    </Card>
  )
}
