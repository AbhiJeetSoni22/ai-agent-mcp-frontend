const BASE_URL = import.meta.env.VITE_BASE_URL;

// 🔥 Normal Chat API
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

// 🔥 Deep Search API (future ready)
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