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
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import VendImg from '../../assets/Home/Machine7.png'

const HomePage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Helmet>
        <title>NAF Vending - Home</title>
        <link rel="canonical" href="https://vendinaf.com/en" />
        <meta name='description'
          content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
        <meta name="keywords"
          content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      <Box className='main-container'>
        <Box>
          <GradientMaskText />
          <Box className='maintextcontainer'>
            <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' } }}>
              {t('Home.mainParagraph')}
            </Typography>
            <Box data-cursor="hover" className="button-container">
              <AnimateButton route={`/${lang}/machine`} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            display: { xs: 'none', sm: 'none', md: "flex" },
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={VendImg}
            alt="naf-vending"
            sx={{
              width: { xs: "80%", sm: "60%", md: "40%" },
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

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