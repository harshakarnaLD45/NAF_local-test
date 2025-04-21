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
import { useNavigate } from 'react-router-dom';
import MachineSmallIcon1 from '../../assets/Home/MachineIcons/Machine1Icon1.svg'
import MachineSmallIcon2 from '../../assets/Home/MachineIcons/Machine1Icon2.svg'
import MachineSmallIcon3 from '../../assets/Home/MachineIcons/Machine1Icon3.svg'
import MachineSmallIcon4 from '../../assets/Home/MachineIcons/Machine1Icon4.svg'
import MachineSmallIcon5 from '../../assets/Home/MachineIcons/Machine1Icon5.svg'
import MachineSmallIcon6 from '../../assets/Home/MachineIcons/Machine1Icon6.svg'

import Machine2SmallIcon1 from '../../assets/Home/MachineIcons/Machine2Icon1.svg'
import Machine2SmallIcon2 from '../../assets/Home/MachineIcons/Machine2Icon2.svg'
import Machine2SmallIcon3 from '../../assets/Home/MachineIcons/Machine2Icon3.svg'
import Machine2SmallIcon4 from '../../assets/Home/MachineIcons/Machine2Icon4.svg'

import Machine3SmallIcon1 from '../../assets/Home/MachineIcons/Machine3Icon1.svg'
import Machine3SmallIcon2 from '../../assets/Home/MachineIcons/Machine3Icon2.svg'
import Machine3SmallIcon3 from '../../assets/Home/MachineIcons/Machine3Icon3.svg'
import Machine3SmallIcon4 from '../../assets/Home/MachineIcons/Machine3Icon4.svg'
import Machine3SmallIcon5 from '../../assets/Home/MachineIcons/Machine3Icon5.svg'

import Machine4SmallIcon1 from '../../assets/Home/MachineIcons/Machine4Icon1.svg'
import Machine4SmallIcon2 from '../../assets/Home/MachineIcons/Machine4Icon2.svg'
import Machine4SmallIcon3 from '../../assets/Home/MachineIcons/Machine4Icon3.svg'

import Machine5SmallIcon1 from '../../assets/Home/MachineIcons/Machine5Icon1.svg'
import Machine5SmallIcon2 from '../../assets/Home/MachineIcons/Machine5Icon2.svg'
import Machine5SmallIcon3 from '../../assets/Home/MachineIcons/Machine5Icon3.svg'
import Machine5SmallIcon4 from '../../assets/Home/MachineIcons/Machine5Icon4.svg'

import Machine7SmallIcon1 from '../../assets/Home/MachineIcons/Machine7Icon1.svg'
import Machine7SmallIcon2 from '../../assets/Home/MachineIcons/Machine7Icon2.svg'
import Machine7SmallIcon3 from '../../assets/Home/MachineIcons/Machine7Icon3.svg'
import Machine7SmallIcon4 from '../../assets/Home/MachineIcons/Machine7Icon4.svg'

