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
        {/* Optimized Title with Primary Keywords */}
        <title>NAF Germany: Vending Machine Menu</title>

        {/* Canonical URL */}
        <link rel="canonical" href="https://vendinaf.com/en/company/menu" />

        {/* Optimized Meta Description */}
        <meta
          name="description"
          content="Explore NAF Germany's vending machine menu featuring fresh, AI-optimized food options like pizza, fries, and ice cream. Discover sustainable, allergen-friendly choices with monthly updates and food labeling details."
        />

        {/* Meta Author and Robots */}
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />

        {/* HTML Lang */}
        <html lang="en" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="NAF Germany: Vending Machine Menu & Fresh Food Options" />
        <meta
          property="og:description"
          content="Browse NAF's diverse menu for AI-powered vending machines, including sustainable and allergen-aware selections for hotels, events, and more."
        />
        <meta property="og:image" content="https://vendinaf.com/path-to-menu-hero-image.jpg" /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://vendinaf.com/en/company/menu" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAF Germany: Vending Machine Menu & Fresh Food Options" />
        <meta
          name="twitter:description"
          content="Browse NAF's diverse menu for AI-powered vending machines, including sustainable and allergen-aware selections for hotels, events, and more."
        />
        <meta name="twitter:image" content="https://vendinaf.com/path-to-menu-hero-image.jpg" /> {/* Replace with actual image URL */}

        {/* Structured Data (JSON-LD) for Rich Snippets – ItemList for Menu Items */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "NAF Vending Machine Menu",
            "description": "A selection of fresh, sustainable food options from NAF Germany's AI-powered vending machines, including monthly menus, allergen info, and food labeling.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product", // Or use "MenuItem" if more food-focused
                  "name": "Pizza Menu Option",
                  "description": "Fresh pizza from NAF vending machines with AI-optimized preparation and sustainable ingredients."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "French Fries Menu Option",
                  "description": "Crispy fries with allergen labeling and eco-friendly packaging in NAF's smart vending systems."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "Ice Cream Menu Option",
                  "description": "Creamy soft ice cream options, updated monthly with food waste reduction features."
                }
              },
              // Add more based on your actual menu items (e.g., Beer, Cotton Candy)
            ],
            "publisher": {
              "@type": "Organization",
              "name": "NAF Germany",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vendinaf.com/path-to-logo.png" // Replace with actual logo URL
              }
            }
          })}
        </script>
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
      {/* <MonthlyMenu />
      <Foodlabeling />
      <Allergen />
      <Unlock /> */}
    </Box>
  );
};

export default Menu;