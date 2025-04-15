import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import Machine1 from '../../assets/Home/Machine1.png';
import Machine2 from '../../assets/Home/Machine2.png';
import Machine3 from '../../assets/Home/Machine3.png';
import Machine4 from '../../assets/Home/Machine4.png';
import Machine5 from '../../assets/Home/Machine5.png';
import Machine6 from '../../assets/Home/Machine6.png';
import Machine7 from '../../assets/Home/Machine7.png';

import { useTranslation } from 'react-i18next';
import ScrollMaskHeadings from '../../Componenets/CommonComponents/ScrollMaskHeadings';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import ArrowButton from '../../Componenets/CommonComponents/ArrowButton';

const machines = [
  { img: Machine7, name: 'Gourmet Machine', button: 'Explore Combo' },
  { img: Machine1, name: 'Pizza Machine', button: 'Explore Pizza' },
  { img: Machine2, name: 'Fries Machine', button: 'Explore Cotton' },
  { img: Machine3, name: 'Soft Ice Cream Machine', button: 'Explore Drinks' },
  { img: Machine4, name: 'Cotton Candy Machine', button: 'Explore Snacks' },
  { img: Machine5, name: 'Beer Machine', button: 'Explore Ice Cream' },
  { img: Machine6, name: 'Return Machine', button: 'Return Machine' },
];

function Explore() {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box className='explore-container section-container'>
        <Box>
          <div data-cursor="hover" className="main-sub-container1 main-sub-containerss">
            <ScrollMaskHeadings text={t('Home.exploreTitle')} />
          </div>
          <div data-cursor="hover" className='main-sub-container1 main-sub-containerss'>
            <ScrollMaskText text={t('Home.exploreSubTitle')} />
          </div>
        </Box>
        <Box sx={{ alignSelf: 'flex-end' }} className="explorebutton">
          <AnimateButton route='machine' />
        </Box>
      </Box>

      {/* Swiper Machines */}
      <Box className='machine-sec-homepage'>
        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={30}
          slidesPerView={'auto'}
          freeMode={true}
          mousewheel={true}
          grabCursor={true}
        >
          {machines.map((machine, index) => (
            <SwiperSlide key={index} style={{ width: 'auto', marginRight: "0px !important" }}>
              <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                borderRadius: '12px',
                background: '#262626',
                p: { xs: 1, sm: 2, md: 2 },
                cursor: 'grab'
              }}>
                <Box
                  component="img"
                  src={machine.img}
                  alt={machine.name}
                  sx={{
                    height: { xs: 250, sm: 300, md: 400 },
                    width: { xs: 200, sm: 250, md: 300 },
                    cursor: 'grab',
                    p: { xs: 3, sm: 4, md: 5 },
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    mt: 2,
                    px: 1,
                    gap: 2,
                  }}
                >
                  <Box className='bodyMediumText1' sx={{ color: '#fff' }}>
                    {machine.name}
                  </Box>
                  <ArrowButton />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Explore;
