import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Footer.css";
import Facebook from '../../assets/Social Icons.png';
import Twitter from '../../assets/Social Icons (1).png';
import Instagram from '../../assets/Social Icons (2).png';
import LinkedIn from '../../assets/Social Icons (3).png';
import YouTube from '../../assets/Social Icons (4).png';
import AnimateButton from "../CommonComponents/AnimateButton";
import FooterLogo from '../../assets/FooterLogo.svg'
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import FooterVideo from '../../assets/footer video.mp4'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
  };

  const socialIcons = [
    { src: Facebook, name: "Facebook", url: "https://www.facebook.com/p/NAF-New-Age-of-Food-by-Gasthof-Halsbach-61551546894852/" },
    // { src: Twitter, name: "Twitter", url: "https://twitter.com/yourcompany" },
    { src: Instagram, name: "Instagram", url: "https://www.instagram.com/nafbygasthofhalsbach/" },
    { src: LinkedIn, name: "LinkedIn", url: "https://www.linkedin.com/in/odette-lamkhizni-42a241251/" },
    { src: YouTube, name: "YouTube", url: "https://www.youtube.com/@NAFbyGasthofHalsbach" },
  ];

  return (
    <Box sx={{ pt: { xs: '2rem', md: '5rem' }, height: "100%" }} className='footer-container'>
      <Box className="footer-section"
        sx={{
          bgcolor: "#FA7854",
          overflow: "hidden",
          position: "relative",
          height: "100%",
          mt: { xs: 4, sm: 6, md: 10 },
          pb: { xs: 0, sm: 1, md: 0 },
        }}
      >
        <Box sx={{
          position: "relative",
          width: "100%",
          // whiteSpace: "nowrap",
        }} >
          <Box className="footer-orange-ball"
            sx={{
              width: {
                xs: "300px",
                sm: "500px",
                md: "700px"
              },
              height: {
                xs: "300px",
                sm: "500px",
                md: "700px"
              },
              bgcolor: "#F84311",
              borderRadius: "857.333px",
              position: "absolute",
              top: "85%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              zIndex: 0,
            }}
          />
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
                className="headings-h2 footerhead"
                variant="h2"
                sx={{
                  color: "#FCFCFC",
                  position: "relative",
                  zIndex: 1,
                  mx: "auto",
                  mb: 8,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box component="span" className="headings-h2" sx={{ whiteSpace: "nowrap" }}>
                  {t('footer.Gotaproject')}
                </Box>

                <Box component="span" sx={{ mt: 0, pt: 0 }} className="headings-h2">
                  {t('footer.Gotaproject1')}
                </Box>

                <Box
                  component="video"
                  src={FooterVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  sx={{
                    width: { xs: "80px", sm: "100px", md: "170px" },
                    height: "auto",
                    borderRadius: "70px",
                    objectFit: "cover",
                    ml: 2
                  }}
                />
                <Box component="span" sx={{ mt: 0, pt: 0 }} className="headings-h2">
                  {t('footer.Gotaproject2')}
                </Box>
              </Typography>
              <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} route={`/${lang}/contact`} />

              <Box className="social-icon-sec" sx={{
                position: 'relative', mt: 4,
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
            </Stack>

            <Box className="btn-social-icon"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                paddingBottom: '0rem',
              }}
            >
            </Box>

            <Stack spacing={{ xs: 2, md: 2 }}>
              <Typography
                className="footercontact bodyMediumText1"
                sx={{ color: "#FCFCFC" }}
              >
                {t('footer.subscrptionText')}
              </Typography>
              <TextField
                className='bodyRegularText3'
                label={t('contactus.Email')}
                variant="standard"
                required
                fullWidth
                name="email"
                value={email}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: {
                    color: '#C2C2C4',
                    fontSize: {
                      md: '10px',
                      lg: '20px',
                    },
                  },
                }}
                InputProps={{
                  disableUnderline: false,
                  sx: {
                    color: '#C2C2C4',
                    paddingTop: "28px",
                    '&:before': { borderBottomColor: '#C2C2C4' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#C2C2C4' },
                    '&:after': { borderBottomColor: '#C2C2C4' },
                  },
                }}
              />

              <Typography
                className="footercontact bodyRegularText5"
                sx={{ color: "#C2C2C4", pt: 3 }}
              >
                {t('footer.footerContact')}
              </Typography>
              <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
                <Typography
                  className="footercontactdown footerpadding bodyRegularText4"
                  sx={{
                    color: "#FCFCFC",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >
                  info@naf-halsbach.de
                </Typography>
                <Typography
                  className="footercontactdown footerpadding bodyRegularText4"
                  sx={{
                    color: "#FCFCFC",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >0152 – 28387141 (Odette Lamkhizni)

                </Typography>
                <Typography
                  className="footercontactdown footerpadding bodyRegularText4"
                  sx={{
                    color: "#FCFCFC",
                    fontSize: { xs: "18px", md: "22px" },
                    textAlign: { xs: "center", md: "left" }
                  }}
                >
                  0162 – 1638005  (Technischer Support 24/7)
                </Typography>
              </Stack>
              <Typography
                className="footercontact bodyRegularText5"
                sx={{ color: "#C2C2C4", pt: 3 }}
              >
                {t('footer.footerAddress')}
              </Typography>
              <Stack className="info-stack" spacing={3}>
                <Typography
                  className="footercontactdown footerright bodyRegularText4"
                  sx={{
                    color: "#FCFCFC",
                    // textAlign: { xs: "left", md: "right" },
                    fontSize: { xs: "18px", md: "22px" }
                  }}
                >
                  Obere Straße 3, 09599 Freiberg, OT <br className="br-footer" /> Halsbach
                </Typography>
                <img src={FooterLogo} style={{ width: '100%', marginBottom: '4vh' }} alt="logo" />
              </Stack>
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
                color: "#FCFCFC",
                fontSize: { xs: "14px", md: "17px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              {t('footer.footerCopyright')}{currentYear} {t('footer.footerCopyright2')}
            </Typography>
            <Typography
              className="footercontact bodyRegularText4"
              sx={{
                color: "#FCFCFC",
                fontSize: { xs: "14px", md: "17px" },
                textAlign: { xs: "center", md: "right" }
              }}
            >
              {t('footer.footerTermsConditions')}
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
              // whiteSpace: "nowrap",
              width: "100%",
              textTransform: 'uppercase'
            }}
          >
            <Box className="footer-scroll-text">
              {t('footer.footerTitle')} &nbsp;  &nbsp; {t('footer.footerTitle')} &nbsp;  &nbsp; {t('footer.footerTitle')}
            </Box>
          </Typography>


        </Box>

        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;