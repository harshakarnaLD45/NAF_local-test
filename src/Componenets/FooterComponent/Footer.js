import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import Facebook from '../../assets/Social Icons.png';
import Twitter from '../../assets/Social Icons (1).png';
import Instagram from '../../assets/Social Icons (2).png';
import LinkedIn from '../../assets/Social Icons (3).png';
import YouTube from '../../assets/Social Icons (4).png';
import AnimateButton from "../CommonComponents/AnimateButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { src: Facebook, name: "Facebook", url: "https://www.facebook.com/yourcompany" },
    { src: Twitter, name: "Twitter", url: "https://twitter.com/yourcompany" },
    { src: Instagram, name: "Instagram", url: "https://www.instagram.com/yourcompany" },
    { src: LinkedIn, name: "LinkedIn", url: "https://www.linkedin.com/company/yourcompany" },
    { src: YouTube, name: "YouTube", url: "https://www.youtube.com/@yourcompany" },
  ];

  return (
    <Box sx={{ pt: { xs: '2rem', md: '5rem' } }} className='footer-container'>
      <Box className="footer-section"
        sx={{
          bgcolor: "#FA7854",
          overflow: "hidden",
          position: "relative",
          pt: { xs: 4, sm: 6, md: 10 },
          pb: { xs: 4, sm: 6, md: 0 },
        }}
      >
        <Box sx={{ position: "relative ", }} >
          <Box className="footer-orange-ball"
            sx={{
              width: {
                xs: "300px",
                sm: "500px",
                md: "700px",
                lg: "700.333px"
              },
              height: {
                xs: "300px",
                sm: "500px",
                md: "700px",
                lg: "700px"
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
            className="headings-h2 footerhead "
            variant="h2"
            align="center"
            sx={{
              color: "#FCFCFC",
              position: "relative",
              zIndex: 1,
              maxWidth: { xs: "95%", sm: "70%", md: "60%", lg: "50%" },
              mx: "auto",
              mb: 8,
            }}
          >
            Got a project? Want to collaborate?
          </Typography>

          <Box className="footer-main-div"
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
            <Stack className="webite-contact" spacing={{ xs: 2, md: 2 }} alignItems={{ xs: "center", md: "flex-start" }}>
              <Typography
                className="footercontact bodyRegularText4"
                sx={{ color: "#444444" }}
              >
                Contact
              </Typography>
              <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
                <Typography
                  className="footercontactdown footerpadding bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                > info@naf-halsbach.de

                </Typography>
                <Typography
                  className="footercontactdown footerpadding bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >0152 – 28387141 (Odette Lamkhizni)

                </Typography>
                <Typography
                  className="footercontactdown footerpadding bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >0162 – 1638005  (Technischer Support 24/7)

                </Typography>
              </Stack>
            </Stack>

            <Box className="btn-social-icon"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',

                // gap: { xs: 2, md: 15 },
                flexWrap: 'wrap',
                paddingBottom: '0rem',
                // mt: { xs: 0, md: "200px" },
                // order: { xs: -1, md: 0 }
              }}
            >
              <Box className="btn-contact-sec"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                  position: "relative",
                  zIndex: 1,
                  marginBottom: { xs: "0rem", md: "5rem" }
                }}
              >
                <AnimateButton text1='GET IN' text2='TOUCH' route='contact' />
              </Box>
              <Box className="social-icon-sec" sx={{
                position: 'relative',
                display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center'
              }}>
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box className="social-icon"
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
                ))}
              </Box>
            </Box>
            <Stack className="mobile-contact" spacing={{ xs: 2, md: 2 }} alignItems={{ xs: "center", md: "flex-start" }}>
              <Typography
                className="footercontact bodyRegularText4"
                sx={{ color: "#444444" }}
              >
                Contact
              </Typography>
              <Stack className="info-stack" spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
                <Typography
                  className="footercontactdown footerpadding bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                > info@naf-halsbach.de

                </Typography>
                <Typography
                  className="footercontactdown footerpadding bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >0152 – 28387141 (Odette Lamkhizni)

                </Typography>
                <Typography
                  className="footercontactdown footerpadding bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >0162 – 1638005  (Technischer Support 24/7)

                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={{ xs: 2, md: 2 }} alignItems={{ xs: "center", md: "flex-end" }}>
              <Typography
                className="footercontact bodyRegularText4"
                sx={{ color: "#444444" }}
              >
                Address
              </Typography>
              <Stack className="info-stack" spacing={3} alignItems={{ xs: "center", md: "flex-end" }}>
                <Typography
                  className="footercontactdown footerright bodyMediumText2"
                  sx={{
                    color: "#1A1A1A",
                    textAlign: { xs: "left", md: "right" },
                    fontSize: { xs: "18px", md: "22px" }
                  }}
                >
                  Obere Straße 3, 09599 Freiberg, OT <br className="br-footer" /> Halsbach
                </Typography>
              </Stack>
              {/* <Box className="info-stack" sx={{ mt: { xs: 2, } }}>
                <Typography
                  className="footercontact bodyRegularText4 "
                  sx={{
                    color: "#444444",
                    textAlign: { xs: "center", md: "right" },
                    mt: { xs: 1, md: 2 }
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
                    className="footercontactdown footerright bodyMediumText2"
                    sx={{
                      color: "#1A1A1A",
                      textAlign: { xs: "center", md: "right" },
                      fontSize: { xs: "18px", md: "22px" }
                    }}
                  >
                    DBI Foyer Freiberg, Halsbrückerstrasse <br className="br-footer" /> 34, 09599 Freiberg
                  </Typography>
                  <Typography
                    className="footercontactdown footerright bodyMediumText2"
                    sx={{
                      color: "#1A1A1A",
                      textAlign: { xs: "center", md: "right" },
                      fontSize: { xs: "18px", md: "22px" }
                    }}
                  >
                    Landratsamt Mittweida Haus A, Am <br className="br-footer" /> Landratsamt 3, 09648 Mittweida
                  </Typography>
                </Stack>
              </Box> */}
            </Stack>
          </Box>
          {/* <Box className=" " sx={{position:'relative',}} > */}
          <Box className="footer-policy-div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              position: "relative",
              bottom: "-35px",
              zIndex: 1,
              px: { xs: 2, md: "2rem" },
              gap: { xs: 2, md: 0 },
              // paddingBottom: '2rem',
              paddingTop: '0rem'
            }}>
            <Typography
              className="footercontact bodyRegularText4"
              sx={{
                color: "#1A1A1A",
                fontSize: { xs: "14px", md: "17px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              © Copyright {currentYear}. All rights reserved.
            </Typography>
            <Typography
              className="footercontact bodyRegularText4"
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
            className="footerBottomhead headings-h1"
            sx={{
              color: "#FCFCFC",
              position: "relative",
              bottom: { xs: -20, sm: -40, md: -40, },
              textAlign: "center",
              zIndex: 0,
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            LET'S WORK TOGETHER
          </Typography>
        </Box>

        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;