"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {  BookOpen, Sparkles, Stars, Moon } from "lucide-react"
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
       <div className="w-full flex flex-col md:flex-row items-start justify-center bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100 min-h-[calc(100vh-2rem)] py-24">
      <div className="w-full max-w-lg px-10 py-12  backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 md:mr-8 relative overflow-hidden">
      {/* Mystical decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 rounded-t-3xl"></div>
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>

        <div className="relative">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="font-dancing-script text-3xl font-bold tracking-tight text-purple-800">
              Begin Your Magical Journey
            </h1>
            <p className="text-sm text-purple-600">Create an account to start your enchanted reading adventure</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-purple-800 flex items-center">
                <span>Full Name</span>
                <div className="ml-2 h-px flex-1 bg-purple-200"></div>
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-purple-200 bg-white opacity-50  focus-visible:ring-purple-500 rounded-md pl-8"
                />
                <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-800 flex items-center">
                <span>Email</span>
                <div className="ml-2 h-px flex-1 bg-purple-200"></div>
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="magical.reader@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-purple-200 bg-white opacity-50 focus-visible:ring-purple-500 rounded-md pl-8"
                />
                <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-purple-800 flex items-center">
                <span>Password</span>
                <div className="ml-2 h-px flex-1 bg-purple-200"></div>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="border-purple-200 bg-white opacity-50 focus-visible:ring-purple-500 rounded-md pl-8"
                />
                <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-purple-800 flex items-center">
                <span>Confirm Password</span>
                <div className="ml-2 h-px flex-1 bg-purple-200"></div>
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-purple-200 bg-white opacity-50 focus-visible:ring-purple-500 rounded-md pl-8"
                />
                <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
              </div>
            </div>
<Button
  type="submit"
  className="w-full bg-blue-300 hover:bg-blue-200 text-purple-900 font-bold rounded-lg relative overflow-hidden group px-8 py-2 transition-all duration-300"
>
  <span className="relative z-10">Sign Up</span>

  {/* Hover gradient */}
  <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

  {/* Sparkles on hover */}
  <Sparkles className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

          {/* Mystical decorative elements */}
     <div className="absolute bottom-4 right-4 opacity-20">
               <Stars className="h-6 w-6 text-purple-600" />
             </div>
           </div>
         </div>
   
         <div className="hidden md:block w-full  ml-36 max-w-md">
  <div className="relative h-[600px]"> {/* Increased height */}
    {/* Image container with more tilt */}
    <div className="absolute right-0 top-[55%] -translate-y-1/2 w-[500px] h-[600px] bg-purple-100/80 rounded-lg shadow-lg transform rotate-[10deg]"> {/* Increased width and height */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/assets/images/il_fullxfull.5899612498_gs22.jpg" 
          alt="Your description" 
          className="w-full h-full rounded-2xl object-cover" 
        />
      </div>
    </div>

  <div className="absolute left-[-99px] bottom-[-20px] w-[350px] bg-white/90 rounded-lg p-4 shadow-lg">
  <p className="text-purple-700 text-center italic text-sm">"Books are a uniquely portable magic."</p>
            <p className="text-purple-600 text-center text-xs mt-1">- Stephen King</p>
          </div>

           {/* Sparkles moved lower */}
           <div className="absolute left-[-12%] top-[-10%] w-[100px] h-[100px]">
             <Sparkles className="h-full w-full text-purple-400 opacity-70" />
           </div>
         
          
        </div>
      </div>
      </div>
      <Footer/>
    </div>

  )
}
