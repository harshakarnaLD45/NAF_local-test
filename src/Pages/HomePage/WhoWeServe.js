import { Box, Typography } from '@mui/material'
import React from 'react'
import hotel from '../../assets/Home/Hotels-&-restaurants.avif';
import gasStation from '../../assets/Home/Gas-stations-&-rest-areas.avif';
import school from '../../assets/Home/Schools-&-universities.avif';
import office from '../../assets/Home/Companies-&-factories.avif';
import events from '../../assets/Home/Events-&-festivals.avif';
import publicPic from '../../assets/Home/Municipalities-&-public-authorities.avif';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';
import ScrollMaskHeadings from '../../Componenets/CommonComponents/ScrollMaskHeadings';
import { useTranslation } from 'react-i18next';

const WhoWeServe = () => {
    const { t } = useTranslation();
    const serveCards1 = [
        {
            id: 1,
            title: t('Home.hotelsRestaurants'),
            image: hotel,
            alt: 'NAF  Vending at Hotels & Restaurants: 24/7 Guest Convenience.',
        },
        {
            id: 2,
            title: t('Home.gasRoadsideRestaurants'),
            image: gasStation,
            alt: 'NAF  Vending at Gas Stations & Rest Areas: Refreshments On the Go.',
        },
        {
            id: 3,
            title: t('Home.schoolsUniversities'),
            image: school,
            alt: "NAF  Vending for Schools & Universities: Fueling Students' Success.",
        },
    ];
    const serveCards2 = [
        {
            id: 1,
            title: t('Home.companiesFactories'),
            image: office,
            alt: 'NAF  Vending for Companies & Factories: Convenient Employee Refreshments.',
        },
        {
            id: 2,
            title: t('Home.eventsFestivals'),
            image: events,
            alt: 'NAF  Vending at Events & Festivals: Refreshments for Every Occasion.',
        },
        {
            id: 3,
            title: t('Home.municipalitiesPublic'),
            image: publicPic,
            alt: 'NAF  Vending for Municipalities & Public Authorities: Accessible to All.',
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
            <Box className='whoweServe-right-sec' sx={{ mt: '20px' }}>
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