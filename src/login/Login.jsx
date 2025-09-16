'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handlemail = (e) => setEmail(e.target.value)
  const handlepassword = (e) => setPassword(e.target.value)

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username: email, password:password })
      })

      const data = await res.json()
      console.log("JWT Token", data.access_token)
      localStorage.setItem("token", data.access_token)

      navigate("/dashboard") 
    } catch (error) {
      console.log("error", error)
      alert("Invalid Credentials")
    }
  }

  return (
    <Card className="w-full max-w-sm mx-auto mt-20 border-gray-700">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account Dont Have an account ? {" "}
          <Link to="/signup"><span className="hover:text-purple-500">signup</span></Link>
        </CardDescription>
          
        
        
      </CardHeader>
      <CardContent>
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={handlemail}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={handlepassword}
              />
            </div>
          </div>
          <div className="mt-6">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
