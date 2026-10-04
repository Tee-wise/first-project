import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Level100 from "./pages/Level100";
import Level200 from "./pages/Level200";
import Level300 from "./pages/Level300";
import Level400 from "./pages/Level400";
import StudyPlan from "./pages/StudyPlan";
import CoursePage from "./pages/CoursePage";

import "./styles/global.css";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="main-area">
        <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses/100" element={<Level100 />} />
            <Route path="/courses/200" element={<Level200 />} />
            <Route path="/courses/300" element={<Level300 />} />
            <Route path="/courses/400" element={<Level400 />} />
            <Route path="/study-plan" element={<StudyPlan />} />
            <Route path="/courses/:level/:courseId" element={<CoursePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}