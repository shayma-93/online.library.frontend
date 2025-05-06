import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../app/services/userService';

// Fetch all users
export function useUsers() {
    return useQuery({
      queryKey: ['users'],
      queryFn: getAllUsers,
    });
  }

// Create user mutation
export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      console.error('Error creating user:', error);
    },
  });
}

// Update user mutation
export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string, data: any }) => updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      console.error('Error updating user:', error);
    },
  });
}

// Delete user mutation
export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      console.error('Error deleting user:', error);
    },
  });
}
