import {  LibraryCard } from "../data/interfaces";

const BASE_URL = "http://localhost:5000/api/librarycards";

export async function getAllLibraryCards() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch Library Cards");
  return res.json();
}
export async function createLibraryCard(data: LibraryCard) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create Library Card");
  return res.json();
}
export async function updateLibraryCard(id: number, data: Partial<LibraryCard>) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update Library Card");
  return res.json();
}

export async function deleteLibraryCard(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete Library Card");
  return res.json();
}
