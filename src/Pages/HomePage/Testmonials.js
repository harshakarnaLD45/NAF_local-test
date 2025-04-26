import { Avatar, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import React from "react";
import PersonIcon from '@mui/icons-material/Person'; // or use a custom image/icon
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    text: "We were impressed by [Your Company Name]'s expertise in cloud-based solutions...",
    author: "David Lee, CIO, Gamma Industries.",
  },
  {
    text: "Working with NAF Germany was a game-changer for our business...",
    author: "John Smith, CEO, Acme Corp",
  },
  {
    text: "NAF Germany's end-to-end development services were exceptional...",
    author: "Jane Doe, CTO, Beta Solutions",
  },
  {
    text: "Our restaurant's inventory management has never been so efficient!",
    author: "Jane Doe, CTO, Beta Solutions",
  },
];

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
  return (
    <Box className='section-container' sx={{ px: 0 }}>
      <Typography
        variant="h2"
        color="#FCFCFC"
        className="headings-h2"
        sx={{ width: { xs: '90%', sm: '90%', md: '50%' }, px: { xs: '15px', sm: '20px', md: '50px' } }}
        mb={4}
      >
        {t('Home.testmonialHeading')}
      </Typography>

      <Box sx={{ overflow: "hidden", position: "relative" }}>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode={true}
          style={{ padding: '0 16px' }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <TestimonialCard text={item.text} author={item.author} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
