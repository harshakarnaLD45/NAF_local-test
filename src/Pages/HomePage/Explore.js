import React, { useEffect, useState } from 'react';
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
      {
        src: Machine7SmallIcon1, positions: {
          1500: { top: '40px', left: '20px' },
          900: { top: '40px', left: '15px' },
          400: { top: '20px', left: '10px' },
          0: { top: '20px', left: '7px' }
        }
      },
      {
        src: Machine7SmallIcon2, positions: {
          1500: { top: '420px', left: '400px' },
          900: { top: '300px', left: '370px' },
          400: { top: '250px', left: '240px' },
          0: { top: '200px', left: '150px' }
        }
      },
      {
        src: Machine7SmallIcon3, positions: {
          1500: { top: '380px', left: '0px' },
          900: { top: '330px', left: '0px' },
          400: { top: '200px', left: '0px' },
          0: { top: '220px', left: '0px' }
        }
      },
      {
        src: Machine7SmallIcon4, positions: {
          1500: { top: '50px', left: '420px' },
          900: { top: '37px', left: '350px' },
          400: { top: '25px', left: '250px' },
          0: { top: '17px', left: '180px' }
        }
      },
    ]
  },
  {
    img: Machine1,
    name: 'Pizza Machine',
    button: 'Explore Pizza',
    icons: [
      {
        src: MachineSmallIcon1, positions: {
          1500: { top: '40px', left: '35px' },
          900: { top: '40px', left: '35px' },
          400: { top: '20px', left: '17px' },
          0: { top: '14px', left: '10px' }
        }
      },
      {
        src: MachineSmallIcon2, positions: {
          1500: { top: '260px', left: '40px' },
          900: { top: '265px', left: '35px' },
          400: { top: '150px', left: '20px' },
          0: { top: '130px', left: '10px' }
        }
      },
      {
        src: MachineSmallIcon3, positions: {
          1500: { top: '480px', left: '0px' },
          900: { top: '420px', left: '0px' },
          400: { top: '250px', left: '0px' },
          0: { top: '200px', left: '0px' }
        }
      },
      {
        src: MachineSmallIcon4, positions: {
          1500: { top: '50px', left: '420px' },
          900: { top: '50px', left: '370px' },
          400: { top: '25px', left: '240px' },
          0: { top: '15px', left: '175px' }
        }
      },
      {
        src: MachineSmallIcon5, positions: {
          1500: { top: '270px', left: '440px' },
          900: { top: '250px', left: '375px' },
          400: { top: '120px', left: '250px' },
          0: { top: '70px', left: '150px' }
        }
      },
      {
        src: MachineSmallIcon6, positions: {
          1500: { top: '460px', left: '390px' },
          900: { top: '400px', left: '340px' },
          400: { top: '240px', left: '195px' },
          0: { top: '180px', left: '200px' }
        }
      }
    ]
  },
  {
    img: Machine3, name: 'Soft Ice Cream Machine', button: 'Explore Drinks', icons: [
      {
        src: Machine3SmallIcon1, positions: {
          1500: { top: '60px', left: '20px' },
          900: { top: '60px', left: '20px' },
          400: { top: '10px', left: '10px' },
          0: { top: '0px', left: '5px' }
        }
      },
      {
        src: Machine3SmallIcon2, positions: {
          1500: { top: '340px', left: '440px' },
          900: { top: '280px', left: '380px' },
          400: { top: '150px', left: '260px' },
          0: { top: '120px', left: '200px' }
        }
      },
      {
        src: Machine3SmallIcon3, positions: {
          1500: { top: '300px', left: '30px' },
          900: { top: '280px', left: '25px' },
          400: { top: '180px', left: '10px' },
          0: { top: '150px', left: '0px' }
        }
      },
      {
        src: Machine3SmallIcon4, positions: {
          1500: { top: '540px', left: '400px' },
          900: { top: '480px', left: '370px' },
          400: { top: '280px', left: '245px' },
          0: { top: '225px', left: '180px' }
        }
      },
      {
        src: Machine3SmallIcon5, positions: {
          1500: { top: '40px', left: '250px' },
          900: { top: '40px', left: '200px' },
          400: { top: '20px', left: '125px' },
          0: { top: '0px', left: '110px' }
        }
      }
    ]
  },
  {
    img: Machine4, name: 'Cotton Candy Machine', button: 'Explore Snacks', icons: [
      {
        src: Machine4SmallIcon1, positions: {
          1500: { top: '360px', left: '0px' },
          900: { top: '350px', left: '0px' },
          400: { top: '160px', left: '0px' },
          0: { top: '125px', left: '0px' }
        }
      },
      {
        src: Machine4SmallIcon2, positions: {
          1500: { top: '60px', left: '465px' },
          900: { top: '60px', left: '420px' },
          400: { top: '40px', left: '275px' },
          0: { top: '15px', left: '200px' }
        }
      },
      {
        src: Machine4SmallIcon3, positions: {
          1500: { top: '460px', left: '450px' },
          900: { top: '425px', left: '380px' },
          400: { top: '260px', left: '250px' },
          0: { top: '200px', left: '200px' }
        }
      },
      {
        src: Machine3SmallIcon1, positions: {
          1500: { top: '60px', left: '20px' },
          900: { top: '60px', left: '20px' },
          400: { top: '20px', left: '0px' },
          0: { top: '20px', left: '0px' }
        }
      },
    ]
  },
  {
    img: Machine5, name: 'Beer Machine', button: 'Explore Ice Cream', icons: [
      {
        src: Machine5SmallIcon1, positions: {
          1500: { top: '360px', left: '290px' },
          900: { top: '270px', left: '217px' },
          400: { top: '180px', left: '145px' },
          0: { top: '125px', left: '101px' }
        }
      },
      {
        src: Machine5SmallIcon2, positions: {
          1500: { top: '360px', left: '290px' },
          900: { top: '270px', left: '217px' },
          400: { top: '180px', left: '145px' },
          0: { top: '125px', left: '101px' }
        }
      },
      {
        src: Machine5SmallIcon3, positions: {
          1500: { top: '360px', left: '290px' },
          900: { top: '270px', left: '217px' },
          400: { top: '180px', left: '145px' },
          0: { top: '125px', left: '101px' }
        }
      },
      {
        src: Machine5SmallIcon4, positions: {
          1500: { top: '360px', left: '290px' },
          900: { top: '270px', left: '217px' },
          400: { top: '180px', left: '145px' },
          0: { top: '125px', left: '101px' }
        }
      },
    ]
  },
  {
    img: Machine6, name: 'Return Machine', button: 'Return Machine', icons: [

    ]
  }, {
    img: Machine2, name: 'Fries Machine', button: 'Explore Cotton',
    icons: [
      {
        src: Machine2SmallIcon1, positions: {
          1500: { top: '200px', left: '10px' },
          900: { top: '200px', left: '10px' },
          400: { top: '100px', left: '10px' },
          0: { top: '70px', left: '0px' }
        }
      },
      {
        src: Machine2SmallIcon2, positions: {
          1500: { top: '500px', left: '5px' },
          900: { top: '480px', left: '5px' },
          400: { top: '320px', left: '0px' },
          0: { top: '250px', left: '0px' }
        }
      },
      {
        src: Machine2SmallIcon3, positions: {
          1500: { top: '50px', left: '450px' },
          900: { top: '50px', left: '385px' },
          400: { top: '25px', left: '260px' },
          0: { top: '15px', left: '190px' }
        }
      },
      {
        src: Machine2SmallIcon3, positions: {
          1500: { top: '300px', left: '440px' },
          900: { top: '270px', left: '385px' },
          400: { top: '150px', left: '250px' },
          0: { top: '125px', left: '180px' }
        }
      },
      {
        src: Machine2SmallIcon1, positions: {
          1500: { top: '460px', left: '460px' },
          900: { top: '410px', left: '400px' },
          400: { top: '250px', left: '270px' },
          0: { top: '200px', left: '185px' }
        }
      },
      {
        src: Machine2SmallIcon4, positions: {
          1500: { top: '580px', left: '360px' },
          900: { top: '530px', left: '310px' },
          400: { top: '355px', left: '200px' },
          0: { top: '275px', left: '130px' }
        }
      }
    ]
  },
];

