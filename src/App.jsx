import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import HowToUsePage from "./pages/HowToUsePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingPage />} />
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      {/* App */}
      <Route path="/chat" element={<Chat />} />
      {/* Docs */}
      <Route path="/how-to-use" element={<HowToUsePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
}
