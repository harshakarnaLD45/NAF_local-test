import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepagereel = () => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;

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
        // width: "95%",
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


    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
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
          width: "93%",
          "@media (min-width: 1650px)": {
            width: "96%",
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
            src="https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&log_user=0&signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default Homepagereel;