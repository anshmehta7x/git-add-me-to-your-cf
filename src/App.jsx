import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Video from "./pages/Video";
import About from "./pages/About";
import Combined from "./pages/Combined";
import Audio from "./pages/Audio";
import Output from "./pages/Output";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/video" element={<Video />} />
      <Route path="/about" element={<About />} />
      <Route path="/combined" element={<Combined />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/output" element={<Output />} />
    </Routes>
  );
}

export default App;
