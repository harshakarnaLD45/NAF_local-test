import React, { useEffect, useRef } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import pizza from '../../assets/1 (1).png';
import Cottoncandy from '../../assets/11.png';
import Icecream from '../../assets/11 (1).png';
import ArrowButton from '../../Componenets/CommonComponents/ArrowButton';
import pizzaSmall1 from '../../assets/A Mint Leaf Transparent Plant Vector - Mint Png Transparent PNG Image With Transparent Background png - Free PNG Images 1.png';
import pizzaSmall2 from '../../assets/Salami slices on white background_ 1.png';
import pizzaSmall3 from '../../assets/Sausage slices isolated on white background cutout_ 1.png';
import cottonSmall1 from '../../assets/A Mint Leaf Transparent Plant Vector - Mint Png Transparent PNG Image With Transparent Background png - Free PNG Images 1.png';
import cottonSmall2 from '../../assets/Salami slices on white background_ 1.png';
import cottonSmall3 from '../../assets/Sausage slices isolated on white background cutout_ 1.png';
import icecreamSmall1 from '../../assets/A Mint Leaf Transparent Plant Vector - Mint Png Transparent PNG Image With Transparent Background png - Free PNG Images 1.png';
import icecreamSmall2 from '../../assets/Salami slices on white background_ 1.png';
import icecreamSmall3 from '../../assets/Sausage slices isolated on white background cutout_ 1.png';
import hotSmall1 from '../../assets/A Mint Leaf Transparent Plant Vector - Mint Png Transparent PNG Image With Transparent Background png - Free PNG Images 1.png';
import hotSmall2 from '../../assets/Salami slices on white background_ 1.png';
import hotSmall3 from '../../assets/Sausage slices isolated on white background cutout_ 1.png';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';

gsap.registerPlugin(ScrollTrigger);

const vendingMachines = [
  {
    title: 'Pizza Vending Machine',
    image: pizza,
    path: '/pizza-vending-machine',
    smallImages: [pizzaSmall1, pizzaSmall2, pizzaSmall3],
  },
  {
    title: 'Cotton Candy Vending Machine',
    image: Cottoncandy,
    path: '/cotton-candy-vending-machine',
    smallImages: [cottonSmall1, cottonSmall2, cottonSmall3],
  },
  {
    title: 'Ice Cream Vending Machine',
    image: Icecream,
    path: '/ice-cream-vending-machine',
    smallImages: [icecreamSmall1, icecreamSmall2, icecreamSmall3],
  },
  {
    title: 'Hot Vending Machine',
    image: pizza,
    path: '/hot-vending-machine',
    smallImages: [hotSmall1, hotSmall2, hotSmall3],
  },
];

function Explore() {
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth scrolling initialization
    if (cardsContainerRef.current) {
      cardsContainerRef.current.style.scrollBehavior = 'smooth';
    }

    // Check if screen width is greater than 1024px
    const isLargeScreen = window.matchMedia('(min-width: 1025px)').matches;
    if (isLargeScreen) {
      const cards = cardsContainerRef.current.children;
      gsap.fromTo(
        cards,
        { y: 100, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.8,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 80%',
            end: 'bottom 90%',
            scrub: true,
            once: false,
          },
        }
      );
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const smallImages = card.querySelectorAll('.smallImage');
        const image1 = smallImages[0];
        const image2 = smallImages[1];
        const image3 = smallImages[2];
        const tl = gsap.timeline({ paused: true });
        tl
          .fromTo(image1,
            { y: 200, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
          )
          .fromTo(image2,
            { x: -150, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3'
          )
          .fromTo(image3,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3'
          );
        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });
    }
    return () => {
      if (isLargeScreen) {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - cardsContainerRef.current.offsetLeft);
    setScrollLeft(cardsContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity here
    cardsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - cardsContainerRef.current.offsetLeft);
    setScrollLeft(cardsContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - cardsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity here
    cardsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleArrowClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box>
        <Box className='explore-container section-container'>
          <Box>
            {/* <Typography variant='h2' className='headings-h2 main-sub-container1 main-sub-containerss' sx={{ color: '#FCFCFC' }}>
              Explore Our Vending Machines
            </Typography> */}
            <div className="main-sub-container1 main-sub-containerss">
              <ScrollMaskText text="Explore Our Vending Machines" />
            </div>
            <Typography variant="body1" className='bodyRegularText3 main-sub-container1 main-sub-containerss' sx={{ color: '#C2C2C4' }}>
              Our smart vending machines offer convenience, reliability, and customization with cutting-edge technology and a user-friendly design to boost efficiency and profits.
            </Typography>
          </Box>
          <Box sx={{ alignSelf: 'flex-end' }} className="explorebutton">
            <AnimateButton />
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: isDragging ? 0 : {
              xs: '15px',
              sm: '20px',
              md: '30px',
              lg: '50px',
            },
          }}
        >
          <Box
            ref={cardsContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              paddingBottom: '16px',
              gap: 2,
              userSelect: 'none',
              transition: 'padding-left 0.3s ease',
              cursor: 'grab',
              scrollBehavior: 'smooth', // Enable smooth scrolling
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {vendingMachines.map((machine, index) => (
              <Card
                className='carddata'
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                sx={{
                  flexShrink: 0,
                  width: { xs: '280px', sm: '320px', md: '500px' },
                  height: { xs: '380px', sm: '420px', md: '650px' },
                  backgroundColor: '#262626',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  py: { xs: 2, md: 4 },
                  scrollSnapAlign: 'start',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover .cardimage': {
                    transform: { xs: 'none', lg: 'scale(1.15)' }, // Hover scale only above 1024px
                  },
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: '70%' }}>
                  <CardMedia
                    className='cardimage'
                    component="img"
                    image={machine.image}
                    alt={machine.title}
                    sx={{
                      width: '100%',
                      height: { xs: '240px', sm: '280px', md: '465px' },
                      objectFit: 'contain',
                      transition: 'transform 0.4s ease-in-out',
                      paddingTop: '4rem'
                    }}
                  />
                  <Box
                    className="smallImages"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <CardMedia
                      className="smallImage smallimgesthree"
                      component="img"
                      image={machine.smallImages[0]}
                      sx={{
                        position: 'absolute',
                        left: '0px',
                        bottom: '-70px',
                        width: '155px',
                        height: '157px',
                        transform: 'rotate(-27deg)',
                      }}
                    />
                    <CardMedia
                      className="smallImage"
                      component="img"
                      image={machine.smallImages[1]}
                      sx={{
                        position: 'absolute',
                        left: '0px',
                        top: '20px',
                        width: '107.562px',
                        height: '88.539px',
                      }}
                    />
                    <CardMedia
                      className="smallImage"
                      component="img"
                      image={machine.smallImages[2]}
                      sx={{
                        position: 'absolute',
                        right: '0px',
                        top: '200px',
                        width: '121.839px',
                        height: '120.372px',
                      }}
                    />
                  </Box>
                </Box>
                <CardContent
                  className='cardtexts'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    paddingBottom: '0px !important',
                  }}
                >
                  <Typography
                    variant="h6"
                    className=' bodyMediumText1'
                    sx={{
                      color: '#FCFCFC',
                      fontSize: { xs: '20px', sm: '24px', md: '28px' },
                      flexGrow: 1
                    }}
                  >
                    {machine.title}
                  </Typography>
                  <ArrowButton onClick={() => handleArrowClick(machine.path)} />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Explore;