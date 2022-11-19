import { Link, Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </>
  );
}

export default App;
