import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Video from "./pages/Video";
import About from "./pages/About";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/video" element={<Video />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
