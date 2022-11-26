import { Link, Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </>
  );
}

export default App;
