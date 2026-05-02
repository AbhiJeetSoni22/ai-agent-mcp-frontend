import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/api";

export default function LandingPage() {
  const navigate = useNavigate();
    useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          navigate("/chat"); // ✅ auto redirect
        }
      } catch {
        // not logged in
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-white/10 backdrop-blur-md bg-white/5">
        <h1 className="text-lg font-semibold">🚀 MCP AI Assistant</h1>

        <button
          onClick={() => navigate("/login")}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-md text-sm transition"
        >
          Login
        </button>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Your AI Assistant for <br />
          <span className="text-blue-500">Everything You Do</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Manage emails, schedule meetings, control GitHub and perform deep research — all using natural language.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition shadow-lg"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/how-to-use")}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">

        {[
          {
            title: "⚡ Smart Chat",
            desc: "Interact with AI to perform real-world tasks instantly.",
          },
          {
            title: "📧 Gmail Integration",
            desc: "Read, send and manage emails seamlessly.",
          },
          {
            title: "📅 Calendar Control",
            desc: "Create, update and delete events using AI.",
          },
          {
            title: "💻 GitHub Tools",
            desc: "Manage repositories and issues effortlessly.",
          },
          {
            title: "🔍 Deep Search",
            desc: "Get real-time research with sources and insights.",
          },
          {
            title: "🔐 Secure Auth",
            desc: "Google OAuth with encrypted tokens.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* HOW IT WORKS */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10">⚙️ How it Works</h2>

        <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-300">
          {[
            "Ask anything",
            "AI understands",
            "Tools execute",
            "Get results",
          ].map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Experience AI Power?
        </h2>

        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition shadow-lg"
        >
          Start Now →
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm pb-6">
        Built with ❤️ using MCP + LangChain + Groq
      </footer>
    </div>
  );
}