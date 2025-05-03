import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import Image1 from '../../assets/Machines/HoverImage1.png';
import Image2 from '../../assets/Machines/HoverImage2.png';
import Image3 from '../../assets/Machines/HoverImage3.png';
import Image4 from '../../assets/Machines/HoverImage4.png';
import Image5 from '../../assets/Machines/HoverImage5.png';
import Image6 from '../../assets/Machines/HoverImage6.png';
import { useTranslation } from 'react-i18next';

const CustomVendingSection = () => {
    const { t } = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const theme = useTheme();

    const items = [
        { label: t('machines.CustomSizesLayouts'), image: Image1 },
        { label: t('machines.BrandingGraphics'), image: Image2 },
        { label: t('machines.SpecializedDispensing'), image: Image3 },
        { label: t('machines.UniqueStorage'), image: Image4 },
        { label: t('machines.SoftwareIntegration'), image: Image5 },
        { label: t('machines.CustomPayments'), image: Image6 },
    ];
    return (
        <Box className='section-container solutuons-sec'>
            {/* Left Section */}
            <Box className='secltion-subsec'>
                <Typography variant="h3" className='headings-h2' sx={{ color: '#FCFCFC' }}>
                    {t('machines.CustomVendingtitle')}
                </Typography>
                <Typography variant="body1" className='bodyRegularText3' sx={{ color: '#C2C2C4', my: { xs: '8px', sm: '8px', md: '16px' } }}>
                    {t('machines.CustomVendingsubtitle')}
                </Typography>

                <AnimateButton />
            </Box>

            {/* Right Section */}
            <Box className='solution-card-sec'
                sx={{
                    display: "flex",
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
                            overflow: 'hidden',
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            cursor: 'pointer',
                            borderBottom: "none",
                            transition: 'all 0.3s ease-in-out',
                            [`@media (min-width:1301px)`]: {
                                height: hoveredIndex === index ? "100%" : "100%",
                                width: hoveredIndex === index ? '300px' : '80px',
                            },
                            [`@media (max-width:1300px)`]: {
                                height: hoveredIndex === index ? "300px" : 'auto',
                                borderBottom: "1px solid #666",
                            }
                        }}
                    >
                        {/* Hover image with overlay */}
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
                                height: "100%",
                                [`@media (max-width:1300px)`]: {
                                    height: "300px",
                                }
                            }}
                        >
                            {/* Dark Overlay */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.3)',  // black with 50% opacity
                                    zIndex: 2,
                                }}
                            />
                        </Box>


                        {/* Vertical Text */}
                        <Typography className='bodyRegularText3'
                            sx={{
                                textAlign: "center",
                                color: hoveredIndex === index ? "#fff" : "#ccc",
                                zIndex: 2,
                                py: 3,
                                px: 3,
                                transition: 'color 0.3s ease',
                                textShadow: hoveredIndex === index ? '0 0 6px rgba(255,255,255,0.5)' : 'none',
                                [`@media (min-width:1301px)`]: {
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                }
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
