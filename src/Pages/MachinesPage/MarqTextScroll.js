import { Box, Typography } from "@mui/material";
import React from "react";

import starImage from "../../assets/21.svg";

const MarqTextScroll = () => {
  // Data for the repeating text
  const marqueeText = "EXPLORE OUR VENDING MACHINES";

  // Create an array to repeat the content multiple times for seamless scrolling
  const repeatedContent = Array(10) // Increased to 10 for smoother looping
    .fill(
      <>
        <Typography
          variant="h3"
          className="Marquetitle"
          sx={{
            color: "#9D9EA1",
            whiteSpace: "nowrap",
            fontSize: "54px",
          }}
        >
          {marqueeText}
        </Typography>
        <Box
          component="img"
          src={starImage}
          alt="Star"
          sx={{
            width: "50px",
            height: "50px",
            mx: "70px",
            objectFit: "contain",
            aspectRatio: "1/1",
          }}
        />
      </>
    );

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "65px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 20s linear infinite",
          whiteSpace: "nowrap",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-10%)" }, // Adjusted for 10 repetitions (100% / 10)
          },
        }}
      >
        {repeatedContent}
      </Box>
    </Box>
  );
};

export default MarqTextScroll;