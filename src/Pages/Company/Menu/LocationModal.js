import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LocationModal = ({ open, onClose, locations, selected, onSelect }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
            PaperProps={{
                sx: {
                    backgroundColor: "#1E1E1E",
                    color: "#FCFCFC",
                    borderRadius: '16px',
                }
            }}
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" className='bodyMediumText1' color='#FCFCFC'></Typography>
                <IconButton onClick={onClose} sx={{ color: '#FCFCFC' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {locations.map(city => (
                    <Box key={city.city} sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" className='bodyMediumText1' sx={{ color: '#FCFCFC', mb: 1 }}>{city.city}</Typography>
                        <RadioGroup
                            value={selected}
                            onChange={(e) => onSelect(Number(e.target.value))} // Convert string to number if needed
                        >
                            {city.machines.map(station => (
                                <FormControlLabel
                                    key={station.id}
                                    value={station.id}
                                    control={<Radio className='bodyRegularText3' sx={{ color: '#C2C2C4', '&.Mui-checked': { color: '#FCFCFC' } }} />}
                                    label={<Typography className='bodyRegularText3' sx={{ color: '#C2C2C4' }}>{station.location}</Typography>}
                                />
                            ))}
                        </RadioGroup>
                    </Box>
                ))}
            </DialogContent>
        </Dialog>
    );
};

export default LocationModal;
