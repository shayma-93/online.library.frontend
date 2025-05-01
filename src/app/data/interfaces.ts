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
  