'use client';
import {User} from "../data/interfaces"
import { useUsers} from '../../hooks/useUser';
import { useEffect } from "react";

export default function UsersPage() {
    const { data: users, isLoading, error } = useUsers();

    useEffect(() => {
  if (users) {
    console.log("Fetched Users:", users);
  }
}, [users]);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users</p>;
  
    if (!users || users.length === 0) return <p>No users found.</p>;
    return (
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-4">Users</h1>
        <ul className="space-y-2">
          {users.map((user: User) => (
            <li key={user.id} className="border p-2 rounded">
              {user.first_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }