'use client'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'

import { useState } from "react"

export default function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [aadhar,setAadhar]=useState("")
    const[tripStart,setTripStart]=useState("")
    const[tripEnd,setTripEnd]=useState("")
    const[emergency,setEmergency]=useState("")
    const router=useNavigate()
    const handleStart=(e)=>{
      const text=e.target.value
      setTripStart(text)
      console.log(text)

    }
    const handleEmergency=(e)=>{
      const text=e.target.value
      setEmergency(text)
      console.log(text)
    }
    const handleEnd=(e)=>{
      const text=e.target.value;
      setTripEnd(text)
      console.log(text)
    }
    const handleAadhar=(e)=>{
      const text=e.target.value;
      setAadhar(text)
      console.log(text)
    }
    const handleName=(e)=>{
      const text=e.target.value
      
      setName(text)
      console.log(text)
    }
    const handleEmail=(e)=>{
        const text=e.target.value
        setEmail(text)
        console.log(text)
    }
    const handlePassword=(e)=>{
        const text=e.target.value
        setPassword(text)
        console.log(text)
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try{
        const res=await fetch('http://127.0.0.1:8000/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":password,
                "emergency_contact":emergency,
                "aadhar_passport":aadhar,
                "trip_start":tripStart,
                "trip_end":tripEnd
            })})
        const data=await res.json()
        console.log("access token is",data.access_token)
        localStorage.setItem("token",data.access_token)
        router('/dashboard')
      }catch(error){
        console.log("error",error)
      }
    }
  return (
    <div className='flex items-center justify-center mt-32'>
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Enter your Deatils. Already have an account {" "}
          <span className='hover:text-purple-600 font-bold'><Link to="/login">login</Link></span>
        </CardDescription>
       
         
          
        
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                onChange={handleName}
                
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={handleEmail}
                
              />
            </div>
            <div className="grid gap-2 mb-4">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required placeholder="Enter your password" onChange={handlePassword}/>
            </div>
          </div>
            <div className="grid gap-2 mb-4">
              <Label htmlFor="email">Emergency Contact</Label>
              <Input
                id=""
                type=""
                placeholder="Enter your aadhar or passport"
                required
                onChange={handleEmergency}
                
              />
            </div>
          <div className="grid gap-2 mb-4">
              <Label htmlFor="email">Aadhar/Passport</Label>
              <Input
                id="email"
                type=""
                placeholder="Enter your aadhar or passport"
                required
                onChange={handleAadhar}
                
              />
            </div>
            <div className="grid gap-2 mb-4">
              <Label htmlFor="email">Trip start</Label>
              <Input
                id="email"
                type="date"
                placeholder="Enter your trip start date"
                required
                onChange={handleStart}
                
              />
            </div>
              <div className="grid gap-4 mb-4">
              <Label htmlFor="email">Trip end</Label>
              <Input
                id="email"
                type="date"
                placeholder="Enter your trip end date"
                required
                onChange={handleEnd}
                
              />
            </div>
          <div className="flex-col gap-2">
            <Button type="submit" className="w-full">
                Create
            </Button>
            
          </div>
       
        </form>
      </CardContent>
    </Card>
    </div>
  )
}
