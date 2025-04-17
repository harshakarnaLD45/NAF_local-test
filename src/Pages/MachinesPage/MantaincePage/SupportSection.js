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
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Preventative <br />Maintenance</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon3 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Remote <br />Diagnostics</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="expertise-sub-cards-container2" style={{}}>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon2 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Prompt <br />Repairs</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="expertise-image" >
                            <SupportIcon4 />
                        </Box>
                        <Box>
                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Dedicated Support <br />Team</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SupportSection;