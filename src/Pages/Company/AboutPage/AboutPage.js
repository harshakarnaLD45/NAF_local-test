import React from 'react';
import { Box, Typography } from '@mui/material';
import './AboutPage.css';
import StarIcon from '../../../assets/About/Vector.svg'
import TextSection from './TextSection';
import TeamSection from './TeamSection';
import AwardsSection from './AwardsSection';
import ValuesSection from './ValuesSection';

function AboutPage() {
    return (
        <Box>
            {/* Hero section */}
            <Box className="about-page-container">
                {/* Row 1: Title + Star + Description */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        WE’ RE THE
                    </Typography>
                    <img src={StarIcon} alt='star' className="star-icon" />
                    <Typography className="bodyRegularText3 white-text description">
                        A prominent provider of innovative vending machine solutions, committed to delivering cutting-edge products and services that meet the evolving needs of consumers and businesses.
                    </Typography>
                </Box>

                {/* Row 2 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text green-text">
                        NEW AGE OF FOOD,
                    </Typography>
                    <Typography className="headings-h1 responsive-text white-text">
                        YOUR
                    </Typography>
                </Box>

                {/* Row 3 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        PARTNER FOR INNOVATIVE
                    </Typography>
                </Box>

                {/* Row 4 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        VENDING SOLUTIONS
                    </Typography>
                </Box>
                <Typography className="bodyRegularText3 white-text description1">
                    A prominent provider of innovative vending machine solutions, committed to delivering cutting-edge products and services that meet the evolving needs of consumers and businesses.
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
