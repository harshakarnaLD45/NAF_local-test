import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './HomePage.css';
import HomepageShowreel from './Homepagereel';
import Explore from './Explore';
import Clients from './Clients';
import Request from './Request';
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
          {/* <Typography data-cursor="hover" variant='h1' className='headings-h1 main-sub-container1  maintext' sx={{ color: '#FCFCFC' }}>
            Revolutionize Your Business with Smart Vending Solutions
          </Typography> */}
          <GradientMaskText />
          <Box className='maintextcontainer'>
            <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py:3 }}>
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
      {/* <Request /> */}
      <WhatsNew />
      <NafParagrap />
      <Testmonials />
    </Box>
  );
};

export default HomePage;