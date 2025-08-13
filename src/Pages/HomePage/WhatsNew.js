import { Box, Typography } from "@mui/material";
import React from "react";
import "../../Pages/HomePage/HomePage.css";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import ScrollManualLinesHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import { useTranslation } from "react-i18next";
import BlogHover from "../Insights/BlogHover";

const WhatsNew = () => {
  const { t } = useTranslation();

  const handleBlogClick = () => {
    window.open("https://blog.vendinaf.com/de", "_blank");
  };

  return (
    <Box sx={{ position: "relative" }} className='section-container'>
      {/* Title Section */}
      <Box className='whatsnewcontainer' sx={{
        mb: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        flexWrap: { xs: 'nowrap', md: 'nowrap' }
      }}>
        {/* <Typography variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
          What's New
        </Typography> */}

        <Box
          sx={{
            flexGrow: 1,
            minWidth: 0, // Important for flexbox ellipsis
            color: '#FCFCFC',
            maxWidth: { xs: '200px', sm: '100%' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          <ScrollManualLinesHeadings text={t('Home.WhatsNew')} />
        </Box>
        <Box className="animate-div" onClick={() => handleBlogClick()}>
          <AnimateButton text1={t('Home.VIEW')} text2={t('Home.MORE')} />
        </Box>
      </Box>
      <BlogHover />
    </Box>
  );
};

export default WhatsNew;