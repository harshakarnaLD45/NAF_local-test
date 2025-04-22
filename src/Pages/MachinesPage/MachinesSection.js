import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';

import MachineImage1 from '../../assets/Home/Machine1.png';
import MachineImage2 from '../../assets/Home/Machine2.png';
import MachineImage3 from '../../assets/Home/Machine3.png';
import MachineImage4 from '../../assets/Home/Machine4.png';
import MachineImage5 from '../../assets/Home/Machine5.png';
import MachineImage6 from '../../assets/Home/Machine6.png';
import MachineImage7 from '../../assets/Home/Machine7.png';

import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import { DownloadIcon, MachineSmallIcon1, MachineSmallIcon2, MachineSmallIcon3, MachineSmallIcon4, MachineSmallIcon5, MachineSmallIcon6, MachineSmallIcon7 } from '../../Componenets/CustomIcons';

const MachinesSection = ({ selectedMachine }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [months, setMonths] = useState(24);

    const handleChange = (event) => {
        setMonths(event.target.value);
    };
    const machineData = [
        {
            image: MachineImage7,
            title: 'Gourmet Machine',
            subtitle: 'AI Menu Logic + AI Customer Profiles',
            description: 'Serves restaurant-quality gourmet meals. Uses AI-based meal logic and personalized options.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Offices' },
                { icon: <MachineSmallIcon2 />, label: 'Gyms' },
                { icon: <MachineSmallIcon3 />, label: 'Corporate' },
            ],
            features: [
                { text: 'Automated heating', icon: <MachineSmallIcon5 /> },
                { text: 'AI based menu logic', icon: <MachineSmallIcon6 /> },
                { text: 'Sustainable packaging', icon: <MachineSmallIcon7 /> },
            ],
            price: 28500,
            monthly: 500,
        },
        {
            image: MachineImage1,
            title: 'Pizza Machine',
            subtitle: 'AI Baking Algorithm',
            description: 'Dispenses creamy soft ice cream in 3 flavors, 3 toppings, and 3 types of sprinkles.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Hotel' },
                { icon: <MachineSmallIcon2 />, label: 'Gas Station' },
                { icon: <MachineSmallIcon3 />, label: 'Cinemas' },
                { icon: <MachineSmallIcon4 />, label: 'Theme Parks' },
            ],
            features: [
                { text: 'AI-enhanced baking', icon: <MachineSmallIcon5 /> },
                { text: 'Fully automated', icon: <MachineSmallIcon6 /> },
                { text: 'Self-service', icon: <MachineSmallIcon7 /> },
            ],
            price: 27500,
            monthly: 500,
        },
        {
            image: MachineImage3,
            title: 'Soft Ice Cream Machine',
            subtitle: 'Self-cleaning, Freon R-22',
            description: 'Delivers fresh, creamy ice cream in 5 minutes. Various from NAF options to specialty cones.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Resorts' },
                { icon: <MachineSmallIcon2 />, label: 'Malls' },
            ],
            features: [
                { text: 'Self-clean model', icon: <MachineSmallIcon5 /> },
                { text: 'No staff time required', icon: <MachineSmallIcon6 /> },
            ],
            price: 16500,
            monthly: 500,
        },
        {
            image: MachineImage4,
            title: 'Cotton Candy Machine',
            subtitle: 'Self-clean & Energy Efficient',
            description: 'Fresh cotton candy in multiple colors, flavors and shapes — over 100+ automated tool sets.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Events' },
                { icon: <MachineSmallIcon2 />, label: 'Playgrounds' },
            ],
            features: [
                { text: '100% hygienic', icon: <MachineSmallIcon5 /> },
                { text: 'No refilling distraction', icon: <MachineSmallIcon6 /> },
                { text: 'No staffing required', icon: <MachineSmallIcon7 /> },
            ],
            price: 14500,
            monthly: 450,
        },
        {
            image: MachineImage5,
            title: 'Beer Machine',
            subtitle: 'AI Detection Age Verification',
            description: 'Serving chilled beer 24/7 while ensuring legal safety through smart AI-powered age verification.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Pubs' },
                { icon: <MachineSmallIcon2 />, label: 'Events' },
            ],
            features: [
                { text: 'AI-driven age verification', icon: <MachineSmallIcon5 /> },
                { text: 'Chilled beer in seconds', icon: <MachineSmallIcon6 /> },
                { text: 'Fully automated for minimal staff', icon: <MachineSmallIcon7 /> },
            ],
            price: 14500,
            monthly: 500,
        },
        {
            image: MachineImage6,
            title: 'Return Machine',
            subtitle: 'AI Camera Recognition',
            description: 'Designed to support closed loop systems. It uses advanced AI to detect and sort reusable containers efficiently.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Supermarkets' },
                { icon: <MachineSmallIcon2 />, label: 'Events' },
            ],
            features: [
                { text: 'Eco-friendly', icon: <MachineSmallIcon5 /> },
                { text: 'Automatic sorting and logging', icon: <MachineSmallIcon6 /> },
                { text: 'Rewards & loyalty points', icon: <MachineSmallIcon7 /> },
            ],
            price: 14500,
            monthly: 450,
        },
        {
            image: MachineImage2,
            title: 'Fries Machine',
            subtitle: 'Oil Management AI',
            description: 'Delivers fresh, crispy fries in 3 minutes. Stainless steel fryer. AI optimized oil use.',
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: 'Amusement Parks' },
                { icon: <MachineSmallIcon2 />, label: 'Malls' },
                { icon: <MachineSmallIcon3 />, label: 'Cinemas' },
            ],
            features: [
                { text: 'AI oil control baking', icon: <MachineSmallIcon5 /> },
                { text: 'Fully automated', icon: <MachineSmallIcon6 /> },
                { text: 'Self-service', icon: <MachineSmallIcon7 /> },
            ],
            price: 27500,
            monthly: 500,
        },
    ];

    const visibleMachines = selectedMachine === "All"
        ? machineData
        : machineData.filter(machine => machine.title === selectedMachine);

    return (
        <Box>
            {visibleMachines.map((machine, index) => {
                const isEvenRow = index % 2 === 1;
                const isReversed = !isMobile && isEvenRow;
                return (
                    <Box className='section-container'
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : isReversed ? 'row-reverse' : 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 6, // space between each machine section
                        }}
                    >
                        {/* Left Side - Image + Button */}
                        <Box sx={{ flex: 1, display: 'flex', gap: 3, flexDirection: 'column', alignItems: 'center' }}>
                            <img src={machine.image} alt={machine.title} style={{ maxWidth: '100%', height: 'auto' }} />
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 6 }}>
                                <button className="download-btn"><DownloadIcon /></button>
                                <AnimateButton />
                            </Box>
                        </Box>

                        {/* Right Side - Details */}
                        <Box sx={{ flex: 1, display: 'flex', gap: '10px', flexDirection: 'column' }}>
                            <Typography variant="subtitle2" color="#FA7854" className='bodyRegularText4'>{machine.subtitle}</Typography>
                            <Typography variant="h2" color="#FCFCFC" className='headings-h2'>{machine.title}</Typography>
                            <Typography color="#C2C2C4" className='bodyRegularText3'>{machine.description}</Typography>

                            <Typography variant="h6" color="#C2C2C4" className='bodyRegularText4'>Ideal for:</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', gap: 4 }}>
                                {machine.idealFor.map((item, idx) => (
                                    <Box key={idx}>
                                        {item.icon}
                                        <Typography variant="body2" color='#C2C2C4' className='bodyRegularText5'>{item.label}</Typography>
                                    </Box>
                                ))}
                            </Box>

                            {machine.features.map((feature, i) => (
                                <Box key={i} sx={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    py: 2, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                                }}>
                                    <Typography color="#C2C2C4" className='bodyRegularText3'>{feature.text}</Typography>
                                    {feature.icon}
                                </Box>
                            ))}

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#262626',
                                py: 3, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                            }}>
                                <Typography color="#C2C2C4" className='bodyRegularText3'>Acquisition costs</Typography>
                                <Typography color="#FA7854" className='bodyMediumText2'>€{machine.price.toLocaleString()} <span style={{ color: "#FA7854" }} className='bodyMediumText3'>+ 19% VAT</span></Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#262626',
                                py: 2, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                            }}>
                                <Typography color="#C2C2C4" className='bodyRegularText3'>Installments</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                    <Select
                                        value={months}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Installment duration' }}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    backgroundColor: '#262626',
                                                    color: '#C2C2C4',
                                                },
                                            },
                                        }}
                                        sx={{
                                            color: '#C2C2C4',
                                            border: '1px solid #5E5E5E',
                                            borderRadius: '8px',
                                            px: 1,
                                            minWidth: '120px',
                                            '& .MuiSelect-icon': {
                                                color: '#C2C2C4',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused': {
                                                border: '1px solid #5E5E5E', // keep same border when focused
                                                boxShadow: 'none',
                                            },
                                        }}
                                        className='bodyRegularText5'
                                    >
                                        <MenuItem value={12}>12 Months</MenuItem>
                                        <MenuItem value={18}>18 Months</MenuItem>
                                        <MenuItem value={24}>24 Months</MenuItem>
                                        <MenuItem value={36}>36 Months</MenuItem>
                                    </Select>
                                    {/* <Typography color="#FA7854" className='bodyMediumText2'>€{machine.monthly}* <span style={{ color: "#FA7854" }} className='bodyMediumText3'>/ month</span></Typography> */}
                                    <Typography color="#FA7854" className='bodyMediumText2'>
                                        €{Math.round(machine.price / months).toLocaleString()}*
                                        <span style={{ color: "#FA7854" }} className='bodyMediumText3'>/ month</span>
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography color="#C2C2C4" sx={{ textAlign: 'right' }} className='bodyRegularText5'>
                                *Prices announced after market launch based on the prototypes shown
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}

export default MachinesSection;
