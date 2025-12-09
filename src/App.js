import './App.css';
import React, { Suspense, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CookieConsent from "react-cookie-consent";

import './i18n';
import { NavigationProvider, useNavigation } from './Preload/NavigationProvider';
import PreloadLinkHandler from './Preload/PreloadLinkHandler';
import CustomCursor from './Componenets/NoiseEffect/CustomCursor';
import Preloader from './Preload/preload';
import ChatBot from './Componenets/ChatBot/ChatBot';
import ProtectedRoute from './Componenets/ProtectedRoute';



// Lazy-loaded pages
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';
import GourmetVendingMachine from './Pages/ProductsPage/gourmet-vending-machine';
import SoftIceVendingMachine from './Pages/ProductsPage/soft-ice-vending-machine';
import PizzaVendingMachine from './Pages/ProductsPage/pizza-vending-machine';




const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const MachinesPage = React.lazy(() => import('./Pages/MachinesPage/MachinesPage'));
const Menu = React.lazy(() => import('./Pages/Company/Menu/Menu'));
const SoftwarePage = React.lazy(() => import('./Pages/SoftwarePage/SoftwarePage'));
const AboutPage = React.lazy(() => import('./Pages/Company/AboutPage/AboutPage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage/ContactPage'));
const MantaincePage = React.lazy(() => import('./Pages/MachinesPage/MantaincePage/MantaincePage'));
const PrivacyPolicyPage = React.lazy(() => import('./Pages/PrivacyPolicy/privacypolicy'));
const Membership = React.lazy(() => import('./Pages/Membership/Membership'));
const Dashboard = React.lazy(() => import('./Pages/Membership/Dashboard'));
const PaymentPage = React.lazy(() => import('./Pages/Membership/PaymentPage'));
const ImprintsPage = React.lazy(() => import('./Pages/PrivacyPolicy/imprints'));

const preloadHeavyPages = () => {
  import('./Pages/MachinesPage/MachinesPage');      // Vending Machine
  import('./Pages/SoftwarePage/SoftwarePage');      // Software
  import('./Pages/Company/Menu/Menu');              // Food Menu
  import('./Pages/Company/AboutPage/AboutPage');    // Discover NAF
};

const LanguageWrapper = React.memo(() => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const { setLoading } = useNavigation();
  const preloaderRef = useRef();

  useEffect(() => {
    preloadHeavyPages(); // Preload heavy pages in background
  }, []);

  useEffect(() => {
    if (!preloaderRef.current) return;
    preloaderRef.current.style.opacity = "1";
    preloaderRef.current.style.pointerEvents = "all";
    setLoading(true);

    const timer = setTimeout(() => {
      preloaderRef.current.style.transition = "opacity 0.3s ease";
      preloaderRef.current.style.opacity = "0";
      preloaderRef.current.style.pointerEvents = "none";
      setLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  useEffect(() => {
    const supported = ['de', 'en', 'fr', 'es', 'pl'];
    i18n.changeLanguage(supported.includes(lang) ? lang : 'de');
  }, [lang, i18n]);

  return (
    <>
      <div ref={preloaderRef} className="preloader-wrapper">
        <Preloader />
      </div>

      {/* Header and NoiseEffect always render immediately */}
      <Suspense fallback={<div />}>
        <Header />
        <NoiseEffect />
      </Suspense>

      {/* Cookie Consent */}
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText={t("Header.accept")}
        declineButtonText={t("Header.reject")}
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        buttonClasses="cookie-accept-button"
        declineButtonClasses="cookie-decline-button"
      >
        <div className="cookie-text bodyMediumText2" style={{ color: '#FCFCFC' }}>
          {t("Header.cookieMessage")}&nbsp;
          <a onClick={() => navigate(`/${lang}/privacy-policy`)} style={{ color: '#FCFCFC' }} className="cookie-link bodyMediumText2">
            {t("Header.privacyPolicy")}
          </a>
        </div>
      </CookieConsent>

      {/* Lazy-loaded page content */}
     

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="machine" element={<MachinesPage />} />
          <Route path="maintaince" element={<MantaincePage />} />
          <Route path="products/gourmet-machine" element={<GourmetVendingMachine />} />
        
          <Route path="products/ice-cream-machine" element={<SoftIceVendingMachine />} />
          <Route path="products/pizza-machine" element={<PizzaVendingMachine />} />
          <Route path="software" element={<SoftwarePage />} />
          <Route path="company/about" element={<AboutPage />} />
          <Route path="company/menu" element={<Menu />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="membership" element={<Membership />} />
          <Route path="/login" element={<Membership />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/payment/:machineNumber/:amount" element={<PaymentPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="imprint" element={<ImprintsPage />} />
          
          <Route path="*" element={<HomePage />} />
        </Routes>
      

      <ChatBot />
      <Footer />
  
    </>
  );
});

function App() {
  return (
    <NavigationProvider>
      <BrowserRouter>
        <CustomCursor />
        <PreloadLinkHandler>
          <Routes>
            <Route path="/" element={<Navigate to="/de" />} />
            <Route path="/:lang/*" element={<LanguageWrapper />} />
          </Routes>
        </PreloadLinkHandler>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;
