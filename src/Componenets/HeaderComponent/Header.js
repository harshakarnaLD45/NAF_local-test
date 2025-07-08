import React, { useState, useEffect, useRef } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcons from '../../assets/Menu-icon.png';
import './Header.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowIcon1, DropDownIcon, ProfileIcon } from '../CustomIcons';
import EastIcon from '@mui/icons-material/East';
import NafLogoGif from '../../assets/naf-logo-json.json'
import Lottie from "lottie-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const menuTriggerRef = useRef(null); // for the menu button  
  const { lang } = useParams();
  const currentLang = lang || i18n.language;


  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Correct state variable
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const [language, setLanguage] = useState(i18n.language);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleProfileMenuClose = () => setProfileAnchorEl(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const languageDropdownRef = useRef(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredPath, setHoveredPath] = useState(null);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & passed 100px
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setAnchorEl(null); // Close menu on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [profileAnchorEl]);

  const handleNavigation = (path) => {
    navigate(path);
    setAnchorEl(null);
    setHoveredPath(null);
    setIsSignInOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        anchorEl && // menu is open
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuTriggerRef.current && !menuTriggerRef.current.contains(event.target)
      ) {
        handleMenuClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [anchorEl]);

  useEffect(() => {
    const handleScroll = () => {
      if (anchorEl) {
        handleMenuClose(); // Close the menu if open
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // passive for better performance

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchorEl, handleMenuClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileAnchorEl && !profileAnchorEl.contains(event.target)) {
        handleProfileMenuClose();
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [profileAnchorEl]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    const pathParts = location.pathname.split('/').filter(Boolean);

    if (pathParts.length > 0 && /^[a-z]{2}$/.test(pathParts[0])) {
      pathParts[0] = newLanguage;
    } else {
      pathParts.unshift(newLanguage);
    }

    const newPath = `/${pathParts.join('/')}`;
    localStorage.setItem("i18nextLng", newLanguage);
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage); // ✅ update local state
    navigate(newPath);
  };

  const strippedPath = location.pathname.replace(/^\/[a-z]{2}\//, '/');

  return (
    <>
      <Box onClick={() => navigate(`/${currentLang}`)} sx={{ cursor: 'pointer' }} className="main-logo">
        <Lottie
          animationData={NafLogoGif}
          className="w-full h-full"
          loop
          autoplay
        />
      </Box>
      <Box className={`header-container header ${showHeader ? "visible" : "hidden"}`}>

        <Box></Box>

        <Box data-cursor="hover"
          className='mobile-view1'
          ref={menuTriggerRef}
          sx={{
            backgroundColor: '#F4F4F4',
            borderRadius: '32px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '12px',
            color: "#1A1A1A"
          }}
          onClick={anchorEl ? handleMenuClose : handleMenuOpen}
        >
          {anchorEl ? (
            <>
              <CloseIcon sx={{ fontSize: '20px' }} />
            </>
          ) : (
            <>
              <img
                className='menuicons'
                src={MenuIcons}
                alt="Menu"
                style={{
                  width: '20px',
                  height: '15px',
                }}
              />
            </>
          )}
          <span className="bodyRegularText3" style={{ color: "#1A1A1A" }}> {t("Header.menu")}</span>
        </Box>
        <Box data-cursor="hover"
          className='menu-mobile-sec'
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: '999999 !important',
          }}
        >
          {!anchorEl && !isMobile && (
            <Box
              className='mobile-view'
              sx={{
                backgroundColor: '#7FEE64',
                borderRadius: {
                  xs: '0px 0px 16px 16px',
                  sm: '0px 0px 20px 20px',
                  md: '0px 0px 24px 24px',
                },
                padding: { xs: '6px 12px', sm: '10px 16px', md: '14px 24px' },
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: "#1A1A1A",
                gap: 1.5
              }}
              onClick={handleMenuOpen}
            >
              <img
                className='menuicons'
                src={MenuIcons}
                alt="Menu"
                style={{
                  width: { xs: '18px', sm: '20px', md: '20px' },
                  height: '16px',
                  marginRight: { xs: '2px', sm: '4px', md: '18px' },
                }}
              />
              <span className="bodyRegularText3" style={{ color: "#1A1A1A" }}> {t("Header.menu")}</span>
            </Box>
          )}

          {anchorEl && (
            <Box className="menu-container" ref={menuRef}>
              {/* Language Dropdown at Top Right */}
              <Box sx={{ position: 'absolute', top: 25, right: 25 }} ref={languageDropdownRef}>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="language-dropdown-trigger bodyRegularText3"
                  style={{
                    paddingRight: '40px',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 8px center',
                    backgroundSize: '25px',
                  }}
                >
                  <option value="de" className='bodyRegularText3'>Deutsch</option>
                  <option value="en" className='bodyRegularText3'>English</option>
                  <option value="fr" className='bodyRegularText3'>Français</option>
                  <option value="es" className='bodyRegularText3'>Español</option>
                  <option value="pl" className='bodyRegularText3'>Polski</option>
                </select>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 2, md: 3 }, transition: 'transform 1s ease-in-out' }}>
                {[
                  { label: t("Header.menuHome"), path: `/${currentLang}` },
                  { label: t("Header.menuMachines"), path: `/${currentLang}/machine` },
                  { label: t("Header.menuSoftware"), path: `/${currentLang}/software` },
                  { label: t("Header.menuInsights"), path: `/${currentLang}/Insights` },
                  { label: t("Header.CompanyDiscover"), path: `/${currentLang}/company/about` },
                  { label: t("Header.foodMenu"), path: `/${currentLang}/company/menu` },
                ].map(({ label, path }) => (
                  <Box
                    key={path}
                    className={`menu-item ${(strippedPath === path.replace(`/${currentLang}`, '')) ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: (location.pathname === path || hoveredPath === path) ? '#1A1A1A' : '#FCFCFC'
                    }}
                    onClick={() => handleNavigation(path)}
                    onMouseEnter={() => setHoveredPath(path)}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    {(location.pathname === path || hoveredPath === path) && (
                      <span className="arrow-icon"><ArrowIcon1 /></span>
                    )}
                    {label}
                  </Box>
                ))}
                {isMobile && (
                  <Box>
                    {/* SignIn Dropdown Menu */}
                    {/* <Box
                    className={`menu-item ${(strippedPath === '/signIn') ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: (strippedPath === '/signIn') ? '#1A1A1A' : '#FCFCFC',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsSignInOpen((prev) => !prev)}
                  >
                    {(strippedPath === '/signIn') && <span className="arrow-icon"><ArrowIcon1 /></span>}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {t("Header.profileSignIn")}
                      <DropDownIcon color={(strippedPath.startsWith('/signIn')) ? '#1A1A1A' : '#FCFCFC'} />
                    </Box>
                  </Box> */}

                    {/* Show sublist when SignIn dropdown is open */}
                    {isSignInOpen && (
                      <Box sx={{ pl: 12, display: 'flex', flexDirection: 'column' }}>
                        <Box
                          className="menu-item bodyRegularText3"
                          sx={{ color: (strippedPath === '/signIn') ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }}
                          onClick={() => setIsSignInOpen(false)}
                        >
                          {t("Header.profilemenbership")}
                        </Box>
                        <Box
                          className="menu-item bodyRegularText3"
                          sx={{ color: (strippedPath === '/signIn') ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }}
                          onClick={() => setIsSignInOpen(false)}
                        >
                          {t("Header.profilelogin")}
                        </Box>
                        <Box
                          className="menu-item bodyRegularText3"
                          sx={{ color: (strippedPath === '/signIn') ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }}
                          onClick={() => setIsSignInOpen(false)}
                        >
                          {t("Header.profileregister")}
                        </Box>
                      </Box>
                    )}

                    {/* Contact Page Menu */}
                    <Box
                      className={`menu-item ${(strippedPath === '/contact') ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        mt: '10px',
                        color: (strippedPath === '/contact') ? '#1A1A1A' : '#FCFCFC',
                        gap: '10px',
                      }}
                      onClick={() => handleNavigation(`/${currentLang}/contact`)}
                    >
                      {(strippedPath === '/contact') && <span className="arrow-icon"><ArrowIcon1 /></span>}
                      <span>{t("Header.BookaDemo")}</span>
                    </Box>
                  </Box>
                )}

              </Box>

              {/* Cancel Menu at Bottom */}
              {!isMobile && (
                <Box className="custom-button" onClick={handleMenuClose}>
                  <CloseIcon sx={{ fontSize: '24px' }} />
                  <span style={{ color: "#1A1A1A" }} className="bodyRegularText3"> {t("Header.menu")}</span>
                </Box>
              )}
            </Box>
          )}
        </Box>

        {
          !isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px', gap: { xs: '4px', sm: '6px', md: '10px' } }}>
              {/* <Box>
              <button data-cursor="hover" className='profile-button' onClick={(event) => setProfileAnchorEl(event.currentTarget)}>
                <ProfileIcon />
              </button>

              <Menu
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={handleProfileMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                PaperProps={{
                  sx: {
                    backgroundColor: '#262626',
                    borderRadius: '10px',
                    width: { xs: '160px', sm: '200px', md: '230px' },
                    marginTop: '4px',
                  }
                }}
              >
                {[t("Header.profilemenbership"), t("Header.profilelogin"), t("Header.profileregister")].map((text) => (
                  <MenuItem
                    key={text}
                    onClick={handleProfileMenuClose}
                    sx={{
                      color: "#FCFCFC",
                      padding: "10px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      "&:hover": {
                        color: "#7FEE64",
                        "& .arrow-icon": {
                          opacity: 1, // Show the arrow when hovering over the item
                          color: "#7FEE64",
                        },
                      },
                    }}
                    className="bodyRegularText4"
                  >
                    {text}
                    <EastIcon
                      className="arrow-icon"
                      sx={{
                        opacity: 0, // Initially hidden
                        transition: "opacity 0.2s ease-in-out",
                      }}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

              <button
                data-cursor="hover"
                onClick={() => navigate(`/${currentLang}/contact`)}
                className="book-demo-btn bodyRegularText4"
              >
                {t("Header.BookaDemo")}
              </button>
            </Box>
          )
        }
      </Box>
    </>
  );
};

export default Header;