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

function AboutPage() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
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
                        { src: NAF1Image, alt: 'N' },
                        { src: NAF2Image, alt: 'A' },
                        { src: NAF3Image, alt: 'F' }
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
                        {t('about.heroTitleline2')}
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
                    {/* <Box
                        sx={{
                            width: '100%',
                            maxWidth: '355px',
                            maxHeight: '150px',
                            aspectRatio: '16 / 9',
                            borderRadius: 100,
                            overflow: 'hidden',
                            background: "#FCFCFC",
                        }}
                    >
                        <video
                            src="" // replace with your actual path
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box> */}
                </Box>
                <Typography className="bodyRegularText3 white-text description1">
                    {t('about.heroSubTitleline')}
                </Typography>
            </Box>

            {/* Video Section */}
            <Box
                sx={{
                    width: '100%',
                    marginTop: { xs: '2rem', sm: '4rem', md: '10rem' },
                    height: {
                        xs: '300px',
                        sm: '400px',
                        md: '600px',
                        lg: '750px',
                        xl: '820px',
                    },
                    bgcolor: '#525252',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
            </Box>
            <TextSection />
            <TeamSection />
            <AwardsSection />
            <ValuesSection />
        </Box>
    );
}

export default AboutPage;
