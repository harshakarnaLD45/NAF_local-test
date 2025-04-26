import React, { useEffect } from 'react'
import softwareHeroImg from '../../assets/software/software_hero-svg.svg'
import { Box, Typography } from '@mui/material'
import './SoftwarePage.css';
import GridsSection from './GridsSection';
import Specifications from './Specifications';
import ExpertiseSection from './ExpertiseSection';
import ReadySection from './ReadySection';
import { useTranslation } from 'react-i18next';

function SoftwarePage() {
  const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Box className='softwarepage-main-container'>
                <Box>
                    <Typography variant='h1' className='headings-h1 maintext' sx={{ color: '#FCFCFC' }}>
                        {t('software.heroTitle')}
                    </Typography>
                    <Typography className='bodyRegularText3 maintext   maintext1' sx={{ color: '#C2C2C4' }}>
                    {t('software.heroSubTitle')}
                    </Typography>
                </Box>
                <Box>
                    <img className='software-hero-img' src={softwareHeroImg} alt="Software Hero Image" />
                </Box>
            </Box>

            <Box className='section-container'>
                <Box className='software-intro-sec'>
                    <Typography className="herotitle headings-h2" variant="h2" sx={{ color: "#FCFCFC" }}>
                    {t('software.introducingcloud')}
                    </Typography>
                    <Typography className="bodyRegularText3 bodyMediumText2" variant="body1" sx={{ color: "#C2C2C4" }} >
                    {t('software.introducingcloudSubtitle')}
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