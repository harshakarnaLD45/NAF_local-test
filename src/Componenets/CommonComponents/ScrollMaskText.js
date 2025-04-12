import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMaskText = ({ text, textColor, textAlignment,textDisplay }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".rise-letter", containerRef.current);

      gsap.set(letters, { y: "100%", opacity: 0 });

      gsap.to(letters, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <Typography
        variant="h2"
        className="headings-h2"
        sx={{
          color: textColor ? textColor : "#FCFCFC",
          textAlign: textAlignment ? textAlignment : "left",
          display: textDisplay ? textDisplay : "inline-block",
          lineHeight: 1.2,
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block" }}>
            {word.split("").map((char, i) => (
              <span
                key={`${wordIndex}-${i}`}
                className="rise-letter"
                style={{
                  display: "inline-block",
                  transform: "translateY(100%)",
                }}
              >
                {char}
              </span>
            ))}
            {"\u00A0"}
          </span>
        ))}
      </Typography>
    </div>
  );
};

export default ScrollMaskText;
