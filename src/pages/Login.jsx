import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // 🔥 Detect login success
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("login") === "success") {
      navigate("/chat");
    }
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-6">
      <h1 className="text-3xl font-bold">🚀 MCP AI Assistant</h1>

      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        🔐 Login with Google
      </button>
    </div>
  );
}