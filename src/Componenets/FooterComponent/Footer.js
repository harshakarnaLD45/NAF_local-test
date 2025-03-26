import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import Facebook from '../../assets/Social Icons.png';
import Twitter from '../../assets/Social Icons (1).png';
import Instagram from '../../assets/Social Icons (2).png';
import LinkedIn from '../../assets/Social Icons (3).png';
import YouTube from '../../assets/Social Icons (4).png';
import { useTranslation } from 'react-i18next';
import AnimateButton from "../CommonComponents/AnimateButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialIcons = [
    { src: Facebook, name: "Facebook", url: "https://www.facebook.com/yourcompany" },
    { src: Twitter, name: "Twitter", url: "https://twitter.com/yourcompany" },
    { src: Instagram, name: "Instagram", url: "https://www.instagram.com/yourcompany" },
    { src: LinkedIn, name: "LinkedIn", url: "https://www.linkedin.com/company/yourcompany" },
    { src: YouTube, name: "YouTube", url: "https://www.youtube.com/@yourcompany" },
  ];

  return (
    <Box sx={{ pt: { xs: '2rem', md: '5rem' } }} className='footer-container'>
      <Box
        sx={{
          bgcolor: "#FA7854",
          overflow: "hidden",
          position: "relative",
          pt: { xs: 4, sm: 6, md: 10 },
          pb: { xs: 4, sm: 6, md: 10 },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              width: {
                xs: "300px",
                sm: "500px",
                md: "700px",
                lg: "857.333px"
              },
              height: {
                xs: "300px",
                sm: "500px",
                md: "700px",
                lg: "856px"
              },
              bgcolor: "#F84311",
              borderRadius: "857.333px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              zIndex: 0,
            }}
          />

          <Typography
            className="headings-h2"
            variant="h2"
            align="center"
            sx={{
              color: "#FCFCFC",
              position: "relative",
              zIndex: 1,
              maxWidth: { xs: 300, sm: 500, md: 724 },
              mx: "auto",
              mb: 8,
            }}
          >
            Got a project? Want to collaborate?
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr 1fr"
              },
              position: "relative",
              zIndex: 1,
              mb: { xs: 6, md: 10 },
              px: { xs: 2, md: "2rem" },
              paddingTop: '0px',
              gap: { xs: 4, md: 0 },
            }}
          >
            <Stack spacing={{ xs: 2, md: 2 }} alignItems={{ xs: "center", md: "flex-start" }}>
              <Typography
                className="footercontact"
                sx={{ color: "#444444" }}
              >
                {t('Home.footerContact')}
              </Typography>
              <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
                <Typography
                  className="footercontactdown footerpadding"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                > {t('Home.footerinfomail')}

                </Typography>
                <Typography
                  className="footercontactdown footerpadding"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >{t('Home.footerinfonumber')}

                </Typography>
                <Typography
                  className="footercontactdown footerpadding"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >{t('Home.footerinfonumber2')}

                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                gap: { xs: 2, md: 30 },
                flexWrap: 'wrap',
                paddingBottom: '0rem'
                // mt: { xs: 0, md: "200px" },
                // order: { xs: -1, md: 0 }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <AnimateButton text1='GET IN' text2='TOUCH' />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center' }}>
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      component="img"
                      src={social.src}
                      alt={social.name}
                      sx={{
                        width: { xs: 32, md: 40 },
                        height: { xs: 32, md: 40 },
                        cursor: "pointer",
                        objectFit: "contain",
                        '&:hover': {
                          opacity: 0.8,
                        }
                      }}
                    />
                  </a>
                ))}</Box>

            </Box>

            <Stack spacing={{ xs: 2, md: 2 }} alignItems={{ xs: "center", md: "flex-end" }}>
              <Typography
                className="footercontact"
                sx={{ color: "#444444" }}
              >
                Address
              </Typography>
              <Stack spacing={3} alignItems={{ xs: "center", md: "flex-end" }}>
                <Typography
                  className="footercontactdown footerright"
                  sx={{
                    color: "#1A1A1A",
                    textAlign: { xs: "center", md: "right" },
                    fontSize: { xs: "18px", md: "22px" }
                  }}
                >
                  Obere Straße 3, 09599 Freiberg, OT <br /> Halsbach
                </Typography>
              </Stack>
              <Box sx={{ mt: { xs: 2, md: 2 } }}>
                <Typography
                  className="footercontact"
                  sx={{
                    color: "#444444",
                    textAlign: { xs: "center", md: "right" },
                    mt: { xs: 2, md: 4 }
                  }}
                >
                  Automaten Standorte:
                </Typography>
                <Stack
                  spacing={2}
                  alignItems={{ xs: "center", md: "flex-end" }}
                  sx={{ mt: 2 }}
                >
                  <Typography
                    className="footercontactdown footerright"
                    sx={{
                      color: "#1A1A1A",
                      textAlign: { xs: "center", md: "right" },
                      fontSize: { xs: "18px", md: "22px" }
                    }}
                  >
                    DBI Foyer Freiberg, Halsbrückerstrasse <br /> 34, 09599 Freiberg
                  </Typography>
                  <Typography
                    className="footercontactdown footerright"
                    sx={{
                      color: "#1A1A1A",
                      textAlign: { xs: "center", md: "right" },
                      fontSize: { xs: "18px", md: "22px" }
                    }}
                  >
                    Landratsamt Mittweida Haus A, Am <br /> Landratsamt 3, 09648 Mittweida
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
              px: { xs: 2, md: "2rem" },
              gap: { xs: 2, md: 0 },
              paddingBottom: '2rem',
              paddingTop: '0rem'
            }}
          >
            <Typography
              className="footercontact"
              sx={{
                color: "#1A1A1A",
                fontSize: { xs: "14px", md: "17px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              © Copyright {currentYear}. All rights reserved.
            </Typography>
            <Typography
              className="footercontact"
              sx={{
                color: "#1A1A1A",
                fontSize: { xs: "14px", md: "17px" },
                textAlign: { xs: "center", md: "right" }
              }}
            >
              Terms and Conditions
            </Typography>
          </Box>

          <Typography
            variant="h1"
            className="footerBottomhead"
            sx={{
              color: "#FCFCFC",
              fontSize: { xs: "40px", sm: "80px", md: "100px", lg: "130px" },
              position: "absolute",
              bottom: { xs: -20, sm: -40, md: -50, lg: -150 },
              textAlign: "center",
              zIndex: 0,
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            LET'S WORK TOGETHER
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;