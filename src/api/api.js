const BASE_URL = import.meta.env.VITE_BACKEND_URL;

//  Normal Chat API
export async function sendChatMessage(message, sessionId) {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-session-id": sessionId,
    },
    credentials: "include",
    body: JSON.stringify({ message }),
  });

  return res.json();
}

// Deep Search API (future ready)
export async function sendDeepSearchQuery(query) {
  const res = await fetch(`${BASE_URL}/deep-search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return res.json();
}

//  Logout API
export async function logoutUser() {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
}

// 🔐 get current user
export async function getCurrentUser() {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Not logged in");

  return res.json();
}

// 🔐 login redirect
export function loginWithGoogle() {
  window.location.href = `${BASE_URL}/auth/google`;
}