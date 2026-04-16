import ChatAssistant from "../components/ChatAssistant";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../api/api";
import { useEffect } from "react";

export default function Chat() {
  const navigate = useNavigate();


  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
      } catch {
        navigate("/"); // ❌ not logged in
      }
    };

    checkAuth();
  }, []);
  const handleLogout = async () => {
    try {
      await logoutUser();
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col">
      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/5 border-b border-white/10 shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LEFT (unchanged logo/title) */}
          <h1 className="text-xl font-semibold tracking-wide">
            🚀 MCP AI Assistant
          </h1>

          {/* RIGHT (improved buttons) */}
          <div className="flex items-center gap-3 md:gap-5 text-sm">
            <button
              onClick={() => navigate("/how-to-use")}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
            >
              How to Use
            </button>

            <span className="hidden md:block text-gray-400 text-xs">
              Powered by Groq + MCP
            </span>

            <button
              onClick={handleLogout}
              className="px-4 py-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 transition shadow-md cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* CHAT */}
      <ChatAssistant />
    </div>
  );
}
