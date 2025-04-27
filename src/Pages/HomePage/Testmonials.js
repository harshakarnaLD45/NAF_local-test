import { Avatar, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import ScrollMaskText from "../../Componenets/CommonComponents/ScrollMaskText";
import ScrollMaskHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";

const TestimonialCard = ({ text, author }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        bgcolor: "#262626",
        borderRadius: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#C2C2C4",
      }}
    >
      <Typography variant="body1">{text}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mt: 2 }}>
        <Avatar sx={{ width: 24, height: 24, bgcolor: "#424242", mr: 1 }}>
          <PersonIcon sx={{ fontSize: 16 }} />
        </Avatar>
        <Typography variant="body2" align="right">{author}</Typography>
      </Box>
    </Box>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      text: t('Home.testimonial1.text'),
      author: t('Home.testimonial1.author'),
    },
    {
      text: t('Home.testimonial2.text'),
      author: t('Home.testimonial2.author'),
    },
    {
      text: t('Home.testimonial3.text'),
      author: t('Home.testimonial3.author'),
    },
    {
      text: t('Home.testimonial4.text'),
      author: t('Home.testimonial4.author'),
    },
    {
      text: t('Home.testimonial5.text'),
      author: t('Home.testimonial5.author'),
    },
  ];

  return (
    <Box>
      <Box className="section-container">
        <ScrollMaskHeadings text={t("Home.testmonialHeading")} />
      </Box>
      {/* Testimonial Slider */}
      <Box sx={{ overflow: "hidden", width: "100%", mt: '20px' }}>
        <Box
          className="slider-track"
          sx={{
            display: "flex",
            gap: "16px",
            animation: "scroll 30s linear infinite",
          }}
        >
          {/* Repeat testimonials enough times for seamless scroll */}
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TestimonialCard text={item.text} author={item.author} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Keyframes CSS for continuous scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Testimonials;
