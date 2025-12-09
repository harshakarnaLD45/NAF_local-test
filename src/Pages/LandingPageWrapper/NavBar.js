import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import NafLogoGif from "../naf-logo-json.json";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { i18n } = useTranslation();

  // ✅ Always start with German
  const [language, setLanguage] = useState("German");

  // ✅ Override browser detection & force German first time
  useEffect(() => {
    if (i18n.language !== "de") {
      i18n.changeLanguage("de");
    }
  }, []);

  const handleLanguageChange = (e) => {
    const selected = e.target.value;
    setLanguage(selected);

    if (selected === "English") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("de");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white flex justify-between items-center px-6 py-3 z-50 bg-transparent">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14">
          <Lottie animationData={NafLogoGif} loop autoplay />
        </div>


      {/* Language Selector */}
      <div className="flex items-center justify-center">
        <div className="relative flex items-center gap-2 border border-gray-500 rounded-full px-4 py-1.5 bg-white transition-all duration-200">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 13 12"
            fill="none"
            className="flex-shrink-0 pointer-events-none"
          >
            <path
              d="M6.27725 11.5179L8.89757 4.60716H10.107L12.7273 11.5179H11.5179L10.8988 9.76141H8.10572L7.48663 11.5179H6.27725ZM1.72768 9.79021L0.921431 8.98396L3.8297 6.07569C3.49376 5.73975 3.18892 5.35582 2.91518 4.9239C2.64144 4.49198 2.38958 4.00247 2.15961 3.45537H3.36898C3.56095 3.8297 3.75291 4.15604 3.94488 4.43439C4.13684 4.71274 4.3672 4.99109 4.63595 5.26944C4.95269 4.95269 5.28153 4.50868 5.62246 3.93739C5.96339 3.3661 6.22005 2.8215 6.39243 2.30358H0V1.15179H4.03126V0H5.18305V1.15179H9.21432V2.30358H7.54422C7.34266 2.99465 7.04031 3.70492 6.63719 4.43439C6.23406 5.16385 5.83573 5.72055 5.4422 6.10448L6.82435 7.51542L6.39243 8.69601L4.63595 6.89634L1.72768 9.79021ZM8.46565 8.7536H10.5389L9.50226 5.81654L8.46565 8.7536Z"
              fill="#4C33DB"
            />
          </svg>

          {/* Dropdown - iOS & Mac Compatible */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="appearance-none bg-transparent text-black text-sm focus:outline-none cursor-pointer pr-2"
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              minWidth: '80px',
              backgroundImage: 'none',
              paddingRight: '8px'
            }}
          >
            <option value="English">English</option>
            <option value="German">German</option>
          </select>

          {/* Custom Dropdown Arrow for iOS & Mac */}
          <svg 
            className="w-3 h-3 pointer-events-none flex-shrink-0" 
            fill="none" 
            stroke="#4C33DB" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;