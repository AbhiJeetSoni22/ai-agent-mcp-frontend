import { useState, useRef, useEffect } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [pendingMessage, setPendingMessage] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState(null);

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

    if (
      lower.includes("create a repository") ||
      lower.includes("create repository")
    ) {
      return {
        title: "Create Repository",
        message:
          "Are you sure you want to create this repository on your GitHub account?",
      };
    }

    return null;
  };

  const executeMessage = async (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": sessionIdRef.current,
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Server error" },
      ]);
    }

    setLoading(false);
  };

  const sendMessage = async (customText = null) => {
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
        <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-24">
              <p className="text-lg">Start chatting with your AI assistant</p>
              <p className="text-sm mt-2">
                Ask about github, calendar, emails, or search the web
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
                className={`px-5 py-3 rounded-2xl shadow-lg max-w-[75%] text-sm leading-relaxed
                ${
                  m.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white/10 backdrop-blur-md border border-white/10 rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/10 px-5 py-3 rounded-2xl rounded-bl-sm flex gap-1">
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
      <div className="sticky bottom-0 backdrop-blur-md bg-black/40 border-t border-white/10">
        <div className="max-w-4xl mx-auto p-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Ask something..."
            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendMessage}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition font-medium"
          >
            Send
          </button>
        </div>
      </div>
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
