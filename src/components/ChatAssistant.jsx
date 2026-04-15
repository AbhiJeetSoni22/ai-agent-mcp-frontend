import { useState, useRef, useEffect } from "react";
import ConfirmationModal from "./ConfirmationModal";
import ReactMarkdown from "react-markdown";
import { sendChatMessage, sendDeepSearchQuery } from "../api/api";
export default function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [pendingMessage, setPendingMessage] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState(null);

  const [mode, setMode] = useState("chat");
  const [showMenu, setShowMenu] = useState(false);

  const bottomRef = useRef(null);
  const sessionIdRef = useRef(crypto.randomUUID());

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isDestructive = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("delete all events")) {
      return {
        title: "Delete All Events",
        message:
          "Are you sure you want to delete ALL events for this date? This action cannot be undone.",
      };
    }

    if (lower.includes("delete event")) {
      return {
        title: "Delete Event",
        message:
          "Are you sure you want to delete this event? This action cannot be undone.",
      };
    }

    if (lower.includes("create repository")) {
      return {
        title: "Create Repository",
        message:
          "Are you sure you want to create this repository on your GitHub account?",
      };
    }

    return null;
  };

  const executeMessage = async (text) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      {
        role: "tool-status",
        text: mode === "deep" ? "🔍 Researching..." : "⚙ Processing...",
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      let data;

      if (mode === "deep") {
        data = await sendDeepSearchQuery(text);
      } else {
        data = await sendChatMessage(text, sessionIdRef.current);
      }

      setMessages((prev) => prev.filter((m) => m.role !== "tool-status"));

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            mode === "deep"
              ? data.data || "No response"
              : data.reply || String(data),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => m.role !== "tool-status"),
        { role: "assistant", text: "⚠️ Server error" },
      ]);
    }

    setLoading(false);
  };

  const sendMessage = (customText = null) => {
    const text = customText || input;
    if (!text.trim()) return;

    const danger = isDestructive(text);

    if (danger) {
      setPendingMessage(text);
      setConfirmConfig(danger);
      setShowConfirm(true);
      return;
    }

    executeMessage(text);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-24">
              <p className="text-xl font-semibold">AI Assistant</p>
              <p className="text-sm mt-2 opacity-70">
                Ask about GitHub, calendar, emails, or anything...
              </p>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`group relative px-4 py-3 rounded-2xl max-w-[75%] text-sm leading-relaxed transition-all
                ${
                  m.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm shadow-md"
                    : m.role === "assistant"
                      ? "bg-white/10 backdrop-blur-md border border-white/10 rounded-bl-sm shadow-md hover:bg-white/15"
                      : "bg-gray-700 text-gray-300 text-xs rounded-xl"
                }`}
              >
                <ReactMarkdown>{m.text}</ReactMarkdown>

                {/* subtle hover actions */}
                {m.role === "assistant" && (
                  <div className="absolute -bottom-5 left-2 opacity-0 group-hover:opacity-100 text-xs text-gray-400 transition">
                    AI response
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-bl-sm flex gap-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT BAR */}
      <div className="sticky bottom-0 backdrop-blur-xl bg-black/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto p-3 relative">
          {/* INPUT WRAPPER */}
          <div className="flex items-center bg-white/10 border border-white/10 rounded-full px-3 py-2 gap-2">
            {/* ➕ INSIDE INPUT */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu((prev) => !prev);
                }}
                className="
            w-8 h-8 flex items-center justify-center
            rounded-full
            text-gray-400
            hover:bg-white/10
            hover:text-white
            transition-all
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m7-7H5"
                  />
                </svg>
              </button>

              {/* DROPDOWN */}
              {showMenu && (
                <div className="absolute bottom-12 left-0 bg-black/90 border border-white/10 rounded-xl shadow-lg p-2 w-48">
                  {/* Deep Search */}
                  <button
                    onClick={() => {
                      setMode("deep");
                      setShowMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
                ${
                  mode === "deep"
                    ? "bg-purple-600/20 text-purple-300"
                    : "text-white hover:bg-white/10"
                }`}
                  >
                    🔍 Deep Search
                  </button>

                  {/* Normal Chat */}
                  <button
                    onClick={() => {
                      setMode("chat");
                      setShowMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
                ${
                  mode === "chat"
                    ? "bg-blue-600/20 text-blue-300"
                    : "text-white hover:bg-white/10"
                }`}
                  >
                    ⚡ Normal Chat
                  </button>
                </div>
              )}
            </div>

            {/* INPUT FIELD */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
              placeholder={
                mode === "deep"
                  ? "Ask anything (Deep Search)..."
                  : "Type your message..."
              }
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400 px-2"
            />

            {/* SEND BUTTON */}
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 active:scale-95 transition disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && confirmConfig && (
        <ConfirmationModal
          title={confirmConfig.title}
          message={confirmConfig.message}
          onCancel={() => {
            setShowConfirm(false);
            setPendingMessage(null);
          }}
          onConfirm={() => {
            setShowConfirm(false);
            executeMessage(pendingMessage);
            setPendingMessage(null);
          }}
        />
      )}
    </>
  );
}
