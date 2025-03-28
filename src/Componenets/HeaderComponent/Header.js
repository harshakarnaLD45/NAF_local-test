import React, { useState, useEffect, useRef } from 'react';
import { Box, Menu, MenuItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Naflogo from '../../assets/naf-halsbach_logo 1.png';
import MenuIcons from '../../assets/Menu_icon.png';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowIcon1, ProfileIcon } from '../CustomIcons';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleProfileMenuClose = () => setProfileAnchorEl(null);

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

  return (
    <Box className='header-container'>
      <Box
        component="img"
        className='main-logo'
        alt="New Age Logo"
        src={Naflogo}
      />

      <Box
        className='menu-mobile-sec'
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: { xs: '0px', sm: '0px', md: '0px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {!anchorEl && (
          <Box
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
            <span className="bodyRegularText3">{t('homePage.menu')}</span>
          </Box>
        )}

        {anchorEl && (
          <Box className="menu-container" ref={menuRef}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 2, md: 3 } }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Machine', path: '/machine' },
                { label: 'Software', path: '/software' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Insights', path: '/insights' },
                { label: 'Company', path: '/company' }
              ].map(({ label, path }) => (
                <Box
                  key={path}
                  className={`menu-item ${location.pathname === path ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: location.pathname === path ? '#1A1A1A' : '#FCFCFC'
                  }}
                  onClick={() => handleNavigation(path)}
                >
                  <Box sx={{ width: '20px' }}>
                    {location.pathname === path && <span className="arrow-icon"><ArrowIcon1 /></span>}
                  </Box>
                  {label}
                </Box>
              ))}
            </Box>

            {/* Cancel Menu at Bottom */}
            <Box className="custom-button" onClick={handleMenuClose}>
              <CloseIcon sx={{ fontSize: '24px' }} />
              <span className="bodyRegularText3">Menu</span>
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px', gap: { xs: '4px', sm: '6px', md: '10px' } }}>
        <Box sx={{ position: 'relative' }}>
          <IconButton className='profile-button' onClick={(event) => setProfileAnchorEl(event.currentTarget)}>
            <ProfileIcon />
          </IconButton>

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
            <MenuItem onClick={handleProfileMenuClose} sx={{ color: "#FCFCFC", padding: "10px 20px" }} className='bodyRegularText4'>Membership Log In</MenuItem>
            <MenuItem onClick={handleProfileMenuClose} sx={{ color: "#FCFCFC", padding: "10px 20px" }} className='bodyRegularText4'>Log In / Sign Up</MenuItem>
            <MenuItem onClick={handleProfileMenuClose} sx={{ color: "#FCFCFC", padding: "10px 20px" }} className='bodyRegularText4'>Client Log In</MenuItem>
          </Menu>
        </Box>

        <button class="book-demo-btn bodyRegularText4">Book a Demo</button>
      </Box>
    </Box>
  );
};

export default Header;