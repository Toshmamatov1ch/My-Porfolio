import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

// Komponentlaringiz
import { HeaderNav } from "./components/HeaderNav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import { GlobeTestimonials } from "./components/GlobeTestimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Admin qismlari
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminLogin } from "./pages/admin/AdminLogin";

// Himoya: Admin ekanligini tekshiradi
const ProtectedRoute = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

// Asosiy Sayt Layouti (Dinamik rejimlar bilan yangilandi)
const MainLayout = () => (
  <div className="min-h-screen bg-white dark:bg-[#070707] text-gray-900 dark:text-white font-sans relative transition-colors duration-300">
    <HeaderNav />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GlobeTestimonials />
      <FAQ />
      <Contact />
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Admin sahifalari
const AdminDashboard = () => (
  <div className="p-8 text-white font-mono">
    <h1>Admin Dashboard</h1>
    <p>Xush kelibsiz!</p>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
