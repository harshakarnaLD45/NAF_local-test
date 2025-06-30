import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import foodlabel1 from '../../../assets/About/Menu/foodlabels/label1.svg';
import foodlabel2 from '../../../assets/About/Menu/foodlabels/label2.svg';
import foodlabel3 from '../../../assets/About/Menu/foodlabels/label3.svg';
import foodlabel4 from '../../../assets/About/Menu/foodlabels/label4.svg';
import foodlabel5 from '../../../assets/About/Menu/foodlabels/label5.svg';
import foodlabel6 from '../../../assets/About/Menu/foodlabels/label6.svg';
import './Menu.css';


import { useTranslation } from 'react-i18next'

const Foodlabeling = () => {
    const { t } = useTranslation();

    const theme = useTheme();

    const foodlabels = [foodlabel1, foodlabel2, foodlabel3, foodlabel4, foodlabel5, foodlabel6];
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <Box className='foodlabeling-container' sx={{ mt: '200px', pl: '50px' }}>
            <Typography variant="h4" className='headings-h2' sx={{ color: '#FCFCFC', mb: isSmallScreen? '20px ': '50px' }}>
                {t('menu.FoodLabeling')}
            </Typography>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={
                    isSmallScreen ? 1.2 : isTablet ? 3.5 :
                                4.5
                }
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, // ✅ ensures autoplay resumes after swipe
                }}
                loop={true}
            >
                {foodlabels.map((foodlabel, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            // width: '95%',
                            flexShrink: 0,
                            position: 'relative',
                        }}
                    >
                        <Box
                            component="img"
                            src={foodlabel}
                            alt={`Food Label ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 2,
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Foodlabeling;
