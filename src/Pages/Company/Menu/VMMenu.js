import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VegetarianIcon, VeganIcon, FishIcon, GlutenIcon, LactoseIcon, ProteinIcon, DietaryIcon, MapIcon } from '../../../Componenets/CustomIcons';
import SlotCard from './SlotCard';
import { Box, Grid, Typography, Button, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import LocationModal from './LocationModal';
import DietaryModal from './DietaryModal';

const tags = [
    { IconComponent: VegetarianIcon, label: "Vegetarian" },
    { IconComponent: VeganIcon, label: "Vegan" },
    { IconComponent: FishIcon, label: "Fish-Free" },
    { IconComponent: GlutenIcon, label: "Gluten-Free" },
    { IconComponent: LactoseIcon, label: "Lactose-Free" },
    { IconComponent: ProteinIcon, label: "High Protein" },
];

function VMMenu() {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [locationModalOpen, setLocationModalOpen] = useState(false);
    const [locationData, setLocationData] = useState([]);
    const [selectedMachineId, setSelectedMachineId] = useState(null);
    const [dietaryModalOpen, setDietaryModalOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // sm and below (mobile)

    const allSlots = menuData.flatMap((aisle) => aisle.slotItems);

    // Determine how many items to show in 4 rows based on screen
    const itemsPerRow = isSmallScreen ? 1 : 2; // 1 on mobile, 2 on tablet/desktop
    const [visibleCount, setVisibleCount] = useState(itemsPerRow * 4);

    // const visibleSlots = showAll ? allSlots : allSlots.slice(0, maxVisibleItems);
    const visibleSlots = allSlots.slice(0, visibleCount);

    // Fetch all locations on mount
    useEffect(() => {
        axios.get('https://api.naf-cloudsystem.de/api/NAFWebsite/franchise/first/locations')
            .then(res => {
                const locations = res.data;
                setLocationData(locations);

                // Select first machine automatically
                if (locations.length > 0 && locations[0].machines.length > 0) {
                    const firstMachine = locations[0].machines[0];
                    setSelectedMachineId(firstMachine.id);
                }
            })
            .catch(err => {
                console.error('Failed to fetch locations', err);
                setError('Failed to load locations');
            });
    }, []);

    useEffect(() => {
        if (selectedMachineId) {
            fetchMenu();
        }
    }, [selectedMachineId, selectedTags]);


    const fetchMenu = async () => {
        try {
            setLoading(true);
            const queryString = selectedTags.length ? `?tags=${selectedTags.join(",")}` : "";
            const response = await axios.get(`https://api.naf-cloudsystem.de/api/NAFWebsite/${selectedMachineId}/all${queryString}`);
            setMenuData(response.data);
        } catch (error) {
            console.error("Error fetching aisle data:", error);
            setError('Failed to fetch slot data');
        } finally {
            setLoading(false);
        }
    };

    // Handle loading/error states
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <CircularProgress color="inherit" />
            </Box>
        );
    }

    if (error) return <div>{error}</div>;

    return (
        <Box className='section-container'>
            {/* Intro Text */}
            <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4' }}>
                Explore our live inventory to see what delicious food and snacks are currently available in our vending machines throughout the city. Check prices, discover special offers, and find the perfect treat to satisfy your cravings.
            </Typography>

            {/* Location and Dietary Buttons */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, justifyContent: 'space-between', gap: 2, alignItems: { xs: 'left', md: 'center' }, my: { xs: 2, md: 4 } }}>
                <Button
                    variant="contained"
                    onClick={() => setLocationModalOpen(true)}
                    disableElevation
                    sx={{
                        backgroundColor: '#262626',
                        border: '1px solid #525252',
                        borderRadius: '12px',
                        padding: { xs: '14px', sm: '18px', md: '24px' },
                        justifyContent: 'space-between',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#262626' },
                    }}
                    endIcon={<MapIcon />}
                >
                    <Typography variant="h6" color='#FCFCFC' sx={{ mr: 4 }} className='bodyRegularText3'>
                        Select Machine Location
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setDietaryModalOpen(true)}
                    disableElevation
                    sx={{
                        backgroundColor: '#262626',
                        border: '1px solid #525252',
                        borderRadius: '12px',
                        padding: { xs: '14px', sm: '18px', md: '24px' },
                        justifyContent: 'space-between',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#262626' },
                    }}
                    endIcon={<DietaryIcon />}
                >
                    <Typography variant="h6" color='#FCFCFC' sx={{ mr: 4 }} className='bodyRegularText3'>
                        Dietary Preferences
                    </Typography>
                </Button>
            </Box>

            {/* Slot Data */}
            <Grid container spacing={3}>
                {visibleSlots.map((slot) => (
                    <Grid item xs={12} sm={6} md={3} key={slot.slotId}>
                        <SlotCard slot={slot} tags={tags} />
                    </Grid>
                ))}
            </Grid>

            {allSlots.length > itemsPerRow * 4 && (
                <Box mt={3} textAlign="center">
                    {visibleCount < allSlots.length ? (
                        <Button className='bodyRegularText3'
                            variant="outlined"
                            sx={{ color: '#FCFCFC', borderColor: '#FCFCFC', border: 'none', textTransform: 'none', textDecoration: 'underline' }}
                            onClick={() => setVisibleCount(prev => prev + itemsPerRow * 2)}
                        >
                            View More
                        </Button>
                    ) : (
                        <Button className='bodyRegularText3'
                            variant="outlined"
                            sx={{ color: '#FCFCFC', borderColor: '#FCFCFC', border: 'none', textTransform: 'none', textDecoration: 'underline' }}
                            onClick={() => setVisibleCount(itemsPerRow * 4)}
                        >
                            View Less
                        </Button>
                    )}
                </Box>
            )}

            {/* Modal to select location */}
            <LocationModal
                open={locationModalOpen}
                onClose={() => setLocationModalOpen(false)}
                locations={locationData}
                selected={selectedMachineId}
                onSelect={(machineId) => {
                    const selectedCity = locationData.find(city =>
                        city.machines.some(machine => machine.id === machineId)
                    );
                    const selectedMachine = selectedCity?.machines.find(m => m.id === machineId);

                    if (selectedMachine) {
                        setSelectedMachineId(selectedMachine.id);
                    }
                    setLocationModalOpen(false);
                }}
            />

            {/* Modal to dietary preferences */}
            <DietaryModal
                open={dietaryModalOpen}
                onClose={() => setDietaryModalOpen(false)}
                selected={selectedTags}
                onApply={(tags) => {
                    setSelectedTags(tags);
                }}
                tags={tags}
            />
        </Box>
    );
}

export default VMMenu;
