import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './HomePage.css';
import HomepageShowreel from './Homepagereel';
import Explore from './Explore';
import Clients from './Clients';
import TakeControl from './TakeControl';
import NafParagrap from './NafParagrap';
import WhatsNew from './WhatsNew';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import Testmonials from './Testmonials';
import Sustainability from './Sustainability';
import WhoWeServe from './WhoWeServe';
import GradientMaskText from '../../Componenets/CommonComponents/GradientMaskText';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box className='main-container'>
        <Box>
          <GradientMaskText />
          <Box className='maintextcontainer'>
            <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' } }}>
              {t('Home.mainParagraph')}
            </Typography>
            <Box data-cursor="hover" className="button-container">
              <AnimateButton route='machine' />
            </Box>
          </Box>
        </Box>

        <Box></Box>
      </Box>

      <HomepageShowreel />
      <Explore />
      <Clients />
      <WhoWeServe />
      <Sustainability />
      <TakeControl />
      <WhatsNew />
      <NafParagrap />
      <Testmonials />
    </Box>
  );
};

export default HomePage;