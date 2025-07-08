import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/Linkedin.svg';
import YouTube from '../../assets/Youtube.svg';
import AnimateButton from "../CommonComponents/AnimateButton";
import FooterLogo from '../../assets/Foote-logo.svg'
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import FooterVideo from '../../assets/naf-footer-video.mp4'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { East } from "@mui/icons-material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });



  const hubspotFormRef = useRef(null);

  useEffect(() => {
    // Only load script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.charset = "utf-8";
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "145027405",
            formId: "707bb44a-4705-4866-9197-009af38be15b",
            region: "eu1",
            target: "#hubspot-footer-form"
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.hbspt.forms.create({
        portalId: "145027405",
        formId: "707bb44a-4705-4866-9197-009af38be15b",
        region: "eu1",
        target: "#hubspot-footer-form"
      });
    }
  }, []);


  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const validateEmail = (mail) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handleMailSubmit = () => {
    if (!email) {
      setEmailError('Please enter your email address.');
      setSnackbar({ open: true, message: 'Please enter your email address.', severity: 'error' });
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Invalid email address.');
      setSnackbar({ open: true, message: 'Invalid email address.', severity: 'error' });
      return;
    }
    // Success: you can add your submit logic here
    setSnackbar({ open: true, message: 'Mailed successfully!', severity: 'success' });
    setEmail('');
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };








  const socialIcons = [
    { src: Facebook, name: "NAF Facebook", url: "https://www.facebook.com/p/NAF-New-Age-of-Food-by-Gasthof-Halsbach-61551546894852/" },
    { src: Instagram, name: "NAF Instagram", url: "https://www.instagram.com/nafbygasthofhalsbach/" },
    { src: LinkedIn, name: "NAF LinkedIn", url: "https://www.linkedin.com/in/odette-lamkhizni-42a241251/" },
    { src: YouTube, name: "NAF YouTube", url: "https://www.youtube.com/@NAFbyGasthofHalsbach" },
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
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              position: "relative",
              zIndex: 1,
              mb: { xs: 6, md: 10 },
              px: { xs: 2, md: "2rem" },
              paddingTop: '0px',
              gap: { xs: 4, md: 0 },
            }}
          >
            <Stack className="webite-contact" spacing={{ xs: 2, md: 2 }} alignItems={{ md: "flex-start" }}>
              <Typography
                className="headings-h2 footerhead"
                variant="h2"
                sx={{
                  width: { xs: "100%", md: "auto" },
                  color: "#FCFCFC",
                  position: "relative",
                  zIndex: 1,
                  mx: "auto",
                  mb: 8,
                  display: "flex",
                  flexWrap: "wrap",

                  // overflow: "hidden", // Add this line to hide scrollbars
                  // alignItems: "center", // Optional: vertically center content
                }}
              >
                <Box component="span" className="headings-h2 xl-heading-text ">
                  {t('footer.Gotaproject')}
                </Box>

                <Box component="span" sx={{ mt: 0, pt: 0, ml: { sm: 2 }, whiteSpace: "wrap" }} className="headings-h2 xl-heading-text  ">
                  {t('footer.Gotaproject1')}
                </Box>
                {/* <Box component="span" sx={{ mt: 0, pt: 0, ml:{sm: 2} , whiteSpace: "wrap" }} className="headings-h2">
                  {t('footer.Gotaproject1')}
                </Box> */}

                <Box
                  component="video"
                  src={FooterVideo}
                  aria-label="NAF Founders: Odette Lamkhizni and Abdelilah Lamkhizni."
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
                <Box component="span" sx={{ mt: 0, pt: 0 }} className="headings-h2 xl-heading-text  ">
                  {t('footer.Gotaproject2')}
                </Box>
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { sm: "center" } }}>
                <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} route={`/${lang}/contact`} />
              </Box>

              <Box className="social-icon-sec" sx={{
                position: 'relative', pt: 5,
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
              <Box className=" footer-website-contact" >



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

              </Box>
            </Stack>

            {/* <Box className="btn-social-icon"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                paddingBottom: '0rem',
              }}
            >
            </Box> */}

            <Stack className="footer-right" spacing={{ xs: 2, md: 2 }}>
              <Typography
                className="footercontact bodyMediumText1"
                sx={{ color: "#FCFCFC" }}
              >
                {t('footer.subscrptionText')}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "end" }}>
                {/* <TextField
                  className='bodyRegularText3'
                  label={t('contactus.Email')}
                  variant="standard"
                  required
                  fullWidth
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  error={!!emailError}
                  helperText={emailError}
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
                      color: '#FCFCFC',
                      paddingTop: "28px",
                      '&:before': { borderBottomColor: '#C2C2C4' },
                      '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#C2C2C4' },
                      '&:after': { borderBottomColor: '#C2C2C4' },
                    },
                  }}
                />
                <Button className='mail-btn' sx={{pointer:"Cursor"}} onClick={handleMailSubmit}>
                  <East sx={{ color: '#35B814',
                   }} />
                </Button>
                <Snackbar
                  open={snackbar.open}
                  autoHideDuration={3000}
                  onClose={handleSnackbarClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                  </Alert>
                </Snackbar> */}
                <div id="hubspot-footer-form" className="bodyRegularText5" ref={hubspotFormRef} style={{ width: "100%" }} />
              </Box>
              <Box className="footer-mobile-contact">


                <Typography
                  className="footercontact bodyRegularText5"
                  sx={{ color: "#C2C2C4", pt: 1, mb: 2 }}
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
              </Box>

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


          {/* // ...existing code... */}
          <Typography
            variant="h1"
            className="footerBottomhead headings-h1"
            sx={{
              color: "#FCFCFC",
              position: "relative",
              bottom: { xs: -20, sm: -40, md: -40 },
              textAlign: "center",
              overflow: "hidden",
              zIndex: 0,
              width: "100%",
              height: "Auto",
              textTransform: 'uppercase'
            }}
          >
            <Marquee gradient={false} speed={80} sx={{ height: "auto" }}>
              {t('footer.footerTitle')} &nbsp; &nbsp; {t('footer.footerTitle')} &nbsp; &nbsp; {t('footer.footerTitle')}
            </Marquee>
          </Typography>
          {/* // ...existing code... */}


        </Box>

        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;