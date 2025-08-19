import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import React, { useRef, useState } from "react";
import ScrollMaskHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import VolumeUpIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Marquee from "react-fast-marquee";

import Video1 from '../../assets/Home/Testimonials/Testimonial_video (1).mp4';
import Video2 from '../../assets/Home/Testimonials/Testimonial_video (2).mp4';
import Video3 from '../../assets/Home/Testimonials/Testimonial_video (3).mp4';
import Video4 from '../../assets/Home/Testimonials/Testimonial_video (4).mp4';
import Video5 from '../../assets/Home/Testimonials/Testimonial_video (5).mp4';

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
      {/* <Avatar sx={{ width: 24, height: 24, bgcolor: "#424242", mr: 1 }}>
        <PersonIcon sx={{ fontSize: 16 }} />
      </Avatar> */}
      -
      <Typography variant="body2" align="right">{author}</Typography>
    </Box>
  </Box>
);

// const TestimonialVideoCard = ({ videoSrc }) => {
//   const videoRef = useRef(null);
//   const [muted, setMuted] = useState(true);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !muted;
//       setMuted(!muted);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         bgcolor: "#262626",
//         borderRadius: 4,
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         autoPlay
//         loop
//         muted={muted}
//         playsInline
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           display: "block",
//         }}
//       />
//       <IconButton
//         onClick={toggleMute}
//         sx={{
//           position: "absolute",
//           bottom: 8,
//           right: 8,
//           color: "#000",
//           zIndex: 1,
//           cursor:'pointer',
//         }}
//       >
//         {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
//       </IconButton>
//     </Box>
//   );
// };

const TestimonialVideoCard = ({ videoSrc, ariaLabel }) => {
  // const videoRef = useRef(null);
  // const [muted, setMuted] = useState(true);

  // const toggleMute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = !muted;
  //     setMuted(!muted);
  //   }
  // };

  // const handleMouseEnter = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  // iOS detection
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Programmatically trigger play on mount
  React.useEffect(() => {
    if (!isIOS) return;
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      // Try to play programmatically
      video.play().catch(() => {});
    }
  }, [videoSrc]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: 300,
        height: 300,
        bgcolor: "#262626",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        isolation: 'isolate', // Creates new stacking context
      }}
    >
      <video
        ref={videoRef}
        aria-label={ariaLabel}
        src={videoSrc}
        loop
        muted={muted}
        playsInline
        // autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
      />
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          toggleMute();
        }}
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          width: 40,
          height: 40,
          minWidth: 40,
          zIndex: 9999,
          cursor: "pointer",
          pointerEvents: 'auto',
          backgroundColor: isIOS ? 'rgba(0,0,0,0.6)' : 'transparent',
          // border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '50%',
          backdropFilter:  isIOS ? 'blur(10px)' : 'none',
          '&:hover': {
            backgroundColor:  isIOS ?  'rgba(0,0,0,0.7)': 'transparent',
          },
          '&:active': {
            backgroundColor:  isIOS ?   'rgba(0,0,0,0.9)': 'transparent',
            transform:  isIOS ?  'scale(0.95)' : 'none',
          }
        }}
      >
        {muted ? <VolumeOffIcon sx={{ color: 'white', fontSize: 20 }} /> : <VolumeUpIcon sx={{ color: 'white', fontSize: 20 }} />}
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
    { videoSrc: Video1, ariaLabel: "NAF Client Testimonial - Improved Employee Satisfaction with Vending Machines", },
    { videoSrc: Video2, ariaLabel: "NAF Vending - Testimonial: Increased Revenue with Smart Machines", },
    { videoSrc: Video3, ariaLabel: "NAF Vending - Testimonial: Streamlined Operations with Cloud Management", },
    { videoSrc: Video4, ariaLabel: "NAF Vending - Testimonial: Reliable Vending Solutions and Support", },
    { videoSrc: Video5, ariaLabel: "NAF Vending - Testimonial: Modern and Customizable Vending Experience", },
  ];

  return (
    <Box>
      <Box className="section-container">
        <ScrollMaskHeadings text={t("Home.testmonialHeading")}/>
      </Box>
      <Box sx={{ overflow: "hidden", width: "100%", mt: "20px" }}>
        <Marquee
          gradient={false}
          speed={180}
          // pauseOnHover={true}
          style={{ width: "100%", marginTop: "20px" }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: 300,
                display: "flex",
                justifyContent: "center",
                marginRight: "16px",
              }}
            >
              {item.videoSrc ? (
                <TestimonialVideoCard videoSrc={item.videoSrc} ariaLabel={item.ariaLabel} />
              ) : (
                <TestimonialCard text={item.text} author={item.author}/>
              )}
            </Box>
          ))}
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: 300,
                display: "flex",
                justifyContent: "center",
                marginRight: "16px",
              }}
            >
              {item.videoSrc ? (
                <TestimonialVideoCard videoSrc={item.videoSrc} ariaLabel={item.ariaLabel} />
              ) : (
                <TestimonialCard text={item.text} author={item.author} />
              )}
            </Box>
          ))}
        </Marquee>
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
