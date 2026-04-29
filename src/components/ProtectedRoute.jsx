import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${BASE_URL}/auth/me`, {
          credentials: "include",
        });

        if (res.ok) setIsAuth(true);
        else setIsAuth(false);
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  // 🔥 Better loading UI
  if (isAuth === null) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400">
        Checking authentication...
      </div>
    );
  }

  return isAuth ? children : <Navigate to="/" replace />;
}