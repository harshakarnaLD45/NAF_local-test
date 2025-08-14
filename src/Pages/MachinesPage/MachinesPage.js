
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
import CatalogueDownloadSection from "./CatalogueDownloadSection";
import MachinesSection1 from "./MachinesSection1";
import logoUrl from '../../assets/NAF-logo.png';
import frenchFries from '../../assets/Home/Fries-machine.png';
import PizzaMachine from '../../assets/Home/Pizza-machine.png';

const MachinesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); // lg = 1200, you can use "md" for 1024px


  useEffect(() => {
    document.title = `NAF Vending -${t('titles.Machines')}`; // Set tab title

    window.scrollTo(0, 0);
  }, []);

  const [selectedMachine, setSelectedMachine] = useState(location.state?.selectedMachine || "All");

  return (
    <Box>
      <Helmet>
        {/* Optimized Title with Primary Keywords */}
        <title>NAF Germany: AI-Powered Vending Machines & Solutions</title>

        {/* Canonical URL */}
        <link rel="canonical" href="https://vendinaf.com/en/machine" />

        {/* Optimized Meta Description */}
        <meta
          name="description"
          content="Explore NAF Germany's range of AI-powered vending machines, including pizza, beer, and sustainable return systems. Discover smart, eco-friendly solutions for hotels, events, and more. Partner or lease today!"
        />

        {/* Meta Author and Robots */}
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />

        {/* HTML Lang */}
        <html lang="en" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="NAF Germany: AI-Powered Vending Machines & Solutions" />
        <meta
          property="og:description"
          content="Browse innovative vending machines from NAF – AI-driven, sustainable, and customizable for businesses in Germany and beyond."
        />
        <meta property="og:image" content={frenchFries} />
        <meta property="og:url" content="https://vendinaf.com/en/machine" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAF Germany: AI-Powered Vending Machines & Solutions" />
        <meta
          name="twitter:description"
          content="Browse innovative vending machines from NAF – AI-driven, sustainable, and customizable for businesses in Germany and beyond."
        />
        <meta name="twitter:image" content={frenchFries} />

        {/* Structured Data (JSON-LD) for Rich Snippets – ItemList for Products */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "NAF Vending Machines",
            "description": "A collection of AI-powered, sustainable vending machines from NAF Germany, including pizza, beer, and return systems.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "Pizza Vending Machine",
                  "description": "Discover the Pizza Vending Machine from NAF Germany: AI-powered for fresh, on-demand pizzas with real-time analytics, waste reduction, and sustainable features to optimize efficiency in hotels and events.",
                  "url": {PizzaMachine} 
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "French Fries Vending Machine",
                  "description": "Explore the French Fries Vending Machine by NAF: Smart, AI-driven dispenser with precise temperature control, energy efficiency, and eco-friendly design for high-traffic locations like gas stations and universities.",
                  "url": {frenchFries} 
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "Ice cream Vending Machine",
                  "description": "Check out the Ice cream Vending Machine from NAF Germany: Automated and sustainable solution for creamy treats, featuring AI optimization, temperature management, and minimal waste for festivals and public spaces."
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "Beer Vending Machine",
                  "description": "Learn about the Beer Vending Machine by NAF: Innovative, AI-powered dispenser with smart telemetry, reusable packaging support, and energy-efficient operation ideal for restaurants, events, and factories."
                }
              },
              // Add more items for other machines (e.g., Fries, Return System)
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Product",
                  "name": "Return Vending System",
                  "description": "Experience the Return Vending System from NAF Germany: Eco-friendly and AI-integrated for seamless deposit management, reusable packaging, and waste reduction, perfect for municipalities and sustainable businesses."
                }
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "NAF Germany",
              "logo": {
                "@type": "ImageObject",
                "url": { logoUrl }
              }
            }
          })}
        </script>
      </Helmet>
      <Box className='machines-container1'>
        <Box className='machines-container'>
          <h1 className="headings-h1" variant="h1" sx={{ color: "#FCFCFC" }}>
            {t('machines.machineTitle')}
          </h1>
          <h2 className="bodyRegularText3" variant="body1" sx={{ color: "#C2C2C4", mt: { xs: '8px', sm: '8px', md: '16px' } }} >
            {t('machines.machineSubTitle')}
          </h2>
        </Box>
        <MarqTextScroll />
      </Box>

      {/* <PhysicsButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} /> */}
      {isMobileOrTablet ? (
        <MobileButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} />
      ) : (
        <PhysicsButtons selectedMachine={selectedMachine} setSelectedMachine={setSelectedMachine} />
      )}
      {isMobileOrTablet ? (
        <MachinesSection1 selectedMachine={selectedMachine} />
      ) : (
        <MachinesSection selectedMachine={selectedMachine} />
      )}
      {/* <CatalogueDownloadSection />
      <Solutions />
      <PaymentOptions /> */}

      <Box className="section-container" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', px: 0 }}>
        <h2 className='expertise-title headings-h2' sx={{
          position: 'relative',
          bottom: '-50px',
          width: { md: '70%' },
          px: { xs: 2, sm: 3, md: 4 }
        }} variant="h4" align="center" gutterBottom>
          {t('machines.PartnerNAFGermany')}
        </h2>
        <GetinTouch />
        <PartnersForm />
      </Box>

      {/* <Maintenance /> */}
    </Box>
  );
};

export default MachinesPage;