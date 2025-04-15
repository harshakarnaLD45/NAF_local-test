import { Box, Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import MaintainceImage from '../../assets/Machines/Maintaince.png'
import ScrollMaskHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import ScrollMaskText from "../../Componenets/CommonComponents/ScrollMaskText";

const Maintenance = () => {
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
            <ScrollMaskHeadings data-cursor="hover" text='NAF Maintenance & Support' />
          </div>
          <Box sx={{ mb: 3, mt: 2 }} data-cursor="hover">
            <ScrollMaskText text='We ensure your vending machines run smoothly with reliable maintenance and support that minimize downtime and maximize ROI.'
            />
          </Box>

          <AnimateButton route='/maintaince' />
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