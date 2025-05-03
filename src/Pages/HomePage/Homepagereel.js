import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudVideo from '../../assets/Home/CloudVideo.mp4'

gsap.registerPlugin(ScrollTrigger);

const Homepagereel = () => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;

    // Check if screen width is greater than 1024px
    if (window.innerWidth > 1024) {
      // GSAP animation with timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoContainer,
          start: () => `top ${window.innerWidth < 1650 ? '50%' : '50%'}`,
          end: "bottom 20%",
          scrub: 1,
        }
      });

      tl.to(videoContainer, {
        width: "100vw",
        borderRadius: "0px",
        marginLeft: 0,
        marginRight: 0,
        position: "relative",
        left: "50%",
        xPercent: -50,
        ease: "power2.inOut",
      })
        .to(videoContainer, {
          width: () => {
            if (window.innerWidth < 1650) return '93%';
            return '96%';
          },
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          xPercent: 0,
          ease: "power2.inOut",
        });

      // Cleanup function
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        mt: '-80px'
      }}
    >
      {/* Video Container */}
      <Box
        ref={videoContainerRef}
        classname="videobox"
        sx={{
          height: "auto",
          overflow: "hidden",
          borderRadius: "24px",
          "@media (max-width: 1024px)": {
            borderRadius: "9.495px",
          },

          width: "93%",
          "@media (min-width: 1650px)": {
            width: "96%",
          },
          "@media (max-width: 480px)": {
            borderRadius: "0px",
            width: "100%",
          },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <video
          muted
          autoPlay
          loop
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "inherit",
          }}
        >
          <source
            src={CloudVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default Homepagereel;