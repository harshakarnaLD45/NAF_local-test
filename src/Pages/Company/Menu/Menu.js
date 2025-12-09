import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import arrowicon from "../../../assets/buton.png";
import "./Menu.css";
import Unlock from "./Unlock";
import Allergen from "./Allergen";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import MonthlyMenu from "./MonthlyMenu";
import Foodlabeling from "./Foodlabeling";

const Menu = () => {
  const { t } = useTranslation();

  // Update tab title on language change
  useEffect(() => {
    document.title = `NAF Vending - ${t("titles.Menu")}`;
    window.scrollTo(0, 0);
  }, [t]);

  // Memoized JSON-LD
  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "NAF Vending Machine Menu",
        description:
          "A selection of fresh, sustainable food options from NAF Germany's AI-powered vending machines.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Product",
              name: "Pizza Menu Option",
              description:
                "Fresh pizza with AI-optimized preparation and sustainable ingredients.",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Product",
              name: "French Fries Menu Option",
              description:
                "Crispy fries with allergen labeling and eco-friendly packaging.",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Product",
              name: "Ice Cream Menu Option",
              description:
                "Soft ice cream options updated monthly with food-waste reduction features.",
            },
          },
        ],
        publisher: {
          "@type": "Organization",
          name: "NAF Germany",
        },
      }),
    []
  );

  return (
    <Box>
      <Helmet>
        <title>NAF Germany: Vending Machine Menu</title>

        <link rel="canonical" href="https://vendinaf.com/en/company/menu" />

        <meta
          name="description"
          content="Explore NAF Germany's vending machine menu featuring fresh, AI-optimized food options like pizza, fries, and ice cream."
        />

        <meta name="robots" content="index, follow" />

        {/* Social meta */}
        <meta
          property="og:title"
          content="NAF Germany: Vending Machine Menu & Fresh Food Options"
        />
        <meta
          property="og:description"
          content="Browse NAF's menu for AI-powered vending machines."
        />

        <script type="application/ld+json">{jsonLd}</script>
      </Helmet>

      <Box className="section-container menucontainer">
        <Box
          sx={{
            bgcolor: "#FA7854",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              p: { xs: 2, sm: 4, md: 6 },
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
                maxWidth: { xs: "100%", sm: "80%", md: "60%" },
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              {t("menu.menuherotitle")}
            </Typography>

            <Typography
              variant="body1"
              className="bodyRegularText3"
              sx={{
                color: "#fcfcfc",
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 3, sm: 4, md: 5 },
              }}
            >
              {t("menu.menuheroSubtitle1")}
            </Typography>

            <Box
              sx={{
                width: { xs: 50, md: 70 },
                height: { xs: 60, md: 80 },
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img src={arrowicon} alt="Arrow Down" style={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <MonthlyMenu />
      <Foodlabeling />
      <Allergen />
      <Unlock />
    </Box>
  );
};

export default Menu;
