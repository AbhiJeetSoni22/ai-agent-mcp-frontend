import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, loginWithGoogle } from "../api/api";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();

        if (user) {
          navigate("/chat"); // ✅ already logged in
        }
      } catch {
        // not logged in → stay here
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-6">
      <h1 className="text-3xl font-bold">🚀 MCP AI Assistant</h1>

      <button
        onClick={loginWithGoogle}
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        🔐 Login with Google
      </button>
    </div>
  );
}