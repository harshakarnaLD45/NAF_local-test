import { Box, Button, Card, Container, Typography } from "@mui/material";
import React, { useState } from "react";

const maintenanceServices = [
  {
    title: ["Preventative", "Maintenance"], // Split into array for multi-line
    rotation: -10.54,
    position: { top: "5%", left: "-15%" },
  },
  {
    title: ["Prompt", "Repairs"], // Split "Prompt Repairs" into two lines
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: { xs: 2, md: 4 },
        cursor: "pointer",
        marginBottom: "18rem",
        paddingX: "2rem",
        marginTop:'4rem',
        marginX: isCollapsed ?'0rem':'10rem',
        transition: "all 0.5s ease",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1639px",
          height: { xs: "auto", md: "605px" },
          mt: { xs: -1, md: -3 },
        }}
      >
        <Typography
          variant="h2"
          className="maintenancehead"
          sx={{
            position: "absolute",
            width: { xs: "90%", md: "851px" },
            top: { xs: "10px", md: "22px" },
            left: "50%",
            transform: "translateX(-50%)",
            color: "#FCFCFC",
            textAlign: "center",
            fontSize: "67px",
          }}
        >
          Unmatched Maintenance & Support
        </Typography>

        <Typography
          variant="body1"
          className="maintenancebody"
          sx={{
            position: "absolute",
            width: { xs: "90%", md: "837px" },
            top: { xs: "60px", md: "198px" },
            left: "50%",
            transform: "translateX(-50%)",
            color: "#C2C2C4",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          We understand that reliable vending machine operation is crucial for your business. That’s why we offer comprehensive maintenance and support designed to minimize downtime and maximize your return on investment.
        </Typography>
        <Button
          sx={{
            position: "absolute",
            width: { xs: "100px", md: "120px" },
            height: { xs: "100px", md: "120px" },
            top: { xs: "auto", md: "333px" },
            bottom: { xs: "20px", md: "auto" },
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            border: "1.5px solid #7fee64",
            color: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              border: "1.5px solid #7fee64",
              bgcolor: "rgba(127, 238, 100, 0.1)",
            },
            zIndex: 0,
          }}
        >
          <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, lineHeight: 1 }}>
            GET IN
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, lineHeight: 1 }}>
            TOUCH
          </Typography>
        </Button>

        {/* Maintenance Service Cards */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            maxWidth: isCollapsed ? "auto" : "1200px",
            top: isCollapsed ? "500px" : "100px",
            left: isCollapsed ? "50%" : "54%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: isCollapsed ? 2 : 1,
            transition: "all 0.5s ease",
          }}
        >
          {maintenanceServices.map((service, index) => (
            <Card
              key={index} // Added key prop for React list rendering
              sx={{
                position: isCollapsed ? "relative" : "absolute",
                width: isCollapsed ? "440px" : "440px",
                height: isCollapsed ? "426px" : "426px",
                top: isCollapsed ? "auto" : service.position.top,
                left: isCollapsed ? "auto" : service.position.left,
                transform: isCollapsed
                  ? "rotate(0deg)"
                  : `rotate(${service.rotation}deg)`,
                bgcolor: "#161616",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid #525252",
                transition: "all 0.5s ease",
                display: "block",
                zIndex: 1,
              }}
            >
              {/* Render title as multiple Typography components */}
              {service.title.map((line, lineIndex) => (
                <Typography
                  key={lineIndex}
                  variant="body1"
                  className="servicetitle"
                  sx={{
                    position: "absolute",
                    top: `${311 + lineIndex * 35}px`, // Adjust vertical spacing between lines
                    left: "33px",
                    color: "#FCFCFC",
                    fontWeight: "medium",
                    fontSize: "28px",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Maintenance;