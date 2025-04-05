import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ActivitiesList from "./pages/activities-list/ActivitiesList";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import TermsAndConditions from "./pages/terms-and-condition/TermsAndConditions";
import Header from "./components/header/Header";
import ReviewsPage from "./pages/review-page/ReviewsPage";

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
        <Route path="/home" element={<Home language={language} />} />
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




