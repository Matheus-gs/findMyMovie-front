import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home";
import { Favorites } from "../views/favorites";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
