import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import React, { useRef, useState } from "react";
import ScrollMaskHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import Video1 from '../../assets/Home/testmonials/1.mp4';
import Video2 from '../../assets/Home/testmonials/2.mp4';
import Video3 from '../../assets/Home/testmonials/3.mp4';
import Video4 from '../../assets/Home/testmonials/4.mp4';
import Video5 from '../../assets/Home/testmonials/5.mp4';

const TestimonialCard = ({ text, author }) => (
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
      boxSizing: "border-box",
    }}
  >
    <Typography variant="body1" sx={{ flexGrow: 1 }}>
      {text}
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mt: 2 }}>
      <Avatar sx={{ width: 24, height: 24, bgcolor: "#424242", mr: 1 }}>
        <PersonIcon sx={{ fontSize: 16 }} />
      </Avatar>
      <Typography variant="body2" align="right">{author}</Typography>
    </Box>
  </Box>
);

const TestimonialVideoCard = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        bgcolor: "#262626",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={muted}
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <IconButton
        onClick={toggleMute}
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          color: "#000",
          zIndex: 1,
          cursor:'pointer',
        }}
      >
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </IconButton>
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
    { videoSrc: Video1 },
    { videoSrc: Video2 },
    { videoSrc: Video3 },
    { videoSrc: Video4 },
    { videoSrc: Video5 },
  ];

  return (
    <Box>
      <Box className="section-container">
        <ScrollMaskHeadings text={t("Home.testmonialHeading")} />
      </Box>

      <Box sx={{ overflow: "hidden", width: "100%", mt: "20px" }}>
        <Box
          className="slider-track"
          sx={{
            display: "flex",
            gap: "16px",
            animation: "scroll 30s linear infinite",
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: 300,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item.videoSrc ? (
                <TestimonialVideoCard videoSrc={item.videoSrc} />
              ) : (
                <TestimonialCard text={item.text} author={item.author} />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Keyframes CSS */}
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
