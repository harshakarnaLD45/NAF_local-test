import React, { useEffect } from 'react'
import softwareHeroImg from '../../assets/software/software_hero-svg.svg'
import { Box, Typography } from '@mui/material'
import './SoftwarePage.css';
import GridsSection from './GridsSection';
import Specifications from './Specifications';
import ExpertiseSection from './ExpertiseSection';
import ReadySection from './ReadySection';

function SoftwarePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Box className='softwarepage-main-container'>
                <Box>
                    <Typography variant='h1' className='headings-h1 maintext' sx={{ color: '#FCFCFC' }}>
                        Smart Vending, Powered by the NAF Cloud System
                    </Typography>
                    <Typography className='bodyRegularText3 maintext   maintext1' sx={{ color: '#C2C2C4' }}>
                        Cutting-edge technology for efficient, scalable, and secure global vending operations.
                    </Typography>
                </Box>
                <Box>
                    <img className='software-hero-img' src={softwareHeroImg} alt="Software Hero Image" />
                </Box>
            </Box>

            <Box className='section-container'>
                <Box className='software-intro-sec'>
                    <Typography className="herotitle headings-h2" variant="h2" sx={{ color: "#FCFCFC" }}>
                        Introducing the NAF Cloud System
                    </Typography>
                    <Typography className="bodyRegularText3 bodyMediumText2" variant="body1" sx={{ color: "#C2C2C4" }} >
                        The NAF Cloud System is a comprehensive web-based dashboard designed to provide real-time insights and complete control over your vending machine operations. This centralized platform streamlines management and enhances business efficiency.
                    </Typography>
                </Box>
                <GridsSection />
            </Box>

            <Specifications />
            <ExpertiseSection />
            <ReadySection />
        </div>
    )
}

export default SoftwarePage