import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CompetitionsPage from "./pages/Competitions";
import GuestSessionsPage from "./pages/GuestSessions";
import MagazinePage from "./pages/Magazine";
import StudyMaterialPage from "./pages/StudyMaterial";
import { ThemeProvider } from "./theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen w-full text-slate-900 dark:text-slate-100 selection:bg-civil-amber selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/guest-sessions" element={<GuestSessionsPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/study-material" element={<StudyMaterialPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
