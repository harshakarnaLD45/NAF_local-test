import { Box } from '@mui/material';
import React from 'react';

import Image1 from '../../../assets/About/About1.png';
import Image2 from '../../../assets/About/About2.png';
import Image3 from '../../../assets/About/About3.png';
import Image4 from '../../../assets/About/About4.png';
import Image5 from '../../../assets/About/About5.png';
import Image6 from '../../../assets/About/About6.png';
import Image7 from '../../../assets/About/About7.png';
import Image8 from '../../../assets/About/About8.png';
import Image9 from '../../../assets/About/About9.png';
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
    { type: 'image', src: Image9 },
    { type: 'image', src: Image10 },
    { type: 'image', src: Image11 },
    { type: 'image', src: Image12 },
    { type: 'image', src: Image13 },
    { type: 'image', src: Image14 },
    { type: 'image', src: Image15 },
    { type: 'video', src: Video1 },
    { type: 'video', src: Video2 },
];

const rows = [
    [0, 3], // Row 1 (2 items)
    [2, 1, 4], // Row 2 (3 items)
    [5, 6], // Row 3 (2 items)
    [7, 8, 9], // Row 4 (3 items)
    [10, 11, 16], // Row 5 (2 items)
    [12, 13, 15], // Row 5 (2 items)
];

function AboutGrid() {
    return (
        <Box className='section-container'
            sx={{
                width: '100%',
                height: '100vh', // Set the container to be 100% of the viewport height
                overflowY: 'auto', // Enable vertical scrolling inside container
                position: 'relative',
                '&::-webkit-scrollbar': {
                    display: 'none', // Hides scrollbar for webkit browsers (Chrome, Safari)
                },
                msOverflowStyle: 'none', // For Internet Explorer 10+
                scrollbarWidth: 'none', // For Firefox
                background: "#525252",
                p: 0
            }}
        >
            <Box sx={{ position: 'relative', padding: '20px' }}>
                {rows.map((row, rowIndex) => (
                    <Box
                        key={rowIndex}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            marginBottom: '20px', // Space between rows
                            flexWrap: 'wrap', // Ensures items wrap on smaller screens
                            gap: '10px', // Adds spacing between items
                        }}
                    >
                        {row.map((itemIndex) => {
                            const item = mediaItems[itemIndex];

                            return (
                                <Box
                                    key={itemIndex}
                                    sx={{
                                        flex: '1 1 30%', // Makes each item take 30% width, but grow as needed
                                        '@media (max-width: 768px)': {
                                            flex: '1 1 45%', // Two items per row on smaller screens
                                        },
                                        '@media (max-width: 480px)': {
                                            flex: '1 1 100%', // One item per row on small screens
                                        },
                                        margin: '10px', // Space between items
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {item.type === 'image' ? (
                                        <img
                                            src={item.src}
                                            alt={`Gallery ${itemIndex}`}
                                            loading="lazy"
                                            style={{
                                                display: 'block', // Remove any space below the image
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                width: '300px', // Fix width to 100% of the container
                                                height: '400px', // Fix height for the video
                                                borderRadius: '25px', // Border radius for the video container
                                                overflow: 'hidden', // Ensure the video respects the border radius
                                            }}
                                        >
                                            <video
                                                src={item.src}
                                                autoPlay
                                                loop
                                                muted
                                                loading="lazy"
                                                style={{
                                                    width: '100%', // Fix width to 100% of the container
                                                    height: '100%', // Fix height for the video
                                                    objectFit: 'cover', // Maintain aspect ratio and cover the container
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default AboutGrid;