const machines = [
  {
    img: Machine7,
    name: 'Gourmet Machine',
    button: 'Explore Combo',
    icons: [
      { src: Machine7SmallIcon1, top: '40px', left: '20px' },
      { src: Machine7SmallIcon2, top: '300px', left: '0px' },
      { src: Machine7SmallIcon3, top: '80px', left: '370px' },
      { src: Machine7SmallIcon4, top: '350px', left: '340px' },
    ]
  },
  {
    img: Machine1,
    name: 'Pizza Machine',
    button: 'Explore Pizza',
    icons: [
      { src: MachineSmallIcon1, top: '40px', left: '35px' },
      { src: MachineSmallIcon2, top: '220px', left: '40px' },
      { src: MachineSmallIcon3, top: '380px', left: '0px' },
      { src: MachineSmallIcon4, top: '50px', left: '320px' },
      { src: MachineSmallIcon5, top: '200px', left: '340px' },
      { src: MachineSmallIcon6, top: '360px', left: '290px' }
    ]
  }, {
    img: Machine2, name: 'Fries Machine', button: 'Explore Cotton',
    icons: [
      { src: Machine2SmallIcon1, top: '150px', left: '10px' },
      { src: Machine2SmallIcon2, top: '420px', left: '0px' },
      { src: Machine2SmallIcon3, top: '40px', left: '340px' },
      { src: Machine2SmallIcon3, top: '250px', left: '340px' },
      { src: Machine2SmallIcon1, top: '370px', left: '350px' },
      { src: Machine2SmallIcon4, top: '470px', left: '270px' }
    ]
  },
  {
    img: Machine3, name: 'Soft Ice Cream Machine', button: 'Explore Drinks', icons: [
      { src: Machine3SmallIcon1, top: '10px', left: '10px' },
      { src: Machine3SmallIcon2, top: '250px', left: '330px' },
      { src: Machine3SmallIcon3, top: '340px', left: '40px' },
      { src: Machine3SmallIcon4, top: '430px', left: '320px' },
      { src: Machine3SmallIcon5, top: '20px', left: '160px' }
    ]
  },
  {
    img: Machine4, name: 'Cotton Candy Machine', button: 'Explore Snacks', icons: [
      { src: Machine3SmallIcon1, top: '40px', left: '20px' },
      { src: Machine4SmallIcon1, top: '300px', left: '0px' },
      { src: Machine4SmallIcon2, top: '80px', left: '370px' },
      { src: Machine4SmallIcon3, top: '350px', left: '340px' },
    ]
  },
  {
    img: Machine5, name: 'Beer Machine', button: 'Explore Ice Cream', icons: [
      { src: Machine5SmallIcon1, top: '40px', left: '20px' },
      { src: Machine5SmallIcon2, top: '300px', left: '0px' },
      { src: Machine5SmallIcon3, top: '80px', left: '370px' },
      { src: Machine5SmallIcon4, top: '350px', left: '340px' },
    ]
  },
  {
    img: Machine6, name: 'Return Machine', button: 'Return Machine', icons: [

    ]
  },
];

function Explore() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleMachineClick = (machineName) => {
    navigate('/machine', { state: { selectedMachine: machineName } });
  };

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
          mousewheel={false}
          grabCursor={true}
        >
          {machines.map((machine, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <Box
                className="machine-card"
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '12px',
                  background: '#262626',
                  p: { xs: 1, sm: 2, md: 4 },
                  cursor: 'grab',
                  overflow: 'hidden',
                }}
              >
                {/* Background icons on hover */}
                <Box
                  className="icon-background"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                >
                  {machine.icons.map((Icon, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: 'absolute',
                        top: Icon.top,
                        left: Icon.left,
                        width: 30,
                        height: 30,
                        animation: 'floatIcon 4s ease-in-out infinite',
                        svg: { width: '100%', height: '100%' },
                      }}
                    >
                      <img src={Icon.src} alt='icons' />
                    </Box>
                  ))}
                </Box>

                {/* Machine image */}
                <Box
                  component="img"
                  src={machine.img}
                  alt={machine.name}
                  sx={{
                    height: { xs: 250, sm: 300, md: 400 },
                    width: { xs: 200, sm: 250, md: 300 },
                    p: { xs: 3, sm: 4, md: 5 },
                    transition: 'transform 0.3s ease',
                    cursor: 'grab',
                    zIndex: 2,
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />

                {/* Name and button */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    mt: 2,
                    px: 1,
                    gap: 2,
                    zIndex: 2,
                  }}
                >
                  <Box className='bodyMediumText2' sx={{ color: '#fff' }}>
                    {machine.name}
                  </Box>
                  <ArrowButton onClick={() => handleMachineClick(machine.name)} />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Hover + Float Animation Styles */}
      <style>
        {`
    .machine-card:hover .icon-background {
      opacity: 1;
    }

    @keyframes floatIcon {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
  `}
      </style>
    </Box>
  );
}

export default Explore;
