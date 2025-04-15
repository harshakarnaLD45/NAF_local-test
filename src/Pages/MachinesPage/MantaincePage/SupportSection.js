import React from 'react';
import { Box, Typography } from '@mui/material';
import { SupportIcon1, SupportIcon2, SupportIcon3, SupportIcon4 } from '../../../Componenets/CustomIcons';

const SupportSection = () => {
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
                    Our Support <br />Services
                </Typography>
            </Box>
            <Box className="expertise-maincards-container" style={{ padding: '0px', zIndex: '5' }}>
                <Box class name="expertise-sub-cards-container" style={{ padding: '0px', }}>
                    <Box className='expertise-sub-cards'>
                        <Box className=" expertise-image" >
                            <SupportIcon1 />
                        </Box>
                        <Box className="expertise-text-sec">
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Remote Machine Monitoring</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>Monitor machine status, schedule maintenance, and address technical issues remotely.</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon2 />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Cloud Security</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>Protect your sensitive data with robust security measures, ensuring compliance and peace of mind.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="expertise-sub-cards-container2" style={{}}>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon3 />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Cloud Optimization</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>We fine-tune your cloud environment for optimal performance and cost-effectiveness, reducing expenses and improving resource utilization.</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon4 />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Managed Cloud Services</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>We provide ongoing maintenance and proactive support, freeing up your IT team to focus on strategic initiatives.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SupportSection;