import {  Bookshelf } from "../data/interfaces";

const BASE_URL = "http://localhost:5000/api/bookshelves";

export async function getAllBookshelves() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch bookshelves");
  return res.json();
}
export async function createBookshelf(data:  Bookshelf) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create bookshelf");
  return res.json();
}
export async function updateBookshelf(id: number, data: Partial< Bookshelf>) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update bookshelf");
  return res.json();
}

export async function deleteBookshelf(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete bookshelf");
  return res.json();
}
