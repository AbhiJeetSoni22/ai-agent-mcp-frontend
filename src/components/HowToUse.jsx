export default function HowToUse({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-sm"
        >
          ✕ Close
        </button>

        <h2 className="text-2xl font-semibold mb-10">
          📘 How to Use MCP AI Assistant
        </h2>

        {/* ================= GMAIL ================= */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            📧 Gmail Features
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-medium text-white">1️⃣ View Unread Emails</p>
              <p className="text-gray-400">
                "Show my unread emails"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">2️⃣ Read Email by ID</p>
              <p className="text-gray-400">
                "Read email with ID 18c123abc..."
              </p>
            </div>

            <div>
              <p className="font-medium text-white">3️⃣ Send Email</p>
              <p className="text-gray-400">
                "Send email to abc@gmail.com with subject Meeting and body Let's meet at 5 PM"
              </p>
            </div>
          </div>
        </section>

        {/* ================= CALENDAR ================= */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            📅 Google Calendar Features
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-medium text-white">1️⃣ Get Events by Date</p>
              <p className="text-gray-400">
                "Show events on 2026-02-05"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">2️⃣ Create Event</p>
              <p className="text-gray-400">
                "Create event Team Meeting from 2026-02-05T10:00:00Z to 2026-02-05T11:00:00Z"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">3️⃣ Update Event</p>
              <p className="text-gray-400">
                "Update event 18cabc123 to 2026-02-05T15:00:00Z"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">4️⃣ Delete Event</p>
              <p className="text-gray-400">
                "Delete event with ID 18cabc123"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">5️⃣ Delete All Events of a Date</p>
              <p className="text-gray-400">
                "Delete all events on 2026-02-05"
              </p>
            </div>
          </div>
        </section>

        {/* ================= GITHUB ================= */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            💻 GitHub Features
          </h3>

          <div className="space-y-4 text-sm text-gray-300">

            <div>
              <p className="font-medium text-white">1️⃣ List My Repositories</p>
              <p className="text-gray-400">
                "List my GitHub repositories"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">2️⃣ Create New Repository</p>
              <p className="text-gray-400">
                "Create a repository named mcp-project"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">3️⃣ Create Issue</p>
              <p className="text-gray-400">
                "Create issue in repo mcp-project with title Fix login bug"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">4️⃣ List Issues</p>
              <p className="text-gray-400">
                "Show issues in repo mcp-project"
              </p>
            </div>

          </div>
        </section>

        {/* ================= WEB SEARCH ================= */}
        <section>
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            🌐 Web Search (Real-Time Data)
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-medium text-white">1️⃣ Search Current Information</p>
              <p className="text-gray-400">
                "Search latest AI news"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">2️⃣ Get Real-Time Updates</p>
              <p className="text-gray-400">
                "Search current gold price in India"
              </p>
            </div>

            <div>
              <p className="font-medium text-white">3️⃣ Research Topics</p>
              <p className="text-gray-400">
                "Search top JavaScript frameworks in 2026"
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Web search returns up to 5 real-time results including title, link, and summary.
          </p>
        </section>

      </div>
    </div>
  );
}
