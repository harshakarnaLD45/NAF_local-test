
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
import PartnersForm from "./PartnersForm";

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

      <Box className="section-container" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography className='expertise-title headings-h2' sx={{
          position: 'relative',
          bottom: '-50px',
          width: { xs: '100%', sm: '100%', md: '70%' }
        }} variant="h4" align="center" gutterBottom>
          Partner with NAF Germany: Two Ways to Join the Vending Revolution
        </Typography>
        <PartnersForm />
      </Box>

      <Maintenance />
    </Box>
  );
};

export default MachinesPage;