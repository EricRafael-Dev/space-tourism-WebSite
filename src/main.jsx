import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/crew/:id" element={<Crew />} />
        <Route path="/technology/:id" element={<Technology/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
