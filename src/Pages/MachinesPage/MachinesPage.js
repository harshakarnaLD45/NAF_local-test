
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
      <Box>
        <Box sx={{ maxWidth: "1207px", paddingY: '7rem', paddingTop: '10rem' }} className='machines-container'>
          <Typography className="herotitle headings-h1" variant="h1" sx={{ color: "#FCFCFC" }}>
            High-Performance Vending Machines for Every Need
          </Typography>
          <Typography className="herosubtitle bodyRegularText3" variant="body1" sx={{ color: "#C2C2C4" }} >
            Increase revenue and streamline operations with our range of customizable vending machines.
          </Typography>
        </Box>
        <MarqTextScroll />
      </Box>
      <Filtermachines />
      <Hotmachine />
      <Maintenance />
    </Box>
  );
};

export default MachinesPage;