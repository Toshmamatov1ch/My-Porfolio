import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // O'zingizning maxfiy parolingiz (xohlasangiz o'zgartirishingiz mumkin)
    if (password === "diyorbek2026") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin", { replace: true });
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-mono">
      <form
        onSubmit={handleLogin}
        className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl w-full max-w-md space-y-6 shadow-2xl relative"
      >
        {/* Orqaga qaytish tugmasi */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          ← Asosiy sahifaga qaytish
        </button>

        <div className="space-y-2 text-center">
          <div className="w-3 h-3 bg-[#ff4d00] rounded-full mx-auto animate-ping mb-4" />
          <h1 className="text-xl font-bold tracking-widest">ADMIN KIRISH</h1>
          <p className="text-xs text-gray-500">
            Davom etish uchun maxfiy parolni kiriting
          </p>
        </div>

        <div className="space-y-2">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Parolni kiriting..."
            className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff4d00] transition-colors text-white"
            autoFocus
          />
          {error && (
            <p className="text-xs text-red-500">
              Parol noto'g'ri! Qayta urinib ko'ring.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff4d00] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Kirish
        </button>
      </form>
    </div>
  );
};
