import React, { useEffect, useRef, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import gsap from 'gsap';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import SustainabilityBgImg from '../../assets/Home/sustainablity-background.svg'
import { SustainabilityIcon1, SustainabilityIcon2, SustainabilityIcon3, SustainabilityIcon4, SustainabilityIcon5 } from '../../Componenets/CustomIcons';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';
import ScrollMaskHeadings from '../../Componenets/CommonComponents/ScrollMaskHeadings';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Sustainability = () => {
    const { t } = useTranslation();
    const { lang } = useParams(); 

    const features = [
        { icon: SustainabilityIcon1, text: t('Home.sustainabilitybenifits1') },
        { icon: SustainabilityIcon2, text: t('Home.sustainabilitybenifits2') },
        { icon: SustainabilityIcon3, text: t('Home.sustainabilitybenifits3') },
        { icon: SustainabilityIcon4, text: t('Home.sustainabilitybenifits4') },
        { icon: SustainabilityIcon5, text: t('Home.sustainabilitybenifits5') },
    ];

    const scrollContainerRef = useRef();
    const leftSectionRef = useRef();
    const [leftHeight, setLeftHeight] = useState(400);

    useEffect(() => {
        if (leftSectionRef.current) {
            const resizeObserver = new ResizeObserver(() => {
                requestAnimationFrame(() => {
                    if (leftSectionRef.current) {
                        setLeftHeight(leftSectionRef.current.offsetHeight);
                    }
                });
            });

            resizeObserver.observe(leftSectionRef.current);
            return () => resizeObserver.disconnect();
        }
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = scrollContainerRef.current;

            // Get height of a single loop
            const singleLoopHeight = container.scrollHeight / 2;

            // Animate upward scrolling
            gsap.to(container, {
                y: `-=${singleLoopHeight}`,
                ease: 'none',
                duration: 40,
                repeat: -1,
                modifiers: {
                    y: gsap.utils.unitize((y) => parseFloat(y) % singleLoopHeight),
                },
            });
        });

        return () => ctx.revert();
    }, []);

    // Duplicate the features list to simulate infinite scroll
    const doubledFeatures = [...features, ...features, ...features, ...features];

    return (
        <Box className='section-container'
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: "space-between",
                // minHeight: 400,
                backgroundImage: `url(${SustainabilityBgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gap: { md: 6 },
                overflow: 'hidden',
            }}
        >
            {/* Left Side */}
            <Box ref={leftSectionRef} className='sustain-sec' sx={{
                flex: 1, py: { xs: 5, sm: 8, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>

                <List>
                    <ListItem sx={{ p: 0, alignItems: 'center' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#444',
                                mr: 1.5, // Spacing between dot and text
                            }}
                            className='bodyRegularText4'
                        />
                        <ListItemText
                            primary={t('Home.sustainability')}
                            sx={{ '& .MuiListItemText-primary': { color: '#444', fontSize: '16px', fontWeight: 400 } }}
                        />
                    </ListItem>
                </List>

                {/* <Typography variant="h3" className='headings-h2' color='#1A1A1A' gutterBottom>
                    Sustainability & Technology
                </Typography> */}
                <ScrollMaskHeadings text={t('Home.sustainabilityHeading')} textColor='#1A1A1A' />
                {/* <Typography variant="body1" className='bodyRegularText3' sx={{ mb: 2 }}>
                    NAF Germany is committed to providing innovative and ecological vending solutions that
                    benefit both our customers and the environment. We leverage cutting-edge technology and
                    sustainable practices to create a better future.
                </Typography> */}
                <Box sx={{ mb: 2, mt: { xs: '8px', sm: '8px', md: '16px' } }}>
                    <ScrollMaskText text={t('Home.sustainabilityText')} textColor='#444'
                    />
                </Box>
                <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} getBtnColor='#161616' route={`/${lang}/contact`} />
            </Box>

            {/* Right Side: Infinite Scroll */}
            <Box
                sx={{
                    flex: 1,
                    overflow: 'hidden',
                    position: 'relative',
                    height: { xs: 200, sm: 200, md: leftHeight },
                    maxWidth: 800,
                }}
            >
                <Box ref={scrollContainerRef} sx={{ height: { xs: 400, sm: 400, md: leftHeight } }}>
                    {doubledFeatures.map((item, i) => (
                        <Box
                            key={`feature-${i}`}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#B3F5A3',
                                borderRadius: 150,
                                p: 1,
                                mb: { xs: 1, sm: 2, md: 3 },
                                gap: { xs: 2, sm: 3, md: 6 },
                            }}
                        >
                            <Box className='sustain-icons'>
                                <item.icon className="sustainability-icon" />
                            </Box>
                            <Typography variant="body1" className='bodyRegularText3' color='#444'>
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Sustainability;
