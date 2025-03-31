
import { Box, Typography } from "@mui/material";
import React from "react";
import "./MachinesPage.css"
import MarqTextScroll from "./MarqTextScroll";
import Maintenance from "./Maintenance";
import Hotmachine from "./Hotmachine";
import Filtermachines from "./Filtermachines";
import PhysicsButtons from "./PhysicsButtons";

const MachinesPage = () => {
  return (
    <Box>
      <Box className='machines-container1'>
        <Box className='machines-container'>
          <Typography className="headings-h1" variant="h1" sx={{ color: "#FCFCFC" }}>
            High-Performance Vending Machines for Every Need
          </Typography>
          <Typography className="bodyRegularText3" variant="body1" sx={{ color: "#C2C2C4" }} >
            Increase revenue and streamline operations with our range of customizable vending machines.
          </Typography>
        </Box>
        <MarqTextScroll />
      </Box>

      <PhysicsButtons />
      {/* <Filtermachines /> */}
      <Hotmachine />
      <Maintenance />
    </Box>
  );
};

export default MachinesPage;