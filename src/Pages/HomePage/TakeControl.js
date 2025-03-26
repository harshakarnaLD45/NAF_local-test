import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Browser from "../../assets/Browsers.png";
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';

const TakeControl = () => {
  return (
    <Box className='section-container'>
      <Box
        sx={{
          position: 'relative',
          background: '#262626',
          padding: { xs: '40px 15px', sm: '50px 20px', md: '90px 50px 50px' },
          paddingBottom: { xs: '2rem', md: '3rem' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '30px', md: '50px' },
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            bottom: '-20%',
            right: '-5%',
            width: { xs: '300px', md: '600px' },
            height: { xs: '300px', md: '510px' },
            background: 'linear-gradient(135deg, #93CAEE 50%, #620C90 55%)',
            filter: 'blur(100px)',
            opacity: 0.8,
            zIndex: 0,
            pointerEvents: 'none',
          },
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '70%' },
            display: 'flex',
            flexDirection: 'column',
            pt: { xs: '2%', md: '5%' },
            alignItems: 'flex-start',
            zIndex: 1,
          }}
        >
          <List sx={{ pl: '20px' }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                className="cloudsysytemlist"
                primary="Cloud System"
                sx={{
                  '& .MuiListItemText-primary': {
                    listStyleType: 'disc',
                    display: 'list-item',
                    color: '#C2C2C4',
                    fontSize: { xs: '14px', sm: '16px', md: '17px', xxl: '25px' },
                    fontWeight: 400,
                    lineHeight: '150%',
                  },
                }}
              />
            </ListItem>
          </List>

          <Typography variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
            Take Control of Your Vending Network
          </Typography>

          <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4' }}>
            Manage your vending machines globally, adjust pricing on the fly, and track key performance indicators—all from a single, user-friendly dashboard.
          </Typography>
          <Box sx={{ mt: 3 }}></Box>
          <AnimateButton />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '70%' },
            height: { xs: '100%', md: '100%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={Browser}
            alt="Dashboard Preview"
            sx={{
              width: { xs: '100%', sm: '90%', md: '100%' },
              height: { xs: 'auto', md: '600px' },
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TakeControl;