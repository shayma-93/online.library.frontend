export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    rating: number;
    pages:number;
    reviews?: number; // Optional, because not all books may have a review count
    imageSrc?: string; // Optional, in case the book does not have an image in your static data
    available?: string; // or `boolean` if it's stored as true/false

  }
  export interface Genre {
    id: string;
    label: string;
  }
  