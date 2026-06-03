export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-gray-400 mb-8">Last Updated: May 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>

          <p className="text-gray-300">
            MCP AI Assistant is an AI-powered productivity platform that helps
            users manage emails, calendar events, and perform intelligent
            web-based tasks using natural language commands. We are committed to
            protecting your privacy and ensuring the security of your personal
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>

          <p className="text-gray-300">
            When you sign in using Google, we may collect:
          </p>

          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
            <li>Name</li>
            <li>Email Address</li>
            <li>Google Account Identifier</li>
            <li>Google OAuth Access Tokens</li>
            <li>Google OAuth Refresh Tokens</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How We Use Gmail Data</h2>

          <p className="text-gray-300">
            Gmail access is used only when explicitly requested by the user. The
            application may:
          </p>

          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
            <li>Read emails on behalf of the authenticated user.</li>
            <li>Search and summarize emails.</li>
            <li>Send emails only when requested by the user.</li>
          </ul>

          <p className="text-gray-300 mt-4">
            We do not sell, share, or use Gmail data for advertising purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Google Calendar Data
          </h2>

          <p className="text-gray-300">
            Calendar access is used only when requested by the user. The
            application may:
          </p>

          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
            <li>View calendar events.</li>
            <li>Create calendar events.</li>
            <li>Update existing events.</li>
            <li>Delete events when requested.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Data Storage & Security
          </h2>

          <p className="text-gray-300">
            User authentication tokens are securely stored in encrypted form. We
            implement industry-standard security practices to protect user
            information and prevent unauthorized access.
          </p>

          <p className="text-gray-300 mt-4">
            We do not sell, rent, or distribute user data to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>

          <p className="text-gray-300">MCP AI Assistant integrates with:</p>

          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
            <li>Google OAuth</li>
            <li>Google Gmail API</li>
            <li>Google Calendar API</li>
            <li>Groq AI</li>
            <li>Tavily Search API</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">User Rights</h2>

          <p className="text-gray-300">
            Users may revoke Google account permissions at any time through
            their Google Account Security settings.
          </p>
        </section>
        <p className="text-gray-300 mt-4">
          MCP AI Assistant's use and transfer of information received from
          Google APIs adheres to the Google API Services User Data Policy,
          including the Limited Use requirements.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>

          <p className="text-gray-300">
            If you have questions regarding this Privacy Policy, please contact:
          </p>

          <p className="text-blue-400 mt-3">abhisonijeet123@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
