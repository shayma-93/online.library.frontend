"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import {  BookOpen, Sparkles, Stars, Moon } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in a real app
    console.log("Form submitted:", formData)
  }

  return (
    <div>   
      <Header/>
      <div className="w-full flex flex-col md:flex-row items-start justify-center bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100 min-h-[calc(100vh-2rem)] py-36 bg-cover bg-center">
      <div className="w-full max-w-lg px-10 py-12  backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 md:mr-8 relative overflow-hidden">
      {/* Mystical decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 rounded-t-3xl"></div>
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>

        <div className="relative">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="font-dancing-script text-3xl font-bold tracking-tight text-purple-800">
              Welcome Back, Enchanted Reader
            </h1>
            <p className="text-sm text-purple-600">Sign in to continue your magical reading journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-purple-800 flex items-center">
                  <span>Password</span>
                  <div className="ml-2 h-px flex-1 bg-purple-200"></div>
                </Label>
                <Link href="/forgot-password" className="text-xs text-purple-600 hover:text-purple-500 underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="border-purple-200 bg-white opacity-50 focus-visible:ring-purple-500 rounded-md pl-8"
                />
                <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={handleCheckboxChange}
                className="border-purple-300 bg-white opacity-50  data-[state=checked]:bg-purple-600 rounded-sm"
              />
              <Label
                htmlFor="rememberMe"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-purple-700"
              >
                Remember me
              </Label>
            </div>

            <Button
  type="submit"
  className="w-full bg-purple-400 hover:bg-purple-300 text-blue-900 font-bold rounded-lg relative overflow-hidden group px-8 py-2"
>
  <span className="relative z-10">Sign In</span>

  {/* Hover gradient background */}
  <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>

  {/* Sparkles on hover */}
  <Sparkles className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>



          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-purple-700">
              Don't have an account yet?{" "}
              <Link href="/sign-up" className="font-medium text-purple-600 hover:text-purple-500 underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Mystical decorative elements */}
          <div className="absolute bottom-4 right-4 opacity-20">
            <Stars className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full ml-12 max-w-md">
  <div className="relative h-[400px]">
    {/* Image container with more tilt */}
    <div className="absolute right-0 top-[60%] -translate-y-1/2 w-[400px] h-[500px] bg-purple-100/80 rounded-xl shadow-lg transform rotate-[10deg]">
      <div className="absolute inset-0 flex items-center justify-center ">
        <img 
          src="/assets/images/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" 
          alt="Your description" 
          className="w-full h-full rounded-2xl object-cover" 
        />
      </div>
    </div>

{/* Quote Box */}
<div className="absolute left-0 bottom-[-95px] w-[350px] bg-white/90 rounded-lg p-4 shadow-lg">
  <p className="text-purple-700 text-center italic text-sm">"Reading is a discount ticket to everywhere."</p>
  <p className="text-purple-600 text-center text-xs mt-1">- Mary Schmich</p>
</div>

<div className="absolute right-[-60px] bottom-[20%] w-[100px] h-[100px]">
            <Moon className="h-full w-full text-purple-400 opacity-70" />
          </div>
  {/* Sparkles moved lower */}
  <div className="absolute left-[-5%] top-[-20%] w-[100px] h-[100px]">
    <Sparkles className="h-full w-full text-purple-400 opacity-70" />
  </div>
</div>

      </div>
      </div>
      <Footer/>
    </div>
  )
}
