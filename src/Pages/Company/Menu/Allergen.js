import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography, IconButton } from '@mui/material';
import Allergen1 from '../../../assets/About/Alergen1.svg'
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';

const allergenImages = [Allergen1, Allergen1, Allergen1];

export default function Allergen() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { t } = useTranslation();

    return (
        <Box sx={{ position: 'relative',pr: 0 }} className='section-container' >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" className='headings-h2'>
                    {t('menu.Allergene')}
                </Typography>

                {/* Arrows at the Top-Right */}
                <Box>
                    <IconButton ref={prevRef} sx={{ mr: 1, color: '#FCFCFC' }}>
                        <EastIcon sx={{ rotate: '180deg' }} fontSize="small" />
                    </IconButton>
                    <IconButton ref={nextRef} sx={{ color: '#FCFCFC' }}>
                        <EastIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView="auto"
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                loop
            >
                {allergenImages.map((src, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: 'auto', maxWidth: '1200px' }} // 👈 or set a fixed width like '250px'
                    >
                        <Box
                            component="img"
                            src={src}
                            alt={`Allergen chart ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 2,
                                boxShadow: 2,
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </Box >
    );
}