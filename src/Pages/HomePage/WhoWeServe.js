import { Box, Typography } from '@mui/material'
import React from 'react'
import hotel from '../../assets/Home/Serve1.png';
import gasStation from '../../assets/Home/Serve3.png';
import school from '../../assets/Home/Serve5.png';
import office from '../../assets/Home/Serve2.png';
import events from '../../assets/Home/Serve4.png';
import publicPic from '../../assets/Home/Serve6.png';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';
import ScrollMaskHeadings from '../../Componenets/CommonComponents/ScrollMaskHeadings';
import { useTranslation } from 'react-i18next';

const WhoWeServe = () => {
    const { t } = useTranslation();
    const serveCards1 = [
        {
            id: 1,
            title: "Hotels & Restaurants",
            image: hotel,
        },
        {
            id: 2,
            title: "Gas Stations & Roadside Restaurants",
            image: gasStation,
        },
        {
            id: 3,
            title: "Schools & Universities",
            image: school,
        },

    ];
    const serveCards2 = [
        {
            id: 1,
            title: "Companies & Factories",
            image: office,
        },
        {
            id: 2,
            title: "Events & Festivals",
            image: events,
        },
        {
            id: 3,
            title: "Municipalities & Public Authorities",
            image: publicPic,
        },
    ];

    return (
        <div className='whoweServe-sec section-container'>
            <Box sx={{ position: 'relative' }} className='whoweServe-left-sec'>
                <Box sx={{
                    position: 'sticky', top: '100px',
                    zIndex: 10,
                }}>
                    <ScrollMaskHeadings text={t('Home.serveTitle')} />
                    <Box className='whoweServe-left-sec2-text' sx={{ mt: { xs: '8px', sm: '8px', md: '16px' } }}>
                        <ScrollMaskText text={t('Home.serveSubTitle')} />
                    </Box>
                </Box>
            </Box>
            <Box className='whoweServe-right-sec'>
                {/* Desktop/Tablet View (unchanged) */}
                <Box
                    className='whoweServe-right-sec1'
                    sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: '24px' }}
                >
                    {serveCards1.map((card) => (
                        <Box
                            key={card.id}
                            sx={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: {
                                    sm: '85%',
                                    md: '89%',
                                    xl: '91%',
                                },
                                aspectRatio: '1 / 1',
                                alignItems: 'end',
                                display: 'flex',
                                borderRadius: '24px',
                                padding: '30px 20px',
                            }}
                        >
                            <Typography
                                variant="h1"
                                color="#FCFCFC"
                                className="bodyMediumText1 whoweServe-right-sec1-text"
                            >
                                {card.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box
                    className='whoweServe-right-sec1 whoweServe-right-sec2'
                    sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: '24px' }}
                >
                    {serveCards2.map((card) => (
                        <Box
                            key={card.id}
                            sx={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: {
                                    sm: '85%',
                                    md: '89%',
                                    xl: '91%',
                                },
                                aspectRatio: '1 / 1',
                                alignItems: 'end',
                                display: 'flex',
                                borderRadius: '24px',
                                padding: '30px 20px',
                            }}
                        >
                            <Typography
                                variant="h1"
                                color="#FCFCFC"
                                className="bodyMediumText1 whoweServe-right-sec1-text"
                            >
                                {card.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Mobile View (scrollable slides) */}
                <Box
                    className='whoweServe-mobile-slides'
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        // overflowX: 'scroll',
                        // scrollSnapType: 'x mandatory',
                        gap: '20px',
                        paddingBottom: '16px',
                    }}
                >
                    {[serveCards1, serveCards2].map((group, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: '90%',
                            }}
                        >
                            {group.map((card) => (
                                <Box
                                    key={card.id}
                                    sx={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '90%',
                                        aspectRatio: '1 / 1',
                                        alignItems: 'end',
                                        display: 'flex',
                                        borderRadius: '24px',
                                        padding: '30px 20px',
                                        mb: '20px',
                                    }}
                                >
                                    <Typography
                                        variant="h1"
                                        color="#FCFCFC"
                                        className="bodyMediumText1 whoweServe-right-sec1-text"
                                    >
                                        {card.title}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>

        </div>
    )
}

export default WhoWeServe