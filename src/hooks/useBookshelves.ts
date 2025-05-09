import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllBookshelves,
  createBookshelf,
  updateBookshelf,
  deleteBookshelf,
} from "../app/services/bookshelvesService";
import { Bookshelf } from "../app/data/interfaces";
// Fetch all Bookshelfs
export function useBookshelves() {
  return useQuery<Bookshelf[]>({
    queryKey: ["Bookshelves"],
    queryFn: getAllBookshelves,
  });
}
// Create Bookshelf
export function useCreateBookshelf() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: Bookshelf}) => createBookshelf(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Bookshelf"] });
    },
    onError: (error: unknown) => {
      console.error("Error creating Bookshelf:", error);
    },
  });
}
// Update Bookshelf
export function useUpdateBookshelf() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Bookshelf> }) =>
      updateBookshelf(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Bookshelf"] });
    },
    onError: (error: unknown) => {
      console.error("Error updating Bookshelf:", error);
    },
  });
}
// Delete Bookshelf
export function useDeleteBookshelf() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteBookshelf(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Bookshelf"] });
    },
    onError: (error: unknown) => {
      console.error("Error deleting Bookshelf:", error);
    },
  });
}
