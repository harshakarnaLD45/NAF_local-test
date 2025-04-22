import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './AboutPage.css';
import StarIcon from '../../../assets/About/Vector.svg'
import TextSection from './TextSection';
import TeamSection from './TeamSection';
import AwardsSection from './AwardsSection';
import ValuesSection from './ValuesSection';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            {/* Hero section */}
            <Box className="about-page-container">
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
                    <Box
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
                    </Box>
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
