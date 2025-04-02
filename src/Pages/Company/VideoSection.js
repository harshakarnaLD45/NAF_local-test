import { Box, useTheme } from '@mui/material';
import React from 'react';

const VideoSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
      marginTop:'10rem',
        height: {
          xs: '300px', 
          sm: '400px', 
          md: '600px', 
          lg: '750px', 
          xl: '820px', 
        },
        bgcolor: '#525252',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
      }}
    >
      
      
    </Box>
  );
};

export default VideoSection;