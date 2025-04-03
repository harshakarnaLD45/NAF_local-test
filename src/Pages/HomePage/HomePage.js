import React from 'react';
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

const HomePage = () => {
  return (
    <Box>
      <Box className='main-container'>
        <Box >
          <Typography variant='h1' className='headings-h1 main-sub-container1  maintext' sx={{ color: '#FCFCFC' }}>
            Revolutionize Your Business with Smart Vending Solutions
          </Typography>

          <Box className='main-sub-container2  maintextcontainer '>
            <Typography className='bodyRegularText3 maintext   maintext1' sx={{ color: '#C2C2C4' }}>
              Streamline your operations and boost your bottom line. Our vending
              solutions are built for efficiency, offering reliable performance and
              increased revenue.
            </Typography>
            <Box  className="button-container">
              <AnimateButton  />
            </Box>
          </Box>
        </Box>

        <Box></Box>
      </Box>

      <HomepageShowreel />
      <Explore />
      <Clients />
      <TakeControl />
      <Request />
      <WhatsNew />
      <NafParagrap />
      <Testmonials />
    </Box>
  );
};

export default HomePage;