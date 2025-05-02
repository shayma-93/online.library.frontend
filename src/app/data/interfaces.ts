export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  rating: number;
  pages: number;
  reviews?: number;
  imageSrc?: string;
  available?: string;
  borrowedBy?: string;
  borrowDate?: string;
  returnDate?: string;
}
interface Bookshelf {
  id: string;
  name: string;
  description: string;
  theme: string;
  owner: {
    id: string;
    name: string;
    avatar: string;
  };
  books: Book[];
}

// Define the expected shape of the JSON

  export interface Genre {
    id: string;
    label: string;
  }
  export interface FilterType {
    genres: string[];
    yearRange: [number, number];
    ratingRange: [number, number];
    pagesRange: [number, number];
    availability: string[];
  }
  