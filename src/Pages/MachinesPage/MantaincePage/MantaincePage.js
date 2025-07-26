import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton'
import './MantaincePage.css'
import SupportSection from './SupportSection'
import ServiceForm from './ServiceForm'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import logoUrl from '../../../assets/NAF-logo.png';
import { Helmet } from 'react-helmet'

function MantaincePage() {
    const { t } = useTranslation();
    const { lang } = useParams();


    useEffect(() => {
        document.title = `NAF Vending -${t('titles.maintenance')}`; // Set tab title

        window.scrollTo(0, 0);
    }, []);
    return (
        <Box>
            <Helmet>
                {/* Optimized Title with Primary Keywords */}
                <title>NAF Germany: Vending Maintenance Services</title>

                {/* Canonical URL */}
                <link rel="canonical" href="https://vendinaf.com/en/maintenance" />

                {/* Optimized Meta Description */}
                <meta
                    name="description"
                    content="Get reliable maintenance and 24/7 support for NAF Germany's AI-powered vending machines. From remote monitoring to on-site service, ensure optimal performance and minimal downtime. Contact us today!"
                />

                {/* Meta Author and Robots */}
                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />

                {/* HTML Lang */}
                <html lang="en" />

                {/* Open Graph Tags for Social Sharing */}
                <meta property="og:title" content="NAF Germany: Vending Machine Maintenance & Support Services" />
                <meta
                    property="og:description"
                    content="Reliable maintenance solutions for AI vending machines from NAF Germany, including remote monitoring, repairs, and service requests for businesses."
                />
                <meta property="og:url" content="https://vendinaf.com/en/maintenance" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NAF Germany: Vending Machine Maintenance & Support Services" />
                <meta
                    name="twitter:description"
                    content="Reliable maintenance solutions for AI vending machines from NAF Germany, including remote monitoring, repairs, and service requests for businesses."
                />
                <meta name="twitter:image" content={logoUrl} /> {/* Replace with actual image URL */}

                {/* Structured Data (JSON-LD) for Rich Snippets – Service for Maintenance Offerings */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Vending Machine Maintenance",
                        "provider": {
                            "@type": "Organization",
                            "name": "NAF Germany",
                            "url": "https://vendinaf.com",
                            "logo": logoUrl
                        },
                        "description": "Comprehensive maintenance and support for AI-powered vending machines, including 24/7 technical assistance, remote monitoring, and on-site repairs to minimize downtime and ensure sustainability.",
                        "areaServed": "Germany",
                        "offers": {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Vending Machine Support"
                            },
                            "priceCurrency": "EUR",
                            "price": "Contact for Pricing"
                        }
                    })}
                </script>
            </Helmet>

            <Box className='maintaince-container'>
                <Box>
                    <h1 data-cursor="hover" variant='h1' className='headings-h1 maintaince-sub-container1  maintext' sx={{ color: '#FCFCFC', width: '60%' }}>
                        {t('Maintenance.ReliableMaintenance')}
                    </h1>
                    <Box className='maintextcontainer'>
                        <h2 data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: 3 }}>
                            {t('Maintenance.ReliableMaintenanceSubtitle')}
                        </h2>
                        <Box data-cursor="hover" className="button-container">
                            <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} route={`/${lang}/contact`} />
                        </Box>
                    </Box>
                </Box>


            </Box>
            <Box className="maintaine-section2" sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <Box className="maintaine-section2-div" sx={{ width: "50%", pr: 2 }}>

                    <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: 3 }}>
                        {t('Maintenance.hospitalitySupport1')}
                    </Typography>
                    <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: 3 }}>
                        {t('Maintenance.hospitalitySupport2')}
                    </Typography>
                    <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: 3 }}>
                        {t('Maintenance.hospitalitySupport3')}
                    </Typography>



                </Box>
            </Box>

            <SupportSection />

            <Box className="section-container">
                <Typography className='expertise-title headings-h2' sx={{ position: 'relative', bottom: '-50px' }} variant="h4" align="center" gutterBottom>
                    {t('Maintenance.RequestServiceForm')}
                </Typography>
                <ServiceForm />
            </Box>
        </Box>
    )
}

export default MantaincePage