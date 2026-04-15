import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ProtectedRoute from "./components/ProtectedRoute";
import HowToUsePage from "./pages/HowToUsePage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route path="/how-to-use" element={<HowToUsePage />} />
    </Routes>
  );
}