import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ActivitiesList from "./pages/ActivitiesList";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import ReviewsPage from "./pages/ReviewsPage";

function App() {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Header currentLanguage={language} onLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/activities" element={<ActivitiesList language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/terms" element={<TermsAndConditions language={language} />} />
        <Route path="/reviews" element={<ReviewsPage language={language} />} />
      </Routes>
    </>
  );
}

export default App;




