import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import dateimage from "../../assets/Vector (2).svg";
import './About.css'
import Aboutmatter from "./Aboutmatter";
import Meetteam from "./Meetteam";
import Awards from "./Awards";
import Values from "./Values";
import VideoSection from "./VideoSection";

const About = () => {
  
  const companyDescription =
    "A prominent provider of innovative vending machine solutions, committed to delivering cutting-edge products and services that meet the evolving needs of consumers and businesses.";

  return (
    <Box>
    <Box  className="section-container">
     <Box sx={{ position: "relative" }}>
   
        <Box
          component="section"
          sx={{
            borderTop: 1,
            borderColor: "#8D8D8D",
            py: 3,
            position: "relative",
            height: "226px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
          className="firstsectiontext"
            variant="h1"
            sx={{
              ml: 1.5,
            }}
          >
            WE'RE
          </Typography>
          <Typography
            variant="h1"
            sx={{
             
              ml: 10,
            }}
              className="firstsectiontext"
          >
            THE
          </Typography>
          <Box
            component="img"
            src={dateimage}
            alt="Vector"
            sx={{
              width: "100px",
              height: "100px",
              ml: 10,
            }}
          />
          <Typography
          className="bodyRegularText3"
            sx={{
              width: "744px",
              color: "#FCFCFC",
              ml: 10,
            }}
          >
            {companyDescription}
          </Typography>
        </Box>
   
       
        <Box
          component="section"
          sx={{
            borderTop: 1,
            borderColor: "#8D8D8D",
            py: 3,
            position: "relative",
            height: "226px",
            display: "flex",
            alignItems: "center",
          }}
        >
          
          <Typography
            variant="h1"
            sx={{
             
              whiteSpace: "nowrap",
            }}
          >
            <Box component="span"  className="firstsectiontextgreen">
              NEW AGE OF FOOD,{" "}
            </Box>
            <Box component="span"   className="firstsectiontext">
              YOUR
            </Box>
            <Box component="span" sx={{ color: "#7fee64" }}>
              &nbsp;&nbsp;
            </Box>
          </Typography>
        </Box>


        <Box
          component="section"
          sx={{
            borderTop: 1,
            borderColor: "#8D8D8D",
            py: 3,
            position: "relative",
            height: "226px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              
              whiteSpace: "nowrap",
            }}
              className="firstsectiontext"
          >
            PARTNER FOR INNOVATIVE
          </Typography>
        </Box>

       
        <Box
          component="section"
          sx={{
            borderTop: 1,
            borderColor: "#8D8D8D",
            py: 3,
            position: "relative",
            height: "226px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h1"
            sx={{
          
              whiteSpace: "nowrap",
            }}
              className="firstsectiontext"
          >
            VENDING SOLUTIONS
          </Typography>
          <Box
            sx={{
              width: "355px",
              height: "150px",
              backgroundColor: "#f4f4f4",
              borderRadius: "100px",
              mr: 2,
            }}
          />
        </Box>
      </Box>
    </Box> 
    <VideoSection/>
<Aboutmatter/>
<Meetteam/>
<Awards/>
<Values/>

    </Box>
  );
};

export default About;