"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Sparkles, Stars } from "lucide-react"
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
    console.log("Form submitted:", formData)
  }

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100 min-h-[calc(100vh-2rem)] py-16 md:py-24 ">
        {/* Left Side - Form */}
        <div className="w-full max-w-lg px-10 py-12 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 md:mr-8 relative overflow-hidden order-2 md:order-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 rounded-t-3xl" />
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100 rounded-full opacity-50" />
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 rounded-full opacity-50" />

          <div className="relative">
            <div className="flex flex-col space-y-2 text-center mb-8">
              <h1 className="font-dancing-script text-3xl font-bold tracking-tight text-purple-800">
                Begin Your Magical Journey
              </h1>
              <p className="text-sm text-purple-600">
                Create an account to start your enchanted reading adventure
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-800 flex items-center">
                  <span>Full Name</span>
                  <div className="ml-2 h-px flex-1 bg-purple-200" />
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-purple-200 bg-white opacity-50 focus-visible:ring-purple-500 rounded-md pl-8"
                  />
                  <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-800 flex items-center">
                  <span>Email</span>
                  <div className="ml-2 h-px flex-1 bg-purple-200" />
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
                  <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-purple-800 flex items-center">
                  <span>Password</span>
                  <div className="ml-2 h-px flex-1 bg-purple-200" />
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
                  <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full" />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-purple-800 flex items-center">
                  <span>Confirm Password</span>
                  <div className="ml-2 h-px flex-1 bg-purple-200" />
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
                  <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full" />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-300 hover:bg-blue-200 text-purple-900 font-akaya-kanadaka text-xl rounded-lg relative overflow-hidden group px-8 py-2 transition-all duration-300"
              >
                <span className="relative z-10">Sign Up</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center text-sm text-purple-700">
              <p>
                Already have an account?{" "}
                <Link href="/sign-in" className="font-medium text-purple-600 hover:text-purple-500 underline">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="absolute bottom-4 right-4 opacity-20">
              <Stars className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

   {/* Right Side - Illustration with responsive quote position */}
<div className="w-full max-w-md mt-12 md:mt-0 md:ml-16 order-1 md:order-2 flex flex-col items-center relative">
  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px]">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full bg-purple-100/80 rounded-lg shadow-lg transform rotate-[10deg]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/assets/images/il_fullxfull.5899612498_gs22.jpg"
          alt="Book Magic"
          fill
          className="rounded-2xl object-cover"
        />
      </div>
    </div>

    {/* Decorative Sparkle */}
    <div className="absolute left-[-15%] top-[-10%] w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] md:w-[100px] md:h-[100px]">
      <Sparkles className="h-full w-full text-purple-400 opacity-70" />
    </div>
  </div>

  {/* Quote Box - stacked under illustration on small screens */}
  <div className="mt-6 md:mt-0 md:absolute md:left-[-5%] md:bottom-[-5%] w-[90%] sm:w-[80%] md:w-[90%] bg-gradient-to-r from-purple-200 to-blue-200 border-4 border-white rounded-lg p-4 shadow-lg transform md:-rotate-5">
    <p className="font-permanent-marker text-center text-blue-900 text-lg sm:text-lg">
      “Books are a uniquely portable magic.”
    </p>
    <p className="font-permanent-marker text-center text-purple-800 text-lg sm:text-xl mt-1">
      - Stephen King
    </p>
  </div>
</div>

      </div>
      <Footer />
    </div>
  )
}
