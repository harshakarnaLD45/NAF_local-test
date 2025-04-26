import React from 'react';
import { Box, Typography } from '@mui/material';
import { SupportIcon1, SupportIcon2, SupportIcon3, SupportIcon4 } from '../../../Componenets/CustomIcons';
import { useTranslation } from 'react-i18next';

const SupportSection = () => {
    const { t } = useTranslation();
    return (
        <Box className="expertise-main-section" sx={{ position: 'relative' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: '50%',
                    zIndex: -1000,
                    py: 2,
                    marginTop: { xs: '50px', sm: '100px', md: '200px' },
                    marginBottom: { xs: '50px', sm: '50px', md: '100px' },
                }}
            >
                <Typography className='expertise-title headings-h2' sx={{ position: 'relative', bottom: '-50px' }} variant="h4" align="center" gutterBottom>
                {t('Maintenance.OurSupportServices')} <br />{t('Maintenance.OurSupportServices1')}
                </Typography>
            </Box>
            <Box className="expertise-maincards-container" style={{ padding: '0px', zIndex: '5' }}>
                <Box class name="expertise-sub-cards-container" style={{ padding: '0px', }}>
                    <Box className='expertise-sub-cards'>
                        <Box className=" expertise-image" >
                            <SupportIcon1 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >{t('Maintenance.PreventativeMaintenance')} <br />{t('Maintenance.PreventativeMaintenance1')}</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon3 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >{t('Maintenance.RemoteDiagnostics')} <br />{t('Maintenance.RemoteDiagnostics1')}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="expertise-sub-cards-container2" style={{}}>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon2 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >{t('Maintenance.PromptRepairs')} <br />{t('Maintenance.PromptRepairs1')}</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon4 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >{t('Maintenance.DedicatedSupportTeam')} <br />{t('Maintenance.DedicatedSupportTeam1')}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SupportSection;