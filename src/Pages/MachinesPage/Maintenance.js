import { Box, Card, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";

const maintenanceServices = [
  {
    title: ["Preventative", "Maintenance"],
    rotation: -10.54,
    position: { top: "5%", left: "-15%" },
  },
  {
    title: ["Prompt", "Repairs"],
    rotation: 15,
    position: { top: "15%", left: "10%" },
  },
  {
    title: ["Remote", "Diagnostics"],
    rotation: -22.85,
    position: { top: "15%", left: "40%" },
  },
  {
    title: ["Dedicated", "Support Team"],
    rotation: 18.33,
    position: { top: "20%", left: "65%" },
  },
];

const Maintenance = () => {
  const sectionRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // New state to track animation status

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setIsCollapsed(true); // Trigger animation only once
          setHasAnimated(true); // Prevent further animations
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
  }, [hasAnimated]); // Dependency on `hasAnimated`

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
          // maxWidth: { xs: "100%", md: "1639px" },
          height: { md: "605px" },
          mt: { xs: -1, md: -3 },
        }}
      >
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
          Unmatched Maintenance & Support
        </Typography>

        <Typography
          variant="body1"
          className="bodyRegularText3"
          sx={{
            position: "absolute",
            width: { xs: "100%", sm: "90%", md: "837px" },
            top: { xs: "160px", sm: "160px", md: "198px" },
            left: "50%",
            transform: "translateX(-50%)",
            color: "#C2C2C4",
            textAlign: "center",
          }}
        >
          We understand that reliable vending machine operation is crucial for your business. That’s why we offer comprehensive maintenance and support designed to minimize downtime and maximize your return on investment.
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: { xs: "100px", sm: "100px", md: "120px" },
            height: { xs: "100px", sm: "100px", md: "120px" },
            top: { xs: "275px", md: "333px" },
            bottom: { xs: "20px", md: "auto" },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        >
          <AnimateButton />
        </Box>

        <Box
          ref={sectionRef}
          sx={{
            position: "absolute",
            width: "100%",
            maxWidth: { xs: "100%", md: isCollapsed ? "auto" : "1200px" },
            top: { xs: "450px", sm: "500px", md: isCollapsed ? "500px" : "100px" },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 1 },
            transition: "all 0.5s ease",
          }}
        >
          {maintenanceServices.map((service, index) => (
            <Card
              key={index}
              sx={{
                position: { xs: "relative", md: isCollapsed ? "relative" : "absolute" },
                width: {
                  xs: isCollapsed ? "95%" : "440px",
                  sm: isCollapsed ? "48%" : "440px",
                  md: isCollapsed ? "24%" : "440px",
                },
                // maxWidth: { xs: "350px", md: "440px" },
                height: { xs: "300px", sm: "350px", md: "426px" },
                top: { xs: "auto", md: isCollapsed ? "auto" : service.position.top },
                left: { xs: "auto", md: isCollapsed ? "auto" : service.position.left },
                transform: {
                  xs: "rotate(0deg)",
                  md: isCollapsed ? "rotate(0deg)" : `rotate(${service.rotation}deg)`,
                },
                bgcolor: "#161616",
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
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "20px", sm: "25px", md: "33px" },
                  left: { xs: "20px", sm: "25px", md: "33px" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {service.title.map((line, lineIndex) => (
                  <Typography
                    key={lineIndex}
                    variant="body1"
                    className="bodyMediumText2"
                    sx={{ color: "#FCFCFC" }}
                  >
                    {line}
                  </Typography>
                ))}
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Maintenance;