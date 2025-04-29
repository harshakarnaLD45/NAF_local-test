import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useParams } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';
import './i18n';
import MachinesPage from './Pages/MachinesPage/MachinesPage';
import Insights from './Pages/Insights/Insights';
import Menu from './Pages/Company/Menu/Menu';
import SoftwarePage from './Pages/SoftwarePage/SoftwarePage';
import AboutPage from './Pages/Company/AboutPage/AboutPage';
import CustomCursor from './Componenets/NoiseEffect/CustomCursor';
import ContactPage from './Pages/ContactPage/ContactPage';
import MantaincePage from './Pages/MachinesPage/MantaincePage/MantaincePage';
import BlogContainer from './Pages/Insights/BlogContainer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['de', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage('de'); // fallback to English if unknown lang
    }
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <NoiseEffect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="machine" element={<MachinesPage />} />
        <Route path="maintaince" element={<MantaincePage />} />
        <Route path="software" element={<SoftwarePage />} />
        <Route path="Insights" element={<Insights />} />
        <Route path="Insights/blog" element={<BlogContainer />} />
        <Route path="company/about" element={<AboutPage />} />
        <Route path="company/menu" element={<Menu />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Navigate to="/de" />} />
          <Route path="/:lang/*" element={<LanguageWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
