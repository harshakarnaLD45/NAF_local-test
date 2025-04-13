import React, { useState, useEffect, useRef } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Naflogo from '../../assets/naf-halsbach_logo 1.png';
import MenuIcons from '../../assets/Menu_icon.png';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowIcon1, DropDownIcon, ProfileIcon } from '../CustomIcons';
import EastIcon from '@mui/icons-material/East';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

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
    handleMenuClose();
  };

  // Handle outside click to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleMenuClose(); // Close menu when clicking outside
      }
    };

    if (anchorEl) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

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
    console.log(event.target.value);

    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Box className={`header-container header ${showHeader ? "visible" : "hidden"}`}>
      <Box onClick={() => navigate('/')}
        component="img"
        className='main-logo'
        alt="New Age Logo"
        src={Naflogo}
      />

      <Box data-cursor="hover"
        className='mobile-view1'
        sx={{
          backgroundColor: '#F4F4F4',
          borderRadius: '32px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '12px',
        }}
        onClick={handleMenuOpen}
      >
        <img
          className='menuicons'
          src={MenuIcons}
          alt="Menu"
          style={{
            width: '20px',
            height: '15px',
          }}
        />
        <span className="bodyRegularText3">Menu</span>
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
            <span className="bodyRegularText3">Menu</span>
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
                <option value="de" className='bodyRegularText3'>DEU</option>
                <option value="en" className='bodyRegularText3'>ENG</option>
                <option value="fr" className='bodyRegularText3'>FRA</option>
                <option value="es" className='bodyRegularText3'>ESP</option>
                <option value="pl" className='bodyRegularText3'>POL</option>
              </select>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 2, md: 3 } }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Machine', path: '/machine' },
                { label: 'Software', path: '/software' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Insights', path: '/insights' }
              ].map(({ label, path }) => (
                <Box
                  key={path}
                  className={`menu-item ${(location.pathname === path || hoveredPath === path) ? 'bodyMediumText1' : 'bodyRegularText2'}`}
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
              <Box>
                <Box
                  className='menu-item'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsCompanyOpen((prev) => !prev)}
                  onMouseEnter={() => setHoveredPath('/company')}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  {(location.pathname.startsWith('/company') ||
                    hoveredPath === '/company' ||
                    hoveredPath === '/company/about' ||
                    hoveredPath === '/company/menu') && (
                      <span className="arrow-icon"><ArrowIcon1 /></span>
                    )}
                  <Box sx={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    color: (
                      location.pathname.startsWith('/company') ||
                      hoveredPath === '/company' ||
                      hoveredPath === '/company/about' ||
                      hoveredPath === '/company/menu'
                    ) ? '#1A1A1A' : '#FCFCFC',
                  }} className={`${(location.pathname.startsWith('/company') ||
                    hoveredPath === '/company' ||
                    hoveredPath === '/company/about' ||
                    hoveredPath === '/company/menu') ? 'bodyMediumText1' : 'bodyRegularText2'}`}>Company <DropDownIcon color={(location.pathname.startsWith('/company') ||
                      hoveredPath === '/company' ||
                      hoveredPath === '/company/about' ||
                      hoveredPath === '/company/menu') ? '#1A1A1A' : '#FCFCFC'} /></Box>
                </Box>

                {isCompanyOpen && (
                  <Box sx={{ pl: 12, display: 'flex', flexDirection: 'column' }}>
                    <Box
                      className={`menu-item ${(location.pathname === '/company/about' || hoveredPath === '/company/about') ? 'bodyMediumText2' : 'bodyRegularText3'}`}
                      sx={{ color: (location.pathname.startsWith('/company/about') || hoveredPath === '/company/about') ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }}
                      onClick={() => {
                        setIsCompanyOpen(false);
                        handleNavigation('/company/about');
                      }}
                      onMouseEnter={() => setHoveredPath('/company/about')}
                      onMouseLeave={() => setHoveredPath(null)}
                    >
                      About Us
                    </Box>
                    <Box
                      className={`menu-item ${(location.pathname === '/company/menu' || hoveredPath === '/company/menu') ? 'bodyMediumText2' : 'bodyRegularText3'}`}
                      sx={{ color: (location.pathname.startsWith('/company/menu') || hoveredPath === '/company/menu') ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }}
                      onClick={() => {
                        setIsCompanyOpen(false);
                        handleNavigation('/company/menu');
                      }}
                      onMouseEnter={() => setHoveredPath('/company/menu')}
                      onMouseLeave={() => setHoveredPath(null)}
                    >
                      Menu
                    </Box>
                  </Box>
                )}
              </Box>

              {isMobile && (
                <Box>
                  <Box
                    className={`menu-item ${location.pathname === '/signIn' ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: location.pathname === '/signIn' ? '#1A1A1A' : '#FCFCFC',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsSignInOpen((prev) => !prev)} // Toggle dropdown properly
                  >
                    {location.pathname === '/signIn' && <span className="arrow-icon"><ArrowIcon1 /></span>}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>Sign In <DropDownIcon color={location.pathname.startsWith('/signIn') ? '#1A1A1A' : '#FCFCFC'} /></Box>
                  </Box>

                  {/* Show sublist when isSignInOpen is true */}
                  {isSignInOpen && (
                    <Box sx={{ pl: 12, display: 'flex', flexDirection: 'column' }}>
                      <Box className="menu-item bodyRegularText3" sx={{ color: location.pathname === '/signIn' ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }} onClick={() => setIsSignInOpen(false)}>
                        Membership Log In
                      </Box>
                      <Box className="menu-item bodyRegularText3" sx={{ color: location.pathname === '/signIn' ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }} onClick={() => setIsSignInOpen(false)}>
                        Log In / Sign Up
                      </Box>
                      <Box className="menu-item bodyRegularText3" sx={{ color: location.pathname === '/signIn' ? '#1A1A1A' : '#FCFCFC', cursor: "pointer" }} onClick={() => setIsSignInOpen(false)}>
                        Client Log In
                      </Box>
                    </Box>
                  )}

                  <Box
                    className={`menu-item ${location.pathname === '/contact' ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mt: '16px',
                      color: location.pathname === '/contact' ? '#1A1A1A' : '#FCFCFC'
                    }}
                    onClick={() => handleNavigation('/contact')}
                  >
                    <Box sx={{ width: '20px' }}>
                      {location.pathname === '/contact' && <span className="arrow-icon"><ArrowIcon1 /></span>}
                    </Box>
                    Book a Demo
                  </Box>
                </Box>
              )}
            </Box>

            {/* Cancel Menu at Bottom */}
            {!isMobile && (
              <Box className="custom-button" onClick={handleMenuClose}>
                <CloseIcon sx={{ fontSize: '24px' }} />
                <span className="bodyRegularText3">Menu</span>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {
        !isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px', gap: { xs: '4px', sm: '6px', md: '10px' } }}>
            <Box>
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
                {["Membership Log In", "Log In / Sign Up", "Client Log In"].map((text) => (
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
            </Box>

            <button data-cursor="hover" onClick={() => navigate('contact')} class="book-demo-btn bodyRegularText4">Book a Demo</button>
          </Box>
        )
      }
    </Box >
  );
};

export default Header;