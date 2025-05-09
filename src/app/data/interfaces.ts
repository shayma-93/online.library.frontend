export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  rating: number;
  pages: number;
  reviews?: number;
  cover_url?: string;
  available?: string;
  borrowedBy?: string;
  borrowDate?: string;
  returnDate?: string;
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
export interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  role?: string;
}
export interface LibraryCard {
  id: string;
  username: string;
  borrowedBooks:Book;
  borrowDate?: string;
  returnDate?: string;
}
 export interface  Bookshelf {
  id: string;
  name: string;
  description: string;
  theme: string;
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  books: Book;
  editable?: boolean;
}