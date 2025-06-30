import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography, IconButton } from '@mui/material';
import Menu1 from '../../../assets/About/Menu/Juni 2025.svg';
import Menu2 from '../../../assets/About/Menu/JulyMenu.jpg';
import downLoadicon from '../../../assets/About/Menu/downLoad-icon.svg';
import EastIcon from '@mui/icons-material/East';
// import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from 'react-i18next';
import './Menu.css';

const allergenImages = [Menu2, Menu2, Menu2, Menu2];

export default function MonthlyMenu() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const { t } = useTranslation();

    const handleDownload = () => {
        const swiper = swiperRef.current;
        const currentIndex = swiper?.realIndex || 0;
        const currentImage = allergenImages[currentIndex];

        const link = document.createElement('a');
        link.href = currentImage;
        link.download = `menu_${currentIndex + 1}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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

            {/* Swiper with hover-pause and download button */}
            <Box
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                sx={{ position: 'relative' }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1.7}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    loop
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
                                    cursor:'grab'
                                }}
                            />

                            {/* Download Button */}
                            <IconButton
                                onClick={handleDownload}
                                sx={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    height:'58px',
                                    width:'58px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: '#fff',
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
                                    // borderRadius: 2,
                                    // boxShadow: 2,
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
