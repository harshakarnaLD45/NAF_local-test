import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import MaintainceImage from '../../assets/Machines/Maintaince.png'
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

const Maintenance = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className='section-container'>
      <Box
        sx={{
          backgroundColor: '#262626',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 5 },
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 6 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, zIndex: 1 }}>
          <div data-cursor="hover">
            <Typography data-cursor="hover" variant='h1' className='headings-h2' sx={{ color: '#FCFCFC' }}>
              {t('machines.NAFMaintenanceTitle')}
            </Typography>
          </div>
          <Box sx={{ mb: 3, mt: 2 }} data-cursor="hover">
            <Typography data-cursor="hover" className='bodyRegularText3' sx={{ color: '#C2C2C4', py: 3 }}>
              {t('machines.NAFMaintenanceSubTitle')}
            </Typography>
          </Box>

          <AnimateButton route={`/${lang}/maintaince`} />
        </Box>

        {/* Right Image Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 1 }}>
          <Box component="img" src={MaintainceImage} alt="Dashboard Preview" sx={{ width: '100%', maxWidth: '800px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Maintenance;