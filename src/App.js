import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';
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
import CookieConsent from "react-cookie-consent";
import PrivacyPolicyPage from './Pages/PrivacyPolicy/privacypolicy';

const LanguageWrapper = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const supportedLangs = ['de', 'en', 'fr', 'es', 'pl'];
    i18n.changeLanguage(supportedLangs.includes(lang) ? lang : 'de');
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText={t("Header.accept")}
        declineButtonText={t("Header.reject")}
        onAccept={() => console.log("Cookies accepted")}
        onDecline={() => console.log("Cookies declined")}
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        buttonClasses="cookie-accept-button"
        declineButtonClasses="cookie-decline-button"
        expires={365}
      >
        <div className="cookie-text bodyMediumText2" style={{ color: '#FCFCFC' }}>
          {t("Header.cookieMessage")}&nbsp;
          <a onClick={() => navigate(`/${lang}/privacy-policy`)} style={{ color: '#FCFCFC' }} className="cookie-link bodyMediumText2">
            {t("Header.privacyPolicy")}
          </a>
        </div>
        <div className="cookie-buttons">
          {/* Buttons will render here via react-cookie-consent */}
        </div>
      </CookieConsent>




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
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
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
