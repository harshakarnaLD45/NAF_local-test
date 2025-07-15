import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import arrowicon from "../../../assets/buton.png";
import "./Menu.css";
import Unlock from "./Unlock";
import VMMenu from "./VMMenu";
import Allergen from "./Allergen";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import MonthlyMenu from "./MonthlyMenu";
import Foodlabeling from "./Foodlabeling";

const Menu = () => {
  const { t } = useTranslation();


  useEffect(() => {
    document.title = `NAF Vending -${t('titles.Menu')}`; // Set tab title
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Helmet>
        <title>NAF Vending - Menu</title>
        <link rel="canonical" href="https://vendinaf.com/en/company/menu" />
        <meta name='description'
          content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
        <meta name="keywords"
          content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <Box className="section-container menucontainer">
        <Box sx={{
          position: "relative",
          bgcolor: "#FA7854",
          borderRadius: "24px",
          overflow: "hidden",
        }}
        >
          <Box
            sx={{
              p: { xs: 2, sm: 4, md: 6 }, // Adjust padding based on screen size
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              variant="h1"
              id="menu-orange-heading"
              className="headings-h1"
              sx={{
                color: "#fcfcfc",
                maxWidth: { xs: "100%", sm: "80%", md: "60%" }, // Adjust text width based on screen size
                textAlign: { xs: "center", sm: "left", md: "left" }, // Center on smaller screens, align left on larger screens
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >{t('menu.menuherotitle')}
            </Typography>
            <Typography
              variant="body1"
              className="bodyRegularText3"
              sx={{
                color: "#fcfcfc",
                textAlign: { xs: "center", sm: "left", md: "left" }, // Center on smaller screens, align left on larger screens
                mb: { xs: 3, sm: 4, md: 5 },
              }}
            >
              {t('menu.menuheroSubtitle1')}
            </Typography>

            <Box
              sx={{
                width: { xs: 50, sm: 50, md: 70 }, // Adjust width based on screen size
                height: { xs: 60, sm: 60, md: 80 }, // Adjust height based on screen size
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                mt: { xs: 3, sm: 4, md: 5 },
              }}
            >
              <img
                src={arrowicon}
                alt="Arrow Down"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <VMMenu /> */}
      <MonthlyMenu />
      <Foodlabeling/>
      <Allergen />
      <Unlock />
    </Box>
  );
};

export default Menu;