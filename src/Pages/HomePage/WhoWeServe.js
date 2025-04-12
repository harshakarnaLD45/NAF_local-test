import { Box, Typography } from '@mui/material'
import React from 'react'
import hotel from '../../assets/Home/Serve1.png';
import gasStation from '../../assets/Home/Serve3.png';
import school from '../../assets/Home/Serve5.png';
import office from '../../assets/Home/Serve2.png';
import events from '../../assets/Home/Serve4.png';
import publicPic from '../../assets/Home/Serve6.png';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';

const WhoWeServe = () => {
    const serveCards1 = [
        {
            id: 1,
            title: "Hotels & Resorts",
            image: hotel,
        },
        {
            id: 2,
            title: "Gas Stations & Rest Areas",
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
            title: "Offices & Factories",
            image: office,
        },
        {
            id: 2,
            title: "Events & Festivals",
            image: events,
        },
        {
            id: 3,
            title: "Public Institutions",
            image: publicPic,
        },

    ];

    return (
        <div className='whoweServe-sec'>
            <Box sx={{ position: 'relative' }} className='whoweServe-left-sec'>
                <Box sx={{
                    position: 'sticky', marginTop: '150px', top: '100px', // adjust this based on your layout / header height
                    zIndex: 10,
                }}>
                    {/* <Typography variant='h1' className='headings-h2 whoweServe-left-sec1-text'>
                        Who We Serve
                    </Typography> */}
                    <ScrollMaskText text="Who We Serve" />
                    <Typography color='#C2C2C4' variant='h1' className='bodyRegularText3 whoweServe-left-sec2-text'>
                        NAF Germany provides customized vending solutions to a diverse range of industries. We understand the unique needs of each sector and offer tailored solutions to enhance convenience, boost efficiency, and improve customer satisfaction.
                    </Typography>
                </Box>
            </Box>
            <Box className='whoweServe-right-sec ' sx={{ paddingTop: '150px' }}>
                {/* <Box className='whoweServe-right-sec1'> */}
                <Box className='whoweServe-right-sec1'>

                    {serveCards1.map((card) => (
                        <Box
                            key={card.id}
                            className="whoweServe-right-card-sec1"
                            sx={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                padding: '30px 20px',
                                // width: '450px',
                                // height: '450px',
                                alignItems: 'end',
                                display: 'flex',
                                // justifyContent: 'center',
                            }}
                        >
                            <Typography
                                sx={{ alignSelf: 'end' }}
                                variant="h1"
                                color="#FCFCFC"
                                className="bodyMediumText1 whoweServe-right-sec1-text"
                            >
                                {card.title}
                            </Typography>
                        </Box>
                    ))}


                </Box>
                <Box className='whoweServe-right-sec1 whoweServe-right-sec2'>

                    {serveCards2.map((card) => (
                        <Box
                            key={card.id}
                            className="whoweServe-right-card-sec1"
                            sx={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                padding: '30px 20px',
                                // width: '450px',
                                // height: '450px',
                                alignItems: 'end',
                                display: 'flex',
                                // justifyContent: 'center',
                            }}
                        >
                            <Typography
                                sx={{ alignSelf: 'end' }}
                                variant="h1"
                                color="#FCFCFC"
                                className="bodyMediumText1 whoweServe-right-sec1-text"
                            >
                                {card.title}
                            </Typography>
                        </Box>
                    ))}


                </Box>
            </Box>
        </div>
    )
}

export default WhoWeServe