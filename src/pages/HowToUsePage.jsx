import { useNavigate } from "react-router-dom";

export default function HowToUsePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          🚀 MCP AI Assistant
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your all-in-one AI assistant to manage GitHub, Gmail, Calendar
          and perform deep research — all using natural language.
        </p>

        <button
          onClick={() => navigate("/chat")}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition shadow-lg"
        >
          Start Chatting →
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          ⚙️ How it Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Ask anything",
            "AI understands",
            "Tools execute",
            "Get results",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-5 rounded-xl"
            >
              <p className="text-sm text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODES */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          🧠 Modes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* CHAT MODE */}
          <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">⚡ Chat Mode</h3>
            <p className="text-gray-400 text-sm">
              Fast responses using MCP tools like Gmail, Calendar and GitHub.
            </p>
          </div>

          {/* DEEP SEARCH */}
          <div className="bg-purple-600/10 border border-purple-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">🔍 Deep Search</h3>
            <p className="text-gray-400 text-sm">
              AI-powered research with real-time data, scraping and sources.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          ✨ Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "📧 Gmail",
              desc: "Read, send and manage emails easily.",
            },
            {
              title: "📅 Calendar",
              desc: "Create, update and delete events.",
            },
            {
              title: "💻 GitHub",
              desc: "Manage repositories and issues.",
            },
            {
              title: "🌐 Deep Research",
              desc: "Get real-time insights with sources.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-5 rounded-xl"
            >
              <h3 className="font-medium mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* EXAMPLES */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          💡 Try These
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            "Show my unread emails",
            "Create event tomorrow at 5 PM",
            "List my GitHub repositories",
            "Latest AI trends 2026",
          ].map((ex, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-gray-300"
            >
              "{ex}"
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          ⚠️ Safe & Controlled
        </h2>

        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Sensitive actions like deleting events or repositories require
          confirmation before execution.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <button
          onClick={() => navigate("/chat")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition shadow-lg"
        >
          Go to Chat →
        </button>
      </section>
    </div>
  );
}