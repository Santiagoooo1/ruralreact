import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ActivitiesList from "./pages/ActivitiesList";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import Header from "./components/Header";

function App() {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <BrowserRouter>
      <Header currentLanguage={language} onLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/*" element={<Home language={language} />} />
        <Route path="/activities" element={<ActivitiesList language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/terms" element={<TermsAndConditions language={language} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

