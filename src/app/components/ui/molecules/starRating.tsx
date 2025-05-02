import { Star } from "lucide-react"

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3 w-3 ${
            star <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"
          }`}
        />
      ))}
    </div>
  )
}
