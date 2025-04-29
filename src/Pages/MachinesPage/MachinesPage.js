
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
import MobileButtons from "./MobileButtons";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import GetinTouch from "./GetinTouch";

const MachinesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); // lg = 1200, you can use "md" for 1024px

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMachine, setSelectedMachine] = useState(location.state?.selectedMachine || "All");

  return (
    <Box>
      <Helmet>
        <title>NAF Vending - Machines</title>
        <link rel="canonical" href="https://vendinaf.com/en/machine" />
        <meta name='description'
          content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
        <meta name="keywords"
          content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <Box className='machines-container1'>
        <Box className='machines-container'>
          <Typography className="headings-h1" variant="h1" sx={{ color: "#FCFCFC" }}>
            {t('machines.machineTitle')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body1" sx={{ color: "#C2C2C4", mt: { xs: '8px', sm: '8px', md: '16px' } }} >
            {t('machines.machineSubTitle')}
          </Typography>
        </Box>
        <MarqTextScroll />
      </Box>

      {/* <PhysicsButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} /> */}
      {isMobileOrTablet ? (
        <MobileButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} />
      ) : (
        <PhysicsButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} />
      )}
      <MachinesSection selectedMachine={selectedMachine} />
      <Solutions />
      <PaymentOptions />

      <Box className="section-container" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', px: 0 }}>
        <Typography className='expertise-title headings-h2' sx={{
          position: 'relative',
          bottom: '-50px',
          width: { xs: '100%', sm: '100%', md: '70%' },
          px: { xs: 2, sm: 3, md: 4 }
        }} variant="h4" align="center" gutterBottom>
          {t('machines.PartnerNAFGermany')}
        </Typography>
        <GetinTouch />
        <PartnersForm />
      </Box>

      <Maintenance />
    </Box>
  );
};

export default MachinesPage;