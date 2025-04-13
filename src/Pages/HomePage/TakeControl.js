import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Browser from "../../assets/Browsers.svg";
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';
import ScrollMaskHeadings from '../../Componenets/CommonComponents/ScrollMaskHeadings';

const TakeControl = () => {
  return (
    <Box sx={{ p: 3 }} className='section-container'>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#262626',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 5 },
          overflow: 'hidden',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 6 },
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-20%',
            right: '-5%',
            width: { xs: '250px', md: '500px' },
            height: { xs: '250px', md: '450px' },
            background: 'linear-gradient(135deg, #93CAEE 50%, #620C90 55%)',
            filter: 'blur(90px)',
            opacity: 0.7,
            zIndex: 0,
          },
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, zIndex: 1 }}>
          <List>
            <ListItem sx={{ p: 0, alignItems: 'center' }}>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#C2C2C4',
                  mr: 1.5, // Spacing between dot and text
                }}
                className='bodyRegularText4'
              />
              <ListItemText
                primary="Cloud System"
                sx={{ '& .MuiListItemText-primary': { color: '#C2C2C4', fontSize: '16px', fontWeight: 400 } }}
              />
            </ListItem>
          </List>

          {/* <Typography variant="h2" sx={{ color: '#FCFCFC', mb: 2 }} className='headings-h2'>
            Take Control of Your Vending Network
          </Typography> */}
          <div data-cursor="hover">
            <ScrollMaskHeadings data-cursor="hover" text="Take Control of Your Vending Network" />
          </div>
          {/* <Typography sx={{ color: '#C2C2C4', mb: 3, mt: 2 }} className='bodyRegularText3'>
            Manage your vending machines globally, adjust pricing on the fly, and track key performance indicators—all from a single, user-friendly dashboard.
          </Typography> */}
          <Box sx={{ mb: 3, mt: 2 }} data-cursor="hover">
            <ScrollMaskText text="Manage your vending machines globally, adjust pricing on the fly, and track key performance indicators—all from a single, user-friendly dashboard."
            />
          </Box>

          <AnimateButton route='software' />
        </Box>

        {/* Right Image Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 1 }}>
          <Box component="img" src={Browser} alt="Dashboard Preview" sx={{ width: '100%', maxWidth: '800px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default TakeControl;