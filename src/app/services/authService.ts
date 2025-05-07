const BASE_URL = "http://localhost:5000/api/users"; // backend URL

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Failed to login");

    const data = await res.json();
    const { accessToken, refreshToken, user } = data;

    // Save accessToken to localStorage for front-end use
    localStorage.setItem("token", accessToken);

    localStorage.setItem("user", JSON.stringify(user));


    return { success: true, user };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error };
  }
}
