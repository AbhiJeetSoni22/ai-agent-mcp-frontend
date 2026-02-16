import { useState } from "react";
import ChatAssistant from "./components/ChatAssistant";
import HowToUse from "./components/HowToUse";

export default function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col">

      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/5 border-b border-white/10 shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <h1 className="text-xl font-semibold tracking-wide">
            🚀 MCP AI Assistant
          </h1>

          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => setShowInstructions(true)}
              className="text-gray-300 hover:text-white transition underline underline-offset-4"
            >
              How to Use?
            </button>

            <span className="text-gray-500">
              Powered by Groq + MCP
            </span>
          </div>
        </div>
      </header>

      {/* CHAT */}
      <ChatAssistant />

      {/* MODAL */}
      {showInstructions && (
        <HowToUse onClose={() => setShowInstructions(false)} />
      )}
    </div>
  );
}
