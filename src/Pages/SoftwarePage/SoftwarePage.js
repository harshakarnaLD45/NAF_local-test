import React, { useEffect } from 'react'
import softwareHeroImg from '../../assets/software/software-hero-svg.svg'
import { Box, Typography } from '@mui/material'
import './SoftwarePage.css';
import GridsSection from './GridsSection';
import Specifications from './Specifications';
import ExpertiseSection from './ExpertiseSection';
import ReadySection from './ReadySection';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import logoUrl from '../../assets/NAF-logo.png'; // Replace with actual logo URL
import SoftwareHeroImg from '../../assets/software/Real-time-sales-analytics.svg'; // Replace with actual logo URL

function SoftwarePage() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `NAF Vending -${t('titles.Software')}`; // Set tab title

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='section-container'>
            <Helmet>
                {/* Optimized Title with Primary Keywords */}
                {/* <title>NAF Germany: AI Vending Software & Cloud Management</title> */}

                {/* Canonical URL */}
                <link rel="canonical" href="https://vendinaf.com/en/software" />

                {/* Optimized Meta Description */}
                <meta
                    name="description"
                    content="Unlock NAF Germany's AI vending software for real-time analytics, cloud management with AWS and NAYAX, RFID integration, and energy-efficient telemetry. Optimize your vending network sustainably – explore now!"
                />

                {/* Meta Author and Robots */}
                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />

                {/* HTML Lang */}
                <html lang="en" />

                {/* Open Graph Tags for Social Sharing */}
                <meta property="og:title" content="NAF Germany: AI Vending Software & Cloud Management" />
                <meta
                    property="og:description"
                    content="Discover advanced vending software from NAF – AI-powered for inventory tracking, remote monitoring, and eco-friendly optimizations tailored for businesses."
                />
                <meta property="og:image" content={SoftwareHeroImg} />
                <meta property="og:url" content="https://vendinaf.com/en/software" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NAF Germany: AI Vending Software & Cloud Management" />
                <meta
                    name="twitter:description"
                    content="Discover advanced vending software from NAF – AI-powered for inventory tracking, remote monitoring, and eco-friendly optimizations tailored for businesses."
                />
                <meta name="twitter:image" content={SoftwareHeroImg} />

                {/* Structured Data (JSON-LD) for Rich Snippets – SoftwareApplication with Breadcrumb */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "NAF Vending Software",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Android, AWS, NAYAX",
                        "description": "AI-powered vending software for cloud-based management, real-time analytics,  telemetry, and energy efficiency. Optimize inventory, reduce waste, and monitor remotely for sustainable operations.",
                        "offers": {
                            "@type": "Offer",
                            "price": "Contact for Pricing",
                            "priceCurrency": "EUR"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "NAF Germany",
                            "logo": {
                                "@type": "ImageObject",
                                "url": { logoUrl } // logo url
                            }
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://vendinaf.com/en"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Software",
                                    "item": "https://vendinaf.com/en/software"
                                }
                            ]
                        },
                        "keywords": "AI vending software, cloud vending management, real-time vending analytics, sustainable vending telemetry"
                    })}
                </script>
            </Helmet>
            <Box className='softwarepage-main-container'>
                <Box className='software-herosection'>
                    <Typography variant='h1' className='headings-h1 maintext' sx={{ color: '#FCFCFC' }}>
                        {t('software.heroTitle')}
                    </Typography>
                    <Typography className='bodyRegularText3 maintext   maintext1' sx={{ color: '#C2C2C4' }}>
                        {t('software.heroSubTitle')}
                    </Typography>
                </Box>
                <Box className="laptop-img-sec">
                    <img className='software-hero-img' src={softwareHeroImg} alt="NAF : Streamline Vending Operations with Our Innovative Software." />
                </Box>
            </Box>

            <Box className='soft-second-sec' sx={{ width: '100%', margin: '200px 0' }}>
                <Box className='software-intro-sec'>
                    <Typography className="herotitle headings-h2" variant="h2" sx={{ color: "#FCFCFC" }}>
                        {t('software.introducingcloud')}
                    </Typography>
                    <Typography className="bodyRegularText3 bodyMediumText2 " variant="body1" sx={{ color: "#C2C2C4", width: '70%' }} >
                        {t('software.introducingcloudSubtitle')}
                    </Typography>
                </Box>
                <GridsSection />
            </Box>

            <Specifications />
            <ExpertiseSection />
            {/* <ReadySection /> */}
        </div>
    )
}

export default SoftwarePage