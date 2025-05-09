import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../app/services/bookService";
import { Book } from "../app/data/interfaces";
// Fetch all Books
export function useBooks() {
  return useQuery<Book[]>({
    queryKey: ["Books"],
    queryFn: getAllBooks,
  });
}
// Create Book
export function useCreateBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: Book}) => createBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Books"] });
    },
    onError: (error: unknown) => {
      console.error("Error creating Book:", error);
    },
  });
}
// Update Book
export function useUpdateBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Book> }) =>
      updateBook(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Books"] });
    },
    onError: (error: unknown) => {
      console.error("Error updating Book:", error);
    },
  });
}
// Delete Book
export function useDeleteBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Books"] });
    },
    onError: (error: unknown) => {
      console.error("Error deleting Book:", error);
    },
  });
}
