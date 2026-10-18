import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventsPage from "./pages/Events";
import TeamPage from "./pages/Team";
import MagazinePage from "./pages/Magazine";
import StudyMaterialPage from "./pages/StudyMaterial";
import { ThemeProvider } from "./theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen w-full bg-background text-foreground flex flex-col selection:bg-brand-cardinal selection:text-white">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/magazine" element={<MagazinePage />} />
            <Route path="/study-material" element={<StudyMaterialPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
