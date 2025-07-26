import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './HomePage.css';
import HomepageShowreel from './Homepagereel';
import Explore from './Explore';
import Clients from './Clients';
import TakeControl from './TakeControl';
import NafParagrap from './NafParagrap';
import WhatsNew from './WhatsNew';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import Testmonials from './Testmonials';
import Sustainability from './Sustainability';
import WhoWeServe from './WhoWeServe';
import GradientMaskText from '../../Componenets/CommonComponents/GradientMaskText';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import VendImg from '../../assets/Home/Gourmet-machine.png'
import Logourl from '../../assets/NAF-logo.png'
import CookieSettingsButton from './CookieSettingsButton';

const HomePage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    //  document.title = `NAF Vending -${t('titles.Home')}`; // Set tab title
  }, []);

  return (
    <Box>
      <Helmet>
        {/* Shorter, SEO-Optimized Title (targets "AI vending machines Germany" queries) */}
        <title>NAF Germany: AI-Powered Vending Machines</title>

        {/* Canonical URL */}
        <link rel="canonical" href="https://vendinaf.com/en" />

        {/* Optimized Meta Description */}
        <meta
          name="description"
          content="Discover NAF Germany's AI-powered vending machines for fresh, sustainable food solutions. From pizza to beer, optimize efficiency with smart technology. Partner with us today!"
        />

        {/* Meta Author and Robots */}
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />

        {/* HTML Lang */}
        <html lang="en" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="NAF Germany: AI-Powered Vending Machines" />
        <meta
          property="og:description"
          content="Explore NAF Germany's innovative vending machines – AI-driven, eco-friendly solutions for hotels, events, and more."
        />
        <meta property="og:image" content={VendImg} /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://vendinaf.com/en" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAF Germany: AI-Powered Vending Machines" />
        <meta
          name="twitter:description"
          content="Explore NAF Germany's innovative vending machines – AI-driven, eco-friendly solutions for hotels, events, and more."
        />
        <meta name="twitter:image" content={VendImg} /> {/* Replace with actual image URL */}

        {/* Structured Data (JSON-LD) for Rich Snippets – Organization with HomePage Focus */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NAF Germany",
            "url": "https://vendinaf.com",
            "description": "NAF Germany provides AI-powered vending machines and sustainable food solutions with smart cloud technology for various industries.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vendinaf.com/en/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "NAF Germany",
              "url": "https://vendinaf.com",
              "logo": Logourl, // Replace with actual logo URL
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Obere Straße 3",
                "addressLocality": "Freiberg, OT Halsbach",
                "postalCode": "09599",
                "addressCountry": "Germany"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-152-28387141",
                "contactType": "customer service",
                "email": "info@naf-halsbach.de"
              }
            }
          })}
        </script>
      </Helmet>
      {/* <CookieSettingsButton /> */}
      <Box className='main-container'>
        <Box>
          <GradientMaskText />
          <Box className='maintextcontainer'>
            <h1 data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' } }}>
              {t('Home.mainParagraph')}
            </h1>
            <Box data-cursor="hover" className="button-container" >
              <AnimateButton route={`/${lang}/machine`} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            // maxWidth: "100%",
            overflow: "hidden",
            display: { xs: 'none', sm: 'none', md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="img"
            src={VendImg}
            alt="NAF Gourmet Vending Machine Delivering Fresh, High-Quality Food Options."
            sx={{
              width: { xs: "80%", sm: "60%", md: "40%" },
              height: "auto",
              // maxWidth: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

      </Box>

      <HomepageShowreel />
      <Explore />
      <Clients />
      <WhoWeServe />
      <Sustainability />
      <TakeControl />
      <WhatsNew />
      <NafParagrap />
      <Testmonials />
    </Box>
  );
};

export default HomePage;