import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './AboutPage.css';
import StarIcon from '../../../assets/About/Vector.svg'
import TextSection from './TextSection';
import TeamSection from './TeamSection';
import AwardsSection from './AwardsSection';
import ValuesSection from './ValuesSection';
import { useTranslation } from 'react-i18next';
import NAF1Image from '../../../assets/About/NAF1.svg'
import NAF2Image from '../../../assets/About/NAF2.svg'
import NAF3Image from '../../../assets/About/NAF3.svg'
import { motion } from 'framer-motion';
import SmallVideo from '../../../assets/NAF-showreel.mp4'
import AboutGrid from './AboutGrid';
import { Helmet } from 'react-helmet';

function AboutPage() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
            // document.title = `NAF Vending -${t('titles.about')}`; // Set tab title
        
    }, []);

    return (
        <Box>
            <Helmet>
                <title>NAF Vending - About</title>
                <link rel="canonical" href="https://vendinaf.com/en/company/about" />
                <meta name='description'
                    content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
                <meta name="keywords"
                    content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            {/* Hero section */}
            <Box className="about-page-container">{/* Letter Images Section */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: { xs: '3rem', md: '5rem' },
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        { src: NAF1Image, alt: ' NAF Logo - Silver Balloon Letters on a Black Background.' },
                        { src: NAF2Image, alt: ' NAF Logo - Silver Balloon Letters on a Black Background.' },
                        { src: NAF3Image, alt: ' NAF Logo - Silver Balloon Letters on a Black Background.' }
                    ].map((img, index) => (
                        <motion.img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                            }}
                            style={{
                                height: 'auto',
                                cursor: 'pointer'
                            }}
                            className='about-naf-img-let'
                        />
                    ))}
                </Box>

                {/* Row 1: Title + Star + Description */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.heroTitleline1')}
                    </Typography>
                    <img src={StarIcon} alt='star' className="star-icon" />
                    <Typography className="bodyRegularText3 white-text description">
                        {t('about.heroSubTitleline')}
                    </Typography>
                </Box>

                {/* Row 2 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text green-text">
                        NEW AGE OF FOOD,
                    </Typography>
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.YOUR')}
                    </Typography>
                </Box>

                {/* Row 3 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.heroTitleline3')}
                    </Typography>
                </Box>

                {/* Row 4 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.heroTitleline4')}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '355px',
                            maxHeight: '150px',
                            aspectRatio: '16 / 9',
                            borderRadius: 100,
                            overflow: 'hidden',
                            // background: "#FCFCFC",
                        }}
                    >
                        <video
                            src={SmallVideo}
                            aria-label='NAF Logo - Silver Balloon Letters on a Black Background.'
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>
                <Typography className="bodyRegularText3 white-text description1">
                    {t('about.heroSubTitleline')}
                </Typography>
            </Box>

            <AboutGrid />
            <TextSection />
            <TeamSection />
            <AwardsSection />
            <ValuesSection />
        </Box>
    );
}

export default AboutPage;
