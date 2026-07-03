import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter basename="/note">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}