import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import SoftwareSystemIcon1 from '../../assets/software/SoftwareSystemIcon1.svg';
import SoftwareSystemIcon2 from '../../assets/software/SoftwareSystemIcon2.svg';
import SoftwareSystemIcon3 from '../../assets/software/SoftwareSystemIcon3.svg';
import SoftwareSystemIcon4 from '../../assets/software/SoftwareSystemIcon4.svg';
import SoftwareSystemIcon5 from '../../assets/software/SoftwareSystemIcon5.svg';
import SoftwareSystemIcon6 from '../../assets/software/SoftwareSystemIcon6.svg';
import SoftwareSystemIcon7 from '../../assets/software/SoftwareSystemIcon7.svg';
import { useTranslation } from 'react-i18next';

const GridsSection = () => {
  const { t } = useTranslation();


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#1A2027',
        color: '#fff',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }));

    return (
        <div className="bentogrid-container" style={{ padding: '0px' }}>
            <Grid container spacing={1} sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6} lg={4}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec">
                            <img src={SoftwareSystemIcon1} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} > {t('software.bentoTitle1')}</Typography>
                            <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4', textAlign: 'left' }}> {t('software.bentoSubTitle1')}</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec " >
                            <img src={SoftwareSystemIcon2} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} >{t('software.bentoTitle2')}</Typography>
                            <Typography className='bodyRegularText3' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>
                                {t('software.bentoSubTitle2')}</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec">
                            <img src={SoftwareSystemIcon3} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} >{t('software.bentoTitle3')}</Typography>
                            <Typography className='bodyRegularText3' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>
                               {t('software.bentoSubTitle3')}</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec">
                            <img src={SoftwareSystemIcon4} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} >{t('software.bentoTitle4')}</Typography>
                            <Typography className='bodyRegularText3' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>{t('software.bentoSubTitle4')}</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec" >
                            <img src={SoftwareSystemIcon5} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} >{t('software.bentoTitle5')}</Typography>
                            <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4', textAlign: 'left' }}>{t('software.bentoSubTitle5')}</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec">
                            <img src={SoftwareSystemIcon6} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} >{t('software.bentoTitle6')}</Typography>
                            <Typography className='bodyRegularText3' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>
                                {t('software.bentoSubTitle6')}</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Item className='bentogrid-item'>
                        <Box className="bentogrid-image-sec">
                            <img src={SoftwareSystemIcon7} className='soft-ware-icon' alt='software' />
                        </Box>
                        <Box className="bentogrid-text-sec">
                            <Typography className='headings-h4' sx={{ textAlign: 'left' }} >{t('software.bentoTitle7')}</Typography>
                            <Typography className='bodyRegularText3' sx={{
                                color: '#C2C2C4',
                                textAlign: 'left',
                                maxWidth: '720px'
                            }}>
                                {t('software.bentoSubTitle7')}</Typography>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
};

export default GridsSection;