import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRiseLetters = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = gsap.utils.toArray(".rise-letter");

    gsap.set(letters, { y: 100, opacity: 0 });

    gsap.to(letters, {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 0.6,
      stagger: 0.05,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const text = "Explore Our Vending Machines";

  return (
    <div
      ref={textRef}
      style={{
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h2"
        className="headings-h2 main-sub-container1 main-sub-containerss"
        sx={{
          color: "#FCFCFC",
          fontWeight: 600,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="rise-letter"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        ))}
      </Typography>
    </div>
  );
};

export default ScrollRiseLetters;
