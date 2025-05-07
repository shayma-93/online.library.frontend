import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../app/services/userService';
import {User} from "../app/data/interfaces"

// Fetch all users
export function useUsers() {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });
}

// Create user

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({  data }: {  data: User }) =>
      createUser( data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: unknown) => {
      console.error('Error creating user:', error);
    },
  });
}


// Update user 
export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<User> }) =>
      updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: unknown) => {
      console.error('Error updating user:', error);
    },
  });
}


// Delete user 
export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: number })  => 
      deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: unknown) => {
      console.error('Error deleting user:', error);
    },
  });
}
