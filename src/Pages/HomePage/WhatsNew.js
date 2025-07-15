import { Box } from "@mui/material";
import React from "react";
import "../../Pages/HomePage/HomePage.css";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import ScrollManualLinesHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import BlogHover from "../Insights/BlogHover";

const WhatsNew = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <Box sx={{ position: "relative" }} className='section-container'>
      {/* Title Section */}
      <Box className='whatsnewcontainer' sx={{ mb: 6 }}>
        {/* <Typography variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
          What's New
        </Typography> */}
        <ScrollManualLinesHeadings text={t('Home.WhatsNew')} />
        <Box className="animate-div">
          <AnimateButton text1={t('Home.VIEW')} text2={t('Home.MORE')} route={`/${lang}/Insights`} />
        </Box>
      </Box>
      <BlogHover />
    </Box>
  );
};

export default WhatsNew;