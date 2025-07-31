import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Menu2 from '../../../assets/About/Menu/JulyMenu.jpg';
import Menu3 from '../../../assets/About/Menu/Agus-menu.png';
import Menu4  from '../../../assets/About/Menu/sept-menu.png';
import downLoadicon from '../../../assets/About/Menu/downLoad-icon.svg';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';
import './Menu.css';

const allergenImages = [ Menu2, Menu3, Menu4]; 

export   default function MonthlyMenu() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const { t } = useTranslation();

    const theme = useTheme();
   const handleDownload = (index) => {
    const currentImage = allergenImages[index];

    const link = document.createElement('a');
    link.href = currentImage;
    link.download = `menu${index + 1}.jpg`;
    document.body.appendChild(link);

    setTimeout(() => {
        link.click();
        document.body.removeChild(link);
    }, 0);
};


 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ position: 'relative', pr: 0 }} className="section-container">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', mb: 3 }}>
                <Typography
                    variant="h4"
                    className="headings-h2"
                    sx={{
                        color: '#FCFCFC',
                        width: '70%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                    }}
                >
                    {t('menu.monthlyMenu')}
                </Typography>

                <Box className="menu-btn-section">
                    <IconButton ref={prevRef} sx={{ mr: 1, color: '#FCFCFC' }}>
                        <EastIcon sx={{ rotate: '180deg' }} fontSize="small" />
                    </IconButton>
                    <IconButton ref={nextRef} sx={{ color: '#FCFCFC' }}>
                        <EastIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{ position: 'relative' }}
            >
                <Swiper
                    modules={[Navigation, Pagination,]}
                    spaceBetween={30}
                  slidesPerView={isSmallScreen ? 1.2 : 1.8}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}

                    pagination={{ clickable: true }}

                >
                    {allergenImages.map((src, index) => (
                        <SwiperSlide
                            key={index}
                            style={{

                                position: 'relative',
                            }}
                        >
                            <Box
                                component="img"
                                src={src}
                                alt={`Monthly menu ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: "auto",
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    cursor: 'grab'
                                }}
                            />

                            {/* Download Button */}
                            <IconButton
                                onClick={() => handleDownload(index)}
                                sx={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    height: '58px',
                                    width: '58px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={downLoadicon}

                                    sx={{
                                        width: '55%',
                                        height: '100%',
                                        cursor: 'pointer',
                                        
                                    }}
                                />
                            </IconButton>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}
