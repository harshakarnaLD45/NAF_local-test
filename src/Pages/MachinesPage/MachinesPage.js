
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./MachinesPage.css"
import MarqTextScroll from "./MarqTextScroll";
import Maintenance from "./Maintenance";
import PhysicsButtons from "./PhysicsButtons";
import MachinesSection from "./MachinesSection";
import { useLocation } from "react-router-dom";
import PaymentOptions from "./PaymentOptions";
import Solutions from "./Solutions";

const MachinesPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMachine, setSelectedMachine] = useState(location.state?.selectedMachine || "All");

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

      <PhysicsButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} />
      <MachinesSection selectedMachine={selectedMachine} />
      <Solutions />
      <PaymentOptions />
      <Maintenance />
    </Box>
  );
};

export default MachinesPage;