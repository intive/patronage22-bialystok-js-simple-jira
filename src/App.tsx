import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
