import React, {  useState } from 'react';
import { Input } from './ui/input';
import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribing email:", email)
      setIsSubmitted(true)
      setEmail("")

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="w-full flex flex-col justify-center items-center py-16 bg-gradient-to-b from-blue-100 via-purple-100 to-lavender-50 ">
      <div className="container px-4 md:px-6">
      <div
  className="max-w-4xl min-h-[300px] mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-purple-100 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center items-center text-center
    bg-[url('/assets/images/02429ad821287ebbe8f1ab4edf7ce293.gif')] bg-cover bg-center bg-no-repeat"
>
      {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200"></div>
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>

          <div className="relative z-10">
            <h2 className="font-dancing-script text-3xl font-bold text-center text-purple-600 mb-2">Stay Enchanted</h2>

            <p className="text-blue-800 font-akaya-kanadaka text-xl text-center mb-6">
              Subscribe to our magical newsletter to receive updates on new books, reading lists, and special spells.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-purple-200 focus-visible:ring-purple-300 rounded-lg pl-8 pr-4 bg-white/90"
                />
                <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
              </div>

              <Button
                type="submit"
                className="bg-blue-300 hover:bg-blue-200 text-purple-900 f rounded-lg relative overflow-hidden group"
                disabled={isSubmitted}
              >
                <span className="relative  text-purple-900 font-akaya-kanadaka text-lg tracking-wider z-10">{isSubmitted ? "Subscribed!" : "Subscribe"}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </form>

            <div className="mt-4 text-center font-akaya-kanadaka text-lg  text-blue-800">
              Join our community of magical readers and never miss an enchanted update
            </div>
          </div>

          {/* Magical sparkles */}
          <div className="absolute top-1/4 right-8 w-2 h-2 bg-purple-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-10 w-2 h-2 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  )
}
