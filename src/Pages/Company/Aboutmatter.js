


import { Box, Stack, Typography, Grid } from "@mui/material";
import React from "react";

const Aboutmatter = () => {
  // Company information paragraphs
  const aboutParagraphs = [
    "NAF Germany was founded in 2014 with a vision to revolutionize the vending experience. We saw an opportunity to combine innovative technology with reliable hardware to create vending solutions that truly meet the needs of modern businesses.",
    "Since then, we've been committed to pushing the boundaries of vending technology, developing cutting-edge features and designs that set us apart from the competition.",
    "From our early beginnings, we've always prioritized quality, reliability, and customer satisfaction. We're proud to partner with businesses across various industries, helping them streamline operations and enhance their bottom line.",
  ];

 
  const missionParagraphs = [
    "We are dedicated to providing convenient access to high-quality products through innovative vending solutions. We strive to create a seamless and enjoyable experience for our customers, offering a diverse selection of fresh food, snacks, and beverages that meet their needs and exceed their expectations.",
    "Our commitment extends beyond just providing products. We are passionate about delivering exceptional service, building lasting relationships with our clients, and continuously improving our offerings to meet the evolving needs of the vending industry.",
  ];


  const visionParagraphs = [
    "To be the preferred vending partner for businesses of all sizes, recognized for our reliability, responsiveness, and commitment to delivering exceptional value. We aim to transform the vending experience, making it more convenient, sustainable, and enjoyable for everyone.",
    "We envision a future where vending machines are not just a source of quick snacks, but a valuable asset for businesses, providing employees and customers with access to high-quality products and innovative solutions that enhance their daily lives. We are committed to leading the way in this transformation.",
  ];

  return (
    <Box className="section-container" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 8 }}>
      {/* First Section: About */}
      <Grid container spacing={4} mb={10}>
        {/* Title and Paragraphs */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            color="#fcfcfc"
            className="bodyMediumText1"
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            About
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} 
        >
          <Stack spacing={3}>
            {aboutParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                color="#c2c2c4"
                className="bodyRegularText3"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Second Section: Mission */}
      <Grid container spacing={4} mb={10}>
        {/* Title and Paragraphs */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            color="#fcfcfc"
            className="bodyMediumText1"
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Mission
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={3}>
            {missionParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                color="#c2c2c4"
                className="bodyRegularText3"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Third Section: Vision */}
      <Grid container spacing={4}>
        {/* Title and Paragraphs */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            color="#fcfcfc"
            className="bodyMediumText1"
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Vision
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={3}>
            {visionParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                color="#c2c2c4"
                className="bodyRegularText3"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutmatter;