import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';

const CustomVendingSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className='section-container'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
            }}
        >
            {/* Left Section */}
            <Box sx={{ width: '50%' }}>
                <Typography variant="h3" fontWeight="bold" sx={{ color: '#FCFCFC' }}>
                    Custom Vending <br />
                    Solutions for <br />
                    Every Business
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc' }}>
                    Need a vending machine that’s perfectly tailored to your specific products, branding, or location? NAF Germany specializes in creating custom vending machines to meet your unique requirements.
                </Typography>

                <AnimateButton />
            </Box>

            {/* Right Section */}
            <Box sx={{ width: '50%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'column',
                            transform: isMobile ? 'none' : 'rotate(-90deg)',
                        }}
                    >
                        {[
                            'Custom Sizes & Layouts',
                            'Branding & Graphics',
                            'Specialized Dispensing',
                            'Unique Storage Options',
                            'Software Integration',
                            'Custom Payments',
                        ].map((text, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                className='bodyRegularText3'
                                sx={{
                                    color: '#C2C2C4',
                                    border: '1px solid #525252',
                                    pl: isMobile ? 0 : 2,
                                    padding: 3,
                                    width: '100%'
                                }}
                            >
                                {text}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CustomVendingSection;
