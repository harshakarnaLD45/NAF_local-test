import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton'
import './MantaincePage.css'
import SupportSection from './SupportSection'
import ServiceForm from './ServiceForm'

function MantaincePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box>
            <Box className='maintaince-container'>
                <Box>
                    <Typography data-cursor="hover" variant='h1' className='headings-h1 maintaince-sub-container1  maintext' sx={{ color: '#FCFCFC' }}>
                        Reliable Maintenance & Support for Your Vending Investment
                    </Typography>
                    <Box className='maintextcontainer'>
                        <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: 3 }}>
                            Ensuring Maximum Uptime and Long-Term Reliability
                        </Typography>
                        <Box data-cursor="hover" className="button-container">
                            <AnimateButton text1='GET IN' text2='TOUCH' route='machine' />
                        </Box>
                    </Box>
                </Box>

                <Box></Box>
            </Box>

            <SupportSection />

            <Box className="section-container">
                <Typography className='expertise-title headings-h2' sx={{ position: 'relative', bottom: '-50px' }} variant="h4" align="center" gutterBottom>
                    Request Service Form
                </Typography>
                <ServiceForm />
            </Box>
        </Box>
    )
}

export default MantaincePage