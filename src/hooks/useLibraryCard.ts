import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getAllLibraryCards,
    createLibraryCard,
    updateLibraryCard,
    deleteLibraryCard,
} from "../app/services/LibraryCardService";
import { LibraryCard } from "../app/data/interfaces";
// Fetch all LibraryCards
export function useLibraryCards() {
  return useQuery<LibraryCard[]>({
    queryKey: ["LibraryCards"],
    queryFn: getAllLibraryCards,
  });
}
// Create LibraryCard
export function useCreateLibraryCard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: LibraryCard }) => createLibraryCard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LibraryCard"] });
    },
    onError: (error: unknown) => {
      console.error("Error creating LibraryCard:", error);
    },
  });
}
// Update LibraryCard
export function useUpdateLibraryCard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<LibraryCard> }) =>
        updateLibraryCard(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LibraryCard"] });
    },
    onError: (error: unknown) => {
      console.error("Error updating LibraryCard:", error);
    },
  });
}
// Delete LibraryCard
export function useDeleteLibraryCard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: number }) =>  deleteLibraryCard(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LibraryCard"] });
    },
    onError: (error: unknown) => {
      console.error("Error deleting LibraryCard:", error);
    },
  });
}
