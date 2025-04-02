import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Awards = () => {
  // Award data for mapping
  const awardsData = [
    {
      year: "2023",
      title: 'Founder\'s Prize "Lively City Center"',
    },
    {
      year: "2024",
      title: 'Founder\'s Prize "Lively City Center"',
    },
  ];

  return (
    <Box
    className="section-container"
      sx={{
        maxWidth: "100%",
        position: "relative",
        py: 4,
        paddingBottom:"5rem"
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h2"
        component="h1"
        color="#fcfcfc"
        className="headings-h2"
        sx={{ mb: 8 }}
      >
        Awards & Recognitions
      </Typography>

      {/* Awards Grid */}
      <Grid container spacing={2}>
        {awardsData.map((award, index) => (
          <Grid item xs={12} md={6} key={index}>
            {/* Award Card */}
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#393939",
                borderRadius: "24px",
                height: 530,
                mb: 2,
              }}
            />

            {/* Award Details */}
            <Box sx={{ mt: 1.5 }}>
              <Typography color="#fcfcfc" variant="body1"
              className="bodyRegularText3"
              >
                {award.year}
              </Typography>
              <Typography
              className="headings-h4 "
                color="#fcfcfc"
                variant="h4"
                sx={{ mt: 1 }}
              >
                {award.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awards;