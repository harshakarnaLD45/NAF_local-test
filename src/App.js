import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';
import './i18n';
import MachinesPage from './Pages/MachinesPage/MachinesPage';
// import Insights from './Pages/Insights/Insights';
import Menu from './Pages/Company/Menu/Menu';
import SoftwarePage from './Pages/SoftwarePage/SoftwarePage';
import AboutPage from './Pages/Company/AboutPage/AboutPage';
import CustomCursor from './Componenets/NoiseEffect/CustomCursor';
import ContactPage from './Pages/ContactPage/ContactPage';
import MantaincePage from './Pages/MachinesPage/MantaincePage/MantaincePage';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import CookieConsent from "react-cookie-consent";
import PrivacyPolicyPage from './Pages/PrivacyPolicy/privacypolicy';
import gsap from "gsap";
import Preloader from './Preload/preload';
import { useLocation } from 'react-router-dom';
import { NavigationProvider, useNavigation } from './Preload/NavigationProvider';
import PreloadLinkHandler from './Preload/PreloadLinkHandler';

const LanguageWrapper = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const {loading, setLoading} = useNavigation();
  const preloaderRef = useRef();



  // Show preloader on route change
  useEffect(() => {
    if (preloaderRef.current) {
      gsap.set(preloaderRef.current, { opacity: 1, pointerEvents: "all" });
    }
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.6,
          onComplete: () => setLoading(false),
        });
      } else {
        setLoading(false);
      }
    }, 600); // Adjust as needed
    return () => clearTimeout(timer);
  }, [location, setLoading]);


  useEffect(() => {
    const supportedLangs = ['de', 'en', 'fr', 'es', 'pl'];
    i18n.changeLanguage(supportedLangs.includes(lang) ? lang : 'de');
  }, [lang, i18n]);

  return (
    <>
      <div ref={preloaderRef}>
        <Preloader  />
      </div>

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
        {/* <Route path="Insights" element={<Insights />} /> */}
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
      <NavigationProvider>
        <BrowserRouter>
          <CustomCursor/>
          <PreloadLinkHandler>
            <Routes>
              <Route path="/" element={<Navigate to="/de" />} />
              <Route path="/:lang/*" element={<LanguageWrapper />} />
            </Routes>
          </PreloadLinkHandler>
        </BrowserRouter>
      </NavigationProvider>
    </>
  );
}

export default App;
