"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { BookOpen, Sparkles } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in a real app
    console.log("Form submitted:", formData)
  }

  return (
    <div>    
       <Header/>
       <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] py-12">
       <div className="w-full max-w-md px-8 py-10 bg-white/80 rounded-lg shadow-lg md:mr-12">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h1 className="font-dancing-script text-3xl font-bold tracking-tight text-purple-800">
            Begin Your Magical Journey
          </h1>
          <p className="text-sm text-purple-600">Create an account to start your enchanted reading adventure</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-purple-800">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border-purple-200 focus-visible:ring-purple-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-purple-800">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="magical.reader@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-purple-200 focus-visible:ring-purple-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-purple-800">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              required
              value={formData.password}
              onChange={handleChange}
              className="border-purple-200 focus-visible:ring-purple-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-purple-800">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-purple-200 focus-visible:ring-purple-500"
            />
          </div>
          <Button type="submit" className="w-full rounded-full bg-purple-600 text-white hover:bg-purple-700">
            Create Magical Account
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-purple-700">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-purple-600 hover:text-purple-500 underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block w-full ml-12 max-w-md">
        <div className="relative h-[400px]">
      {/* Image container with more tilt */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-purple-100/80 rounded-lg shadow-lg transform rotate-[10deg]">
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src="/assets/images/il_fullxfull.5899612498_gs22.jpg" 
        alt="Your description" 
        className="w-full h-full object-cover" 
      />
    </div>
  </div>

          <div className="absolute left-0 bottom-[-100px] w-[350px] bg-white/90 rounded-lg p-4 shadow-lg">
          <p className="text-purple-700 text-center italic text-sm">"Books are a uniquely portable magic."</p>
            <p className="text-purple-600 text-center text-xs mt-1">- Stephen King</p>
          </div>

           {/* Sparkles moved lower */}
           <div className="absolute left-[-5%] top-[-35%] w-[100px] h-[100px]">
             <Sparkles className="h-full w-full text-purple-400 opacity-70" />
           </div>
         
          
        </div>
      </div>
      </div>
      <Footer/>
    </div>

  )
}
