// GET
export async function getAllUsers() {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch("/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      credentials: 'include', 
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error fetching users:", errorData);
      throw new Error(errorData.message || "Failed to fetch users");
    }

    const data = await res.json();
    console.log("Fetched users:", data);
    return data;
  } catch (err) {
    throw new Error("Failed to fetch users, please try again later.");
  }
}

// POST
export async function createUser(data: any) {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send token in the header
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error creating user:", errorData);
      throw new Error(errorData.message || "Failed to create user");
    }

    const result = await res.json();
    console.log("Created user:", result);
    return result;
  } catch (err) {
    console.error("createUser error:", err);
    throw new Error("Failed to create user, please try again later.");
  }
}

// PUT
export async function updateUser(id: string, data: any) {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send token in the header
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error updating user:", errorData);
      throw new Error(errorData.message || "Failed to update user");
    }

    const result = await res.json();
    console.log("Updated user:", result);
    return result;
  } catch (err) {
    console.error("updateUser error:", err);
    throw new Error("Failed to update user, please try again later.");
  }
}

// DELETE
export async function deleteUser(id: string) {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send token in the header
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error deleting user:", errorData);
      throw new Error(errorData.message || "Failed to delete user");
    }

    const result = await res.json();
    console.log("Deleted user:", result);
    return result;
  } catch (err) {
    console.error("deleteUser error:", err);
    throw new Error("Failed to delete user, please try again later.");
  }
}
