
import { Box, Card, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import image1 from "../../assets/Vector (3).svg";
import image2 from "../../assets/Vector (4).svg";
import image3 from "../../assets/Vector (5).svg";
import image4 from "../../assets/Vector (6).svg";

const valueCards = [
  {
    id: 1,
    title: "Innovation",
    description: "We innovate to create cutting-edge solutions for your business needs.",
    icon: image1,
    rotation: -10.54, // Initial rotation
    position: { top: "5%", left: "-15%" }, // Initial position
  },
  {
    id: 2,
    title: "Quality",
    description: "We deliver high-quality, reliable services built for lasting success.",
    icon: image2,
    rotation: 15, // Initial rotation
    position: { top: "15%", left: "10%" }, // Initial position
  },
  {
    id: 3,
    title: "Reliability",
    description: "We ensure dependable solutions with maximum operational efficiency.",
    icon: image3,
    rotation: -22.85, // Initial rotation
    position: { top: "15%", left: "40%" }, // Initial position
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "We prioritize customer needs, exceeding expectations with every interaction.",
    icon: image4,
    rotation: 18.33, // Initial rotation
    position: { top: "20%", left: "65%" }, // Initial position
  },
];

const Values = () => {
  const sectionRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setIsCollapsed(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Box
      className="section-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: { xs: 2, sm: 3, md: 4 },
        marginBottom: { xs: "10rem", md: "18rem" },
        paddingX: { xs: "20px", md: "50px" },
        marginTop: { xs: "2rem", md: "4rem" },
        marginX: { xs: "0rem", md: isCollapsed ? "0rem" : "10rem" },
        transition: "all 0.5s ease",
      }}
    >
      <Box
        className="maintenance-containers"
        sx={{
          position: "relative",
          width: "100%",
          height: { md: "605px" },
          mt: { xs: -1, md: -3 },
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h2"
          className="headings-h2"
          sx={{
            position: "absolute",
            width: { xs: "100%", sm: "90%", md: "851px" },
            top: { xs: "10px", md: "22px" },
            left: "50%",
            transform: "translateX(-50%)",
            color: "#FCFCFC",
            textAlign: "center",
          }}
        >
          Our Values
        </Typography>

        {/* Section Subtitle */}
        <Typography
          variant="body1"
          className="bodyRegularText3"
          sx={{
            position: "absolute",
            width: { xs: "100%", sm: "90%", md: "837px" },
            top: { xs: "80px", sm: "80px", md: "100px" },
            left: "50%",
            transform: "translateX(-50%)",
            color: "#C2C2C4",
            textAlign: "center",
          }}
        >
          The core principles that drive our business forward
        </Typography>

        {/* Cards Container */}
        <Box
          ref={sectionRef}
          className="Values-containers"
          sx={{
            position: "absolute",
            width: "100%",
            maxWidth: { xs: "100%", md: isCollapsed ? "auto" : "1200px" },
            top: { xs: "200px", sm: "200px", md: isCollapsed ? "300px" : "100px" },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 1 },
            transition: "all 0.5s ease",
          }}
        >
          {valueCards.map((card) => (
            <Card
              key={card.id}
              sx={{
                position: { xs: "relative", md: isCollapsed ? "relative" : "absolute" },
                width: {
                  xs: isCollapsed ? "95%" : "440px",
                  sm: isCollapsed ? "48%" : "440px",
                  md: isCollapsed ? "24%" : "440px",
                },
                height: { xs: "300px", sm: "350px", md: "426px" },
                top: { xs: "auto", md: isCollapsed ? "auto" : card.position.top },
                left: { xs: "auto", md: isCollapsed ? "auto" : card.position.left },
                transform: {
                  xs: "rotate(0deg)",
                  md: isCollapsed ? "rotate(0deg)" : `rotate(${card.rotation}deg)`,
                },
                bgcolor: "#262626",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid #525252",
                transition: "all 0.5s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                zIndex: 1,
                marginBottom: { xs: "1rem", md: "0" },
              }}
            >
              {/* Image Positioned Top-Left */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "20px", md: "33px" },
                  left: { xs: "20px", md: "33px" },
                }}
              >
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content Positioned Bottom-Left */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "20px", sm: "25px", md: "33px" },
                  left: { xs: "20px", sm: "25px", md: "33px" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  className="bodyMediumText2"
                  sx={{ color: "#FCFCFC" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="bodyRegularText3"
                  sx={{ color: "#C2C2C4" }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Values;