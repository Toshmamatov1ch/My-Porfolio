import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col justify-between">
        <div>
          <h2 className="font-mono text-sm font-bold mb-8">ADMIN PANEL</h2>
          <nav className="flex flex-col space-y-4 font-mono text-xs text-gray-400">
            <span>Dashboard</span>
            <span>Mijozlar Fikri</span>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="text-xs font-mono text-red-500 hover:text-red-400 transition-colors"
        >
          [ Chiqish ]
        </button>
      </aside>

      {/* Asosiy Kontent */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};
