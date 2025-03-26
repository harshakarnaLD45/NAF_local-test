import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AdobeLogo from "../../assets/Company logo.png";
import ElasticLogo from "../../assets/Company logo (1).png";
import ActiveCampaignLogo from "../../assets/Company logo (2).png";
import EvernoteLogo from "../../assets/Company logo (3).png";
import AirbnbLogo from "../../assets/Company logo (4).png";
import AirtaskerLogo from "../../assets/Company logo (5).png";
import AirtaskerAltLogo from "../../assets/Company logo (5).png";
import AirbnbAltLogo from "../../assets/Company logo (4).png";
import ActiveCampaignAltLogo from "../../assets/representations-user-experience-interface-design 1.png";
import AdobeAltLogo from "../../assets/Company logo.png";
import ElasticAltLogo from "../../assets/Company logo (1).png";
import EvernoteAltLogo from "../../assets/Company logo (3).png";

const companyLogos = [
  { id: 1, src: AdobeLogo, alt: "Adobe" },
  { id: 2, src: ElasticLogo, alt: "Elastic" },
  { id: 3, src: ActiveCampaignLogo, alt: "ActiveCampaign" },
  { id: 4, src: EvernoteLogo, alt: "Evernote" },
  { id: 5, src: AirbnbLogo, alt: "Airbnb" },
  { id: 6, src: AirtaskerLogo, alt: "Airtasker" },
];

const companyLogosRow2 = [
  { id: 7, src: AirtaskerAltLogo, alt: "Airtasker" },
  { id: 8, src: AirbnbAltLogo, alt: "Airbnb" },
  { id: 9, src: ActiveCampaignAltLogo, alt: "ActiveCampaign" },
  { id: 10, src: AdobeAltLogo, alt: "Adobe" },
  { id: 11, src: ElasticAltLogo, alt: "Elastic" },
  { id: 12, src: EvernoteAltLogo, alt: "Evernote" },
];

const ClientLogo = ({ src, alt }) => (
  <Box
    sx={{
      width: { xs: 160, sm: 220, md: 280, lg: 320 },
      height: { xs: 160, sm: 220, md: 280, lg: 320 },
      bgcolor: "#262626",
      borderRadius: '12px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexShrink: 0,
    }}
  >
    <Box
      component="img"
      src={src}
      alt={`${alt} logo`}
      sx={{
        maxWidth: { xs: 116, sm: 160, md: 200, lg: 232 },
        maxHeight: { xs: 24, sm: 32, md: 40, lg: 48 },
      }}
    />
  </Box>
);

const Clients = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    // Calculate total width of one set of logos including gaps
    const logoWidth = 320; // Using lg breakpoint width
    const gap = 24; // md gap (3 * 8px = 24px)
    const totalItemWidth = logoWidth + gap;
    const row1SingleWidth = companyLogos.length * totalItemWidth;
    const row2SingleWidth = companyLogosRow2.length * totalItemWidth;

    // Create seamless looping animation for Row 1 (Right to Left)
    const row1Animation = gsap.fromTo(
      row1,
      { x: 0 },
      {
        x: -row1SingleWidth,
        duration: 30, // Adjust speed here
        ease: "none",
        repeat: -1,
        modifiers: {
          x: function (x) {
            x = parseFloat(x) % row1SingleWidth;
            return `${x}px`;
          },
        },
      }
    );

    // Create seamless looping animation for Row 2 (Left to Right)
    const row2Animation = gsap.fromTo(
      row2,
      { x: -row2SingleWidth },
      {
        x: 0,
        duration: 30, // Adjust speed here
        ease: "none",
        repeat: -1,
        modifiers: {
          x: function (x) {
            x = parseFloat(x) % row2SingleWidth;
            return `${x}px`;
          },
        },
      }
    );

    return () => {
      row1Animation.kill();
      row2Animation.kill();
    };
  }, []);

  // Calculate how many repetitions are needed to fill screen plus buffer
  const screenWidth = window.innerWidth;
  const minRepeats = Math.ceil(screenWidth / (320 * companyLogos.length)) + 2;

  // Create repeated arrays for rendering
  const repeatedLogos1 = Array(minRepeats)
    .fill()
    .flatMap(() => companyLogos);
  const repeatedLogos2 = Array(minRepeats)
    .fill()
    .flatMap(() => companyLogosRow2);

  return (
    <Box ref={sectionRef} sx={{ overflow: "hidden" }}>
      <Box className='section-container'>
        <Typography variant="h2" className="headings-h2">
          Our Clients
        </Typography>
        <Typography variant="body1" className="bodyRegularText3" color="#C2C2C4"
          sx={{ maxWidth: { xs: "100%", md: "640px" } }}
        >
          Partnering with businesses of all sizes. We provide customized
          vending solutions to meet your unique requirements.
        </Typography>
      </Box>

      {/* Row 1 - Right to Left */}
      <Box
        ref={row1Ref}
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          mb: { xs: 2, md: 3 },
          width: "max-content",
          willChange: "transform",
        }}
      >
        {repeatedLogos1.map((logo, index) => (
          <ClientLogo key={`${logo.id}-${index}`} src={logo.src} alt={logo.alt} />
        ))}
      </Box>

      {/* Row 2 - Left to Right */}
      <Box
        ref={row2Ref}
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          width: "max-content",
          willChange: "transform",
        }}
      >
        {repeatedLogos2.map((logo, index) => (
          <ClientLogo key={`${logo.id}-${index}`} src={logo.src} alt={logo.alt} />
        ))}
      </Box>
    </Box>
  );
};

export default Clients;