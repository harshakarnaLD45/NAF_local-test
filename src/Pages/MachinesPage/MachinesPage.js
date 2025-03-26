
import { Box, Typography } from "@mui/material";
import React from "react";
import "./MachinesPage.css"
import MarqTextScroll from "./MarqTextScroll";
import Maintenance from "./Maintenance";
import Hotmachine from "./Hotmachine";
import Filtermachines from "./Filtermachines";

const MachinesPage = () => {
  return (
    <Box>
    <Box sx={{ maxWidth: "1207px" ,paddingX:'2rem',paddingY:'7rem'}}>
      <Typography
      className="herotitle"
        variant="h1"
        sx={{
          color: "#FCFCFC",
        //   marginBottom: 1,
          fontSize:'84px'
      
        }}
      >
        High-Performance Vending Machines for Every Need
      </Typography>
      <Typography
      className="herosubtitle"
        variant="body1"
        sx={{
          color: "#C2C2C4",
          fontSize:'22px'
        }}
      >
        Increase revenue and streamline operations with our range of customizable vending machines.
      </Typography>
    </Box>
    <MarqTextScroll/>
    <Filtermachines/>
    <Hotmachine/>
    <Maintenance/>
    </Box>
  );
};

export default MachinesPage;