import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import './HomePage.css';
import { useTranslation } from 'react-i18next';

const TradefairPopup = () => {
  const [isVisible, setIsVisible] = useState(true); // ✅ show immediately
  const { t } = useTranslation();

  useEffect(() => {
    // ✅ Auto hide after 10 seconds
    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(autoCloseTimer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleLearnMore = () => {
    window.open('https://www.iss-gut-leipzig.de/', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <Box className="tradefair-popup-overlay">
      <Box className="tradefair-popup-container">
        <IconButton
          className="tradefair-popup-close"
          onClick={handleClose}
          data-cursor="hover"
        >
          <Close sx={{ fontSize: '20px' }} />
        </IconButton>

        <Box className="tradefair-popup-content">
          <Typography
            variant="h3"
            className="tradefair-popup-title headings-h4"
            data-cursor="hover"
          >
            {t('tradefairPopup.title', 'Experience the Future of Gastronomy – Live at ISS GUT Leipzig')}
          </Typography>

          <Typography
            className="tradefair-popup-description bodyRegularText3"
            data-cursor="hover"
          >
            {t('tradefairPopup.description', 'Visit NAF — New Age of Food at the DEHOGA Sachsen booth and discover our intelligent vending machines for hot meals, pizzas, and more.')}
          </Typography>

          <Typography
            className="tradefair-popup-offer bodyRegularText4"
            data-cursor="hover"
          >
            {t('tradefairPopup.offer', 'Exclusive trade fair offers and funding information await you!')}
          </Typography>

          <Box className="tradefair-popup-button-container">
            <button
              className="tradefair-popup-button bodyMediumText4"
              data-cursor="hover"
            >
              <a
                style={{
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  width: '100%',
                  height: '100%'
                }}
                href='https://messe.vendinaf.com/dehoga'
                target='_blank'
                rel='noreferrer'
              >
                {t('tradefairPopup.learnMore', 'Learn More')}
              </a>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TradefairPopup;
