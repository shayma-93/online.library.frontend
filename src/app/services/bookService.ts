import {  Book } from "../data/interfaces";

const BASE_URL = "http://localhost:5000/api/books";

export async function getAllBooks() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch Books");
  return res.json();
}
export async function createBook(data: Book) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create Book");
  return res.json();
}
export async function updateBook(id: number, data: Partial<Book>) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update Book");
  return res.json();
}

export async function deleteBook(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete Book");
  return res.json();
}
