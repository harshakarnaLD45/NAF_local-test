import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import Image1 from '../../assets/Machines/HoverImage1.png';

const items = [
    { label: "Custom Sizes & Layouts", image: Image1 },
    { label: "Branding & Graphics", image: Image1 },
    { label: "Specialized Dispensing", image: Image1 },
    { label: "Unique Storage Options", image: Image1 },
    { label: "Software Integration", image: Image1 },
    { label: "Custom Payments", image: Image1 },
];

const CustomVendingSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Box
            className='section-container'
            sx={{
                display: { xs: 'block', sm: 'block', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
            }}
        >
            {/* Left Section */}
            <Box sx={{ width: { xs: '100%', sm: '100%', md: '40%' }, my: { xs: 3, sm: 4, md: 0 } }}>
                <Typography variant="h3" className='headings-h2' sx={{ color: '#FCFCFC' }}>
                    Custom Vending Solutions for Every Business
                </Typography>
                <Typography variant="body1" className='bodyRegularText3' sx={{ color: '#C2C2C4', my: 2 }}>
                    Need a vending machine that’s perfectly tailored to your specific products, branding, or location? NAF Germany specializes in creating custom vending machines to meet your unique requirements.
                </Typography>

                <AnimateButton />
            </Box>

            {/* Right Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: 'column', sm: 'column', md: "row" },
                    alignItems: { md: "flex-end" },
                    height: { xs: 'auto', sm: 'auto', md: "420px" },
                    borderBottom: "1px solid #666",
                    borderTop: "1px solid #666",
                    borderLeft: "1px solid #666",
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        sx={{
                            position: 'relative',
                            borderRight: "1px solid #666",
                            height: hoveredIndex === index ? { xs: "300px", sm: "300px", md: "100%" } : { md: "100%" },
                            width: hoveredIndex === index ? { md: '300px' } : { md: '80px' },
                            overflow: 'hidden',
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            cursor: 'pointer',
                            borderBottom: { xs: "1px solid #666", sm: "1px solid #666", md: "none" },
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        {/* Hover image */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: hoveredIndex === index ? 1 : 0,
                                transition: 'all 0.3s ease-in-out',
                                zIndex: 1,
                                height: { xs: "300px", sm: "300px", md: "100%" },
                            }}
                        />

                        {/* Vertical Text */}
                        <Typography className='bodyRegularText3'
                            sx={{
                                writingMode: { md: "vertical-rl" },
                                transform: { md: "rotate(180deg)" },
                                textAlign: "center",
                                color: hoveredIndex === index ? "#fff" : "#ccc",
                                zIndex: 2,
                                py: 3,
                                px: 3,
                                transition: 'color 0.3s ease',
                                textShadow: hoveredIndex === index ? '0 0 6px rgba(255,255,255,0.5)' : 'none',
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CustomVendingSection;
