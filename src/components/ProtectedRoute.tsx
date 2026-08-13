// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute: React.FC = () => {
  // Masalan, localStorage'da "isAdmin: true" degan qiymat borligini tekshiramiz
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // Agar admin bo'lmasa, bosh sahifaga otib yuboramiz
  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};
