"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import { Button } from "../atoms/button"
import { Star, BookOpen, User, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "../../../../lib/utils"

type Book = {
  id: string
  title: string
  author: string
  rating: number
  status?: "available" | "borrowed"
  borrowedBy?: string
  borrowDate?: string
  returnDate?: string
  description?: string
}

interface BookDetailModalProps {
  book: Book | null
  isOpen: boolean
  onClose: () => void
  onBorrow: (bookId: string) => void
}

export default function BookDetailModal({ book, isOpen, onClose, onBorrow }: BookDetailModalProps) {
  if (!book) return null

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-purple-200 text-purple-200" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-purple-200" />
            <Star className="absolute top-0 left-0 h-4 w-4 fill-purple-200 text-purple-200 overflow-hidden w-[50%]" />
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-purple-100" />)
      }
    }
    return stars
  }

  // Calculate days remaining if the book is borrowed
  const getDaysRemaining = () => {
    if (!book.returnDate) return null

    const today = new Date()
    const due = new Date(book.returnDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysRemaining = book.status === "borrowed" ? getDaysRemaining() : null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-sm border border-purple-100">
        <DialogHeader>
          <DialogTitle className="font-dancing-script text-2xl text-purple-700">{book.title}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Book details */}
          <div className="space-y-2">
            <p className="text-purple-500 text-sm">{book.author}</p>
            <div className="flex">{renderStars(book.rating)}</div>

            {book.description && (
              <p className="text-purple-600 text-sm mt-4 italic">
                {book.description || "A magical journey awaits within these pages..."}
              </p>
            )}

            <div className="mt-4 pt-4 border-t border-purple-100">
              <div className="flex items-center">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full mr-2",
                    book.status === "available" ? "bg-green-400" : "bg-red-400",
                  )}
                ></div>
                <span
                  className={cn("text-sm font-medium", book.status === "available" ? "text-green-500" : "text-red-500")}
                >
                  {book.status === "available" ? "Available" : "Borrowed"}
                </span>
              </div>

              {book.status === "borrowed" && book.borrowedBy && (
                <div className="text-sm text-purple-500 mt-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Currently with: {book.borrowedBy}</span>
                </div>
              )}

              {book.status === "borrowed" && book.returnDate && (
                <div className="text-sm text-purple-500 mt-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Expected return: {new Date(book.returnDate).toLocaleDateString()}</span>
                </div>
              )}

              {book.status === "borrowed" && daysRemaining !== null && (
                <div className="mt-2">
                  {daysRemaining > 3 ? (
                    <div className="flex items-center text-green-500 text-sm">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      <span>{daysRemaining} days remaining</span>
                    </div>
                  ) : daysRemaining > 0 ? (
                    <div className="flex items-center text-amber-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Due soon ({daysRemaining} days)</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>Overdue by {Math.abs(daysRemaining)} days</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-purple-200 text-purple-500 hover:bg-purple-50 rounded-sm"
          >
            Close
          </Button>
          <Button
            onClick={() => onBorrow(book.id)}
            disabled={book.status === "borrowed"}
            className={cn(
              "rounded-sm",
              book.status === "available"
                ? "bg-purple-200 text-purple-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed",
            )}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            {book.status === "available" ? "Request Borrow" : "Currently Borrowed"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