function Explore() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getIconPosition = (positions) => {
    const width = window.innerWidth;
    if (width >= 1500) return positions['1500'];
    if (width > 900) return positions['900'];
    if (width > 600) return positions['400'];
    return positions['0'];
  };

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
          <Box sx={{ marginTop: { xs: '8px', sm: '8px', md: '16px' } }} data-cursor="hover" className='main-sub-container1 main-sub-containerss'>
            <ScrollMaskText text={t('Home.exploreSubTitle')} />
          </Box>
        </Box>
        <Box sx={{ alignSelf: 'flex-end' }} className="explorebutton">
          <AnimateButton route='/machine' />
        </Box>
      </Box>

      {/* Swiper Machines */}
      <Box className='machine-sec-homepage'>
        < Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={16}
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
                <Box sx={{
                  height: { xs: 320, sm: 400, md: 575, xl: 650 },
                }}>
                  {/* Background icons on hover */}
                  {/* <Box
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
                    {machine.icons.map((Icon, i) => {
                      const { top, left } = getIconPosition(Icon.positions);
                      return (
                        <Box
                          key={i}
                          sx={{
                            position: 'absolute',
                            top,
                            left,
                            width: { xs: 10, sm: 20, md: 30 },
                            height: { xs: 10, sm: 20, md: 30 },
                            animation: 'floatIcon 4s ease-in-out infinite',
                            svg: { width: '100%', height: '100%' },
                          }}
                        >
                          <img src={Icon.src} alt='icons' />
                        </Box>
                      )
                    })}
                  </Box> */}

                  {/* Machine image */}
                  <Box
                    component="img"
                    src={machine.img}
                    alt={machine.name}
                    sx={{
                      // height: { xs: 250, sm: 300, md: 450, xl: 500 },
                      width: { xs: 200, sm: 250, md: 350, xl: 400 },
                      p: { xs: 3, sm: 4, md: 5 },
                      transition: 'transform 0.3s ease',
                      cursor: 'grab',
                      zIndex: 2,
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
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
    </Box >
  );
}

export default Explore;
