import { Box } from "@mui/material";
import React from "react";
import ScrollMaskText from "../../Componenets/CommonComponents/ScrollMaskText";
import ScrollMaskHeadings from "../../Componenets/CommonComponents/ScrollMaskHeadings";
import { useTranslation } from "react-i18next";
import Client1 from '../../assets/Home/Client1.svg';
import Client2 from '../../assets/Home/Client2.svg';
import Client3 from '../../assets/Home/Client3.svg';
import Client4 from '../../assets/Home/Client4.svg';

const logos = [Client1, Client2, Client3, Client4];

const Clients = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box className="section-container" sx={{ pb: 0, mb: 0 }}>
        <ScrollMaskHeadings text={t("Home.ourClientsTitle")} />
        <Box sx={{ maxWidth: { xs: "100%", md: "640px" }, mt: { xs: '8px', sm: '8px', md: '16px' } }}>
          <ScrollMaskText text={t("Home.ourClientsSubTitle")} />
        </Box>
      </Box>

      {/* Logo Slider */}
      <Box sx={{ overflow: "hidden", width: "100%", mt: '20px' }}>
        <Box
          className="slider-track"
          sx={{
            display: "flex",
            gap: "10px",
            width: "fit-content",
            animation: "scroll 30s linear infinite",
          }}
        >
          {/* Repeat logos enough times for seamless scroll */}
          {[...logos, ...logos, ...logos, ...logos].map((src, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: { xs: "250px", sm: "250px", md: "320px" },
                height: { xs: "250px", sm: "250px", md: "320px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "#262626",
              }}
            >
              <img
                src={src}
                alt={`logo-${index}`}
                style={{
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(1) brightness(1.5)",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Keyframes CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Clients;
