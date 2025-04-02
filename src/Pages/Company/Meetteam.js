import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Odette Lamkhizni",
    position: "CEO",
    backgroundColor: "#e5fbdf",
    image: "/images/odette.jpg", 
  },
  {
    id: 2,
    name: "Abdelilah Lamkhizni",
    position: "Managing Director",
    backgroundColor: "#fcad97",
    image: "/images/abdelilah.jpg", 
  },
  {
    id: 3,
    name: "Sri Satya Sai Kanna Dhulipudi",
    position: "Position",
    backgroundColor: "#97ccff",
    image: "/images/sri.jpg", 
  },
];

const Meetteam = () => {
  return (
    <Box
      className="section-container"
      sx={{
        position: "relative",
        // height: "auto", 
        // width: "100%",
        overflow: "hidden", 
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        className="headings-h2"
        sx={{
          color: "#fcfcfc",
    
          marginBottom: 4, 
        }}
      >
        Meet the Team
      </Typography>

      {/* Team Members Grid */}
      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          margin: "0 auto", 
        }}
      >
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}  
          sx={{
            // Add additional spacing for smaller screens
            "@media (max-width: 900px)": {
            //   marginLeft: "24px",
            //   marginRight: "24px", 
            marginTop:'45px'
            },
          }}
              >
            <Card
              sx={{
                backgroundColor: member.backgroundColor,
                borderRadius: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%", 
                padding: '24px',
                gap:'0px',
          

// width:'607px',
// height:'700px'
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "200px", sm: "300px", md: "564px" }, 
                  overflow: "hidden", 
                  marginBottom: 2, 
                }}
              >
                <img
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                  }}
                />
              </Box>

              {/* Member Name and Position */}
              <CardContent sx={{ padding: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    width: "100%",
                    paddingBottom:'2rem'
                  }}
                >
                  <Stack spacing={1}>
                    <Typography
                      variant="body1"
                      color="#1a1a1a"
                      className="bodyMediumText1"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#444444"
                      className="bodyMediumText3"
                    >
                      {member.position}
                    </Typography>
                  </Stack>

                  {/* LinkedIn Icon */}
                  <LinkedInIcon sx={{ width: 40, height: 40 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Meetteam;



