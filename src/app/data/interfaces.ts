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
}

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
  