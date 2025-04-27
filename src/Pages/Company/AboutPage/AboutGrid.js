import React from 'react';
import { Box } from '@mui/material';

import Image1 from '../../../assets/About/About1.png';
import Image2 from '../../../assets/About/About2.png';
import Image3 from '../../../assets/About/About3.png';
import Image4 from '../../../assets/About/About4.png';
import Image5 from '../../../assets/About/About5.png';
import Image6 from '../../../assets/About/About6.png';
import Image7 from '../../../assets/About/About7.png';
import Image8 from '../../../assets/About/About8.png';
import Image10 from '../../../assets/About/About10.png';
import Image11 from '../../../assets/About/About11.png';
import Image12 from '../../../assets/About/About12.png';
import Image13 from '../../../assets/About/About13.png';
import Image14 from '../../../assets/About/About14.png';
import Image15 from '../../../assets/About/About15.png';
import Video1 from '../../../assets/About/AboutVideo1.mp4';
import Video2 from '../../../assets/About/AboutVideo2.mp4';

const mediaItems = [
    { type: 'image', src: Image1 },
    { type: 'image', src: Image2 },
    { type: 'image', src: Image3 },
    { type: 'image', src: Image4 },
    { type: 'image', src: Image5 },
    { type: 'image', src: Image6 },
    { type: 'image', src: Image7 },
    { type: 'image', src: Image8 },
    { type: 'image', src: Image10 },
    { type: 'image', src: Image11 },
    { type: 'image', src: Image12 },
    { type: 'image', src: Image13 },
    { type: 'image', src: Image14 },
    { type: 'image', src: Image15 },
    { type: 'video', src: Video1 },
    { type: 'video', src: Video2 },
];

const AboutCarousel = () => {
    return (
        <Box className='section-container' sx={{ overflow: 'hidden', width: '100%', p: 0 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '20px',
                    width: 'fit-content',
                    animation: 'aboutScroll 100s linear infinite',
                    px: '20px',
                }}
            >
                {[...mediaItems, ...mediaItems, ...mediaItems].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexShrink: 0,
                            borderRadius: '10px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            // Responsive width for different screen sizes
                            width: {
                                xs: '200px', // Mobile size
                                sm: '250px', // Small screen size
                                md: '300px', // Medium screen size
                                lg: '350px', // Large screen size
                            },
                        }}
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={`Media-${index}`}
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'cover',
                                }}
                            />
                        ) : (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>

            {/* CSS Keyframes */}
            <style jsx>{`
                @keyframes aboutScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </Box>
    );
};

export default AboutCarousel;
