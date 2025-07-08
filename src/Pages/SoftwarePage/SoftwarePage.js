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

function SoftwarePage() {
  const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='section-container'>
        <Helmet>
          <title>NAF Vending - Software</title>
          <link rel="canonical" href="https://vendinaf.com/en/software"/>
          <meta name='description'
            content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
          <meta name="keywords"
            content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
          <meta name="author" content="NAF Vending" />
          <meta name="robots" content="index, follow" />
          <html lang="en" />
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
                    <img  className='software-hero-img' src={softwareHeroImg} alt="NAF : Streamline Vending Operations with Our Innovative Software." />
                </Box>
            </Box>

            <Box className='soft-second-sec' sx={{width:'100%',margin:'200px 0'}}>
                <Box className='software-intro-sec'>
                    <Typography className="herotitle headings-h2" variant="h2" sx={{ color: "#FCFCFC" }}>
                    {t('software.introducingcloud')}
                    </Typography>
                    <Typography className="bodyRegularText3 bodyMediumText2 "  variant="body1" sx={{ color: "#C2C2C4",width:'70%' }} >
                    {t('software.introducingcloudSubtitle')}
                    </Typography>
                </Box>
                <GridsSection/>
            </Box>

            <Specifications/>
            <ExpertiseSection/>
            {/* <ReadySection /> */}
        </div>
    )
}

export default SoftwarePage