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
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const MachinesSection = ({ selectedMachine }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { lang } = useParams(); 
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [months, setMonths] = useState(24);

    const handleChange = (event) => {
        setMonths(event.target.value);
    };
    const machineData = [
        {
            image: MachineImage7,
            title: t('machines.GourmetMachine'),
            subtitle: t('machines.AImenu'),
            description: t('machines.GourmetMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.Automatedheating'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.AImenulogic'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Sustainablepackaging'), icon: <MachineSmallIcon7 /> },
            ],
            price: 28500,
            monthly: 500,
        },
        {
            image: MachineImage1,
            title: t('machines.PizzaMachine'),
            subtitle: t('machines.AIBaking'),
            description: t('machines.PizzaMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.aIenhancedbaking'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.fullyautomated'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.selfservice'), icon: <MachineSmallIcon7 /> },
            ],
            price: 27500,
            monthly: 500,
        },
        {
            image: MachineImage2,
            title: t('machines.FriesMachine'),
            subtitle: t('machines.AIOil'),
            description: t('machines.PizzaMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.aIenhancedbaking'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.fullyautomated'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.selfservice'), icon: <MachineSmallIcon7 /> },
            ],
            price: 27500,
            monthly: 500,
        },
        {
            image: MachineImage3,
            title: t('machines.IceCreamMachine'),
            subtitle: t('machines.AIMonitoring'),
            description: t('machines.IceMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.Selfservemodel'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.Nostaffingrequired'), icon: <MachineSmallIcon6 /> },
            ],
            price: 16500,
            monthly: 500,
        },
        {
            image: MachineImage4,
            title: t('machines.CandyMachine'),
            subtitle: t('machines.AIMonitoring'),
            description: t('machines.CandyMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.hygienic'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.Kidfriendlyattraction'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Nostaffingrequired'), icon: <MachineSmallIcon7 /> },
            ],
            price: 14500,
            monthly: 450,
        },
        {
            image: MachineImage5,
            title: t('machines.BeerMachine'),
            subtitle: t('machines.AIAgeVerification'),
            description: t('machines.beerMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.AIageverification'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.Chilledbeerseconds'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.fullyMinimalStaff'), icon: <MachineSmallIcon7 /> },
            ],
            price: 14500,
            monthly: 500,
        },
        {
            image: MachineImage6,
            title: t('machines.ReturnMachine'),
            subtitle: t('machines.AIContainerRecognition'),
            description: t('machines.returnMachinesubtitle'),
            idealFor: [
                { icon: <MachineSmallIcon1 />, label: t('machines.Hotel') },
                { icon: <MachineSmallIcon2 />, label: t('machines.GasStation') },
                { icon: <MachineSmallIcon3 />, label: t('machines.Cinemas') },
                { icon: <MachineSmallIcon4 />, label: t('machines.ThemeParks') },
            ],
            features: [
                { text: t('machines.Ecofriendly'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.Automaticsortinglogging'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Rewardsloyaltypoint'), icon: <MachineSmallIcon7 /> },
            ],
            price: 14500,
            monthly: 450,
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
                            <img src={machine.image} alt={machine.title} className='max-mac-img' />
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 6 }}>
                                <button className="download-btn"><DownloadIcon /></button>
                                <AnimateButton route={`/${lang}/contact`} />
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
                                <Typography color="#C2C2C4" className='bodyRegularText3'>{t('machines.Acquisitioncosts')}</Typography>
                                <Typography color="#FA7854" className='bodyMediumText2'>€{machine.price.toLocaleString()} <span style={{ color: "#FA7854" }} className='bodyMediumText3'>+ 19% MwSt</span></Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#262626',
                                py: 2, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                            }}>
                                <Typography color="#C2C2C4" className='bodyRegularText3'>{t('machines.Installment')}</Typography>
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
                                        <span style={{ color: "#FA7854" }} className='bodyMediumText3'>/  {t('machines.Installmentsmonths')}</span>
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography color="#C2C2C4" sx={{ textAlign: 'right' }} className='bodyRegularText5'>
                                {t('machines.PricesannouncedText')}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}

export default MachinesSection;
