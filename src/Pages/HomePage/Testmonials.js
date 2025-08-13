import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import React, { useRef, useState } from "react";
import ScrollMaskHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
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
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS on component mount
  React.useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleVideoInteraction = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          // Ensure video is muted for autoplay compliance on iOS
          videoRef.current.muted = true;
          setMuted(true);
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Video play failed:', error);
      }
    }
  };

  const handleMouseEnter = () => {
    // Only use hover events on non-iOS devices
    if (!isIOS && videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  };

  const handleMouseLeave = () => {
    // Only use hover events on non-iOS devices
    if (!isIOS && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isIOS ? handleVideoInteraction : undefined}
      sx={{
        width: 300,
        height: 300,
        bgcolor: "#262626",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <video
        ref={videoRef}
        aria-label={ariaLabel}
        src={videoSrc}
        loop
        muted={true} // Always start muted for iOS compatibility
        playsInline
        preload="metadata" // Better for mobile performance
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onLoadedMetadata={() => {
          // Ensure muted state is set after load
          if (videoRef.current) {
            videoRef.current.muted = muted;
          }
        }}
      />
      
      {/* Always visible control button with better iOS styling */}
      <IconButton
        onClick={toggleMute}
        sx={{
          position: "absolute",
          bottom: { xs: 4, sm: 8 }, // Smaller margin on mobile
          right: { xs: 4, sm: 8 },
          // backgroundColor: "rgba(85, 83, 83, 0.6)", // Semi-transparent background
          color: "whitesmoke",
          zIndex: 10, // Higher z-index
          minWidth: { xs: "32px", sm: "40px" }, // Larger touch target on mobile
          minHeight: { xs: "32px", sm: "40px" },
          padding: { xs: "4px", sm: "8px" },
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          // Ensure visibility on iOS
          WebkitTapHighlightColor: "transparent",
          WebkitAppearance: "none",
        }}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? 
          <VolumeOffIcon sx={{ 
            color: 'whitesmoke', 
            fontSize: { xs: "20px", sm: "20px" } 
          }} /> : 
          <VolumeUpIcon sx={{ 
            color: 'whitesmoke', 
            fontSize: { xs: "20px", sm: "20px" } 
          }} />
        }
      </IconButton>

      {/* iOS-specific play/pause overlay */}
      {isIOS && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
            pointerEvents: "none", // Let clicks pass through to the container
          }}
        >
          {!isPlaying && (
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  borderLeft: "20px solid #000",
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  marginLeft: "4px",
                }}
              />
            </Box>
          )}
        </Box>
      )}
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
        <ScrollMaskHeadings text={t("Home.testmonialHeading")} />
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
                <TestimonialCard text={item.text} author={item.author} />
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
