import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton'
import './MantaincePage.css'
import SupportSection from './SupportSection'
import ServiceForm from './ServiceForm'
import { useTranslation } from 'react-i18next'

function MantaincePage() {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box>
            <Box className='maintaince-container'>
                <Box>
                    <Typography data-cursor="hover" variant='h1' className='headings-h1 maintaince-sub-container1  maintext' sx={{ color: '#FCFCFC' }}>
                        {t('Maintenance.ReliableMaintenance')}
                    </Typography>
                    <Box className='maintextcontainer'>
                        <Typography data-cursor="hover" className='bodyRegularText3 maintext maintext1' sx={{ color: '#C2C2C4', py: 3 }}>
                            {t('Maintenance.ReliableMaintenanceSubtitle')}
                        </Typography>
                        <Box data-cursor="hover" className="button-container">
                            <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} route='machine' />
                        </Box>
                    </Box>
                </Box>

                <Box></Box>
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