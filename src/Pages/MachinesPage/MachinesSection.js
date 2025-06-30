import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';

import MachineImage1 from '../../assets/Home/Pizza-machine.png';
import MachineImage2 from '../../assets/Home/Fries-machine.png';
import MachineImage3 from '../../assets/Home/Ice-cream-machine.png';
import MachineImage4 from '../../assets/Home/Cotton-candy-machine.png';
import MachineImage5 from '../../assets/Home/Beer-machine.png';
import MachineImage6 from '../../assets/Home/Return-machine.png';
import MachineImage7 from '../../assets/Home/Gourmet-machine.png';

import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import { DownloadIcon,SnackBar,CampingSite,Companies,
    Pizzarias,Festivals,OfficaCenters,Festivals2,Villagefairs
    ,Zoos,AnimalParks,Events,Hotels,Clubs,RoofTop,
    
    
    MachineSmallIcon1, MachineSmallIcon2, MachineSmallIcon3, MachineSmallIcon4, MachineSmallIcon5, MachineSmallIcon6, MachineSmallIcon7 } from '../../Componenets/CustomIcons';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const MachinesSection = ({ selectedMachine }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { lang } = useParams();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [months, setMonths] = useState(60);

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
                { icon: <SnackBar/>, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <OfficaCenters />, label: t('machines.Officecenters') },
                 { icon: <Companies />, label: t('machines.Companies') },
            ],
            features: [
                { text: t('machines.Automatedheating'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.AImenulogic'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Sustainablepackaging'), icon: <MachineSmallIcon7 /> },
            ],
            price: 23982,
            monthlyRates: {
                36: 824.72,
                48: 635.61,
                60: 525.30,
              
            },
        },
        {
            image: MachineImage1,
            title: t('machines.PizzaMachine'),
            subtitle: t('machines.AIBaking'),
            description: t('machines.PizzaMachinesubtitle'),
            idealFor: [
                { icon: <SnackBar/>, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <Companies />, label: t('machines.Companies') },
                { icon: <Pizzarias />, label: t('machines.Pizzerias') },
            ],
            features: [
                { text: t('machines.aIenhancedbaking'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.fullyautomated'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.selfservice'), icon: <MachineSmallIcon7 /> },
            ],
            price: 29425,
            monthlyRates: {
                36: 863.50,
                48: 665.50,
                60: 550.00,
               
            },
        },
        {
            image: MachineImage2,
            title: t('machines.FriesMachine'),
            subtitle: t('machines.AIOil'),
            description: t('machines.PizzaMachinesubtitle'),
            idealFor: [
                 { icon: <SnackBar/>, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites')},
            ],
            features: [
                { text: t('machines.aIenhancedbaking'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.fullyautomated'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.selfservice'), icon: <MachineSmallIcon7 /> },
            ],
            price: 45877,
            monthlyRates: {
                36: 1020.50,
                48: 786.50,
                60: 650.00,
            },
        },
        {
            image: MachineImage3,
            title: t('machines.IceCreamMachine'),
            subtitle: t('machines.AIMonitoring'),
            description: t('machines.IceMachinesubtitle'),
            idealFor: [
                 { icon: <SnackBar/>, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites')},
                { icon: <AnimalParks />, label: t('machines.AnimalParks') },
                { icon: <Zoos />, label: t('machines.Zoos') },
            ],
            features: [
                { text: t('machines.Selfservemodel'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.Nostaffingrequired'), icon: <MachineSmallIcon6 /> },
            ],
            price: 23982,
            monthlyRates: {
                36: 824.72,
                48: 635.61,
                60: 525.30,
              
            },
        },
        {
            image: MachineImage4,
            title: t('machines.CandyMachine'),
            subtitle: t('machines.AIMonitoring'),
            description: t('machines.CandyMachinesubtitle'),
            idealFor: [
                 { icon: <SnackBar/>, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites')},
                { icon: <AnimalParks />, label: t('machines.AnimalParks') },
                { icon: <Zoos />, label: t('machines.Zoos') },
            ],
            features: [
                { text: t('machines.hygienic'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.Kidfriendlyattraction'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Nostaffingrequired'), icon: <MachineSmallIcon7 /> },
            ],
            price: 13636,
            monthlyRates: {
                36: 462.55,
                48: 359.60,
                60: 297.25,
               
            },
        },
        {
            image: MachineImage5,
            title: t('machines.BeerMachine'),
            subtitle: t('machines.AIAgeVerification'),
            description: t('machines.beerMachinesubtitle'),
            idealFor: [
                { icon: <Festivals />, label: t('machines.Festivals') },
                { icon: <Villagefairs />, label: t('machines.VillageFairs') },
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
                { icon: <Events />, label: t('machines.Events') },
                { icon: <Hotels />, label: t('machines.Hotel') },
                { icon: <Festivals2 />, label: t('machines.Festivals') },
                { icon: <Clubs />, label: t('machines.Clubs') },
                { icon: <RoofTop />, label: t('machines.Rooftopbars') },
                 
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
                                {(machine.title === t('machines.BeerMachine') || machine.title === t('machines.ReturnMachine')) ? (
                                    <Typography variant="h6" color="#FA7854" className='bodyRegularText4'>
                                       {t('machines.availablesoon')}
                                    </Typography>
                                ) : (
                                    <>
                                        <Typography color="#FA7854" className='bodyMediumText2'>€{machine.price.toLocaleString()} <span style={{ color: "#FA7854" }} className='bodyMediumText3'>+ 19% MwSt</span></Typography>
                                    </>
                                )}
                            </Box>

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#262626',
                                py: 2, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                            }}>
                                <Typography color="#C2C2C4" className='bodyRegularText3'>{t('machines.Installment')}</Typography>
                                {(machine.title === t('machines.BeerMachine') || machine.title === t('machines.ReturnMachine')) ? (
                                    <Typography variant="h6" color="#FA7854" className='bodyRegularText4'>
                                       {t('machines.availablesoon')}
                                    </Typography>
                                ) : (
                                    <>
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
                                                <MenuItem value={36}>36  {t('machines.Months')}</MenuItem>
                                                <MenuItem value={48}>48  {t('machines.Months')}</MenuItem>
                                                <MenuItem value={60}>60  {t('machines.Months')}</MenuItem>
                                                
                                            </Select>
                                            {/* <Typography color="#FA7854" className='bodyMediumText2'>€{machine.monthly}* <span style={{ color: "#FA7854" }} className='bodyMediumText3'>/ month</span></Typography> */}
                                            <Typography color="#FA7854" className='bodyMediumText2'>
                                                €{machine.monthlyRates?.[months]?.toFixed(2) || "—"}*
                                                <span style={{ color: "#FA7854" }} className='bodyMediumText3'>/  {t('machines.Installmentsmonths')}</span>
                                            </Typography>

                                        </Box>
                                    </>
                                )}
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
