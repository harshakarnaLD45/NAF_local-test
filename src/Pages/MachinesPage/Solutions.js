import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import Image1 from '../../assets/Machines/HoverImage1.png';
import Image2 from '../../assets/Machines/HoverImage2.jpg';
import Image3 from '../../assets/Machines/HoverImage3.jpg';
import Image4 from '../../assets/Machines/HoverImage4.jpg';
import Image5 from '../../assets/Machines/HoverImage5.jpg';
import Image6 from '../../assets/Machines/HoverImage6.jpg';
import { useTranslation } from 'react-i18next';

const CustomVendingSection = () => {
    const { t } = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const items = [
        { label: t('machines.CustomSizesLayouts'), image: Image1 },
        { label: t('machines.BrandingGraphics'), image: Image2 },
        { label: t('machines.SpecializedDispensing'), image: Image3 },
        { label: t('machines.UniqueStorage'), image: Image4 },
        { label: t('machines.SoftwareIntegration'), image: Image5 },
        { label: t('machines.CustomPayments'), image: Image6 },
    ];
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
                    {t('machines.CustomVendingtitle')}
                </Typography>
                <Typography variant="body1" className='bodyRegularText3' sx={{ color: '#C2C2C4', my: { xs: '8px', sm: '8px', md: '16px' } }}>
                    {t('machines.CustomVendingsubtitle')}
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
